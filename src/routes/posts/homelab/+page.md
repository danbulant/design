---
title: My Homelab setup
date: 2023-08-28
author: Daniel Bulant
authorIcon: /logo.png
categories: [programming, homelab]
description: I had setuped my homelab quite a while ago, but I never wrote about it. So here it is.
---

I had setuped my homelab quite a while ago, but I never wrote about it.

I didn't own a physical server at the start, so I started experimenting with VPSs. For my 'journey' I chose to use contabo purely because of price. I wouldn't recommend it to anyone who wants to use it for anything serious, cares about stability, performance or privacy, but I don't care and it's cheap.

Once I had my server, I did what any sensible person would do and started setting it up in an overly complicated way.  
And on Arch linux.

Isn't Arch linux bad for your servers? It depends. In my case, I only run nomad, consul, dnsmasq, docker and podman. When you install these on Ubuntu (except dnsmasq), you are told to add custom repositories which use a rolling-release model anyway. So I just use Arch linux, which is a rolling-release distro by default, and I don't have to find which repositories to add.

## The Vision

I wanted something like kubernetes, but without the complexity of kubernetes. I chose **nomad** for that, simply because I kept reading about Hashicorp's stuff and I liked their configuration and design.

The tech stack running directly on the machine:

- [nomad](//nomadproject.io/) - job scheduler
- [consul](//consul.io/) - service discovery, DNS service discovery
- [dnsmasq](//dnsmasq.org) - DNS server (split DNS resolver)
- [docker](//docker.com/)
- [podman](//podman.io/) - docker alternative
- [tailscale](//tailscale.com/) - VPN

## Initial provision

Cloud-init is a way to provision a server with a simple configuration file. Not all providers support cloud-init, and not all images support them. If they don't support it, you can just write the few commands yourself.

You can install packages, run scripts, create users, etc.  
Something like this works for me:

```yaml
manage_resolv_conf: true
resolv_conf: # edits /etc/resolv.conf
  nameservers:
    - "1.1.1.1"
    - "8.8.8.8"

package_update: true # Runs apt update
package_upgrade: true # Runs apt upgrade / pacman -Syu

packages: # Installs packages (apt install, pacman -Sy, etc)
  - python3
  - python3-pip

runcmd:
  - ln /usr/bin/python /usr/bin/python3
  - pip install ansible
  - echo "\nssh-rsa YOUR SSH KEY\n" >> /home/YOUR USER/.ssh/authorized_keys

# Useless message that will be printed at the end of the first boot (once the config is applied)
final_message: "[$TIMESTAMP] Boot took $UPTIME seconds. SSH into it and configure the rest via ansible"
```

## Ansible

What's the '[ansible](https://ansible.com)' thing above? It's a more advanced tool for provisioning *and managing* a fleet of servers, made by RedHat. It's written in python and uses ssh to connect to the servers (it's about as fast as you'd expect, so be prepared for waiting for few seconds up to few minutes between each change in configuration).

Once you write the configuration, you should be able to run it on multiple servers and it should just work ™️.  
At least, that's the idea. In reality, due to different systems, networking, etc, you'll likely have to tweak it a bit and debug it a lot.

Quick terminology:

- playbook - main entry file
- role - a small reusable part that contains tasks and it's own variables and templates
- task - a single action, like installing a package, creating a user, etc
- variable - a variable that can be used in templates, tasks, etc, also sometimes called a *fact*
- template - a file that can be rendered with variables
- handler - a task that is run when a task notifies it (like restarting a service when it's config changes)

My main playbook looks like this:

```yaml
- hosts: all
  name: Initial set up
  tasks:
    - import_tasks: tasks/users.yml
      name: Create users
    - name: Include job variables
      include_vars:
        file: jobs.yml

- hosts: all
  name: Basic maintenance
  vars:
    nomad_group_name: all
    nomad_docker_dmsetup: false
    consul_group_name: all
    consul_dnsmasq_servers:
      - '1.1.1.1' # We have DNSMasq before consul, not the other way around, so if something gets to consul it's always just .consul domain
      - '8.8.8.8'
    consul_autopilot_enable: true
    consul_os_packages: []
    consul_encrypt_enable: true
    consul_node_role: bootstrap
    consul_install_from_repo: true
    consul_install_remotely: true
    consul_dnsmasq_no_resolv: true
    consul_iface: tailscale0
    nomad_debug: true
    nomad_node_role: both #Shouldn't be used in production, but it works for me
    nomad_use_consul: true
    nomad_host_volumes: []
    nomad_raft_protocol: 3
    consul_version: 1.15.1-1
    nomad_options:
      "docker.cleanup.image.delay": "30m"
    nomad_servers:
      - "YOUR HOSTNAME HERE"
    nomad_host_network:
      - name: vpn
        interface: tailscale0
    # You can also add names like 'public' for publicly facing services
    nomad_plugins:
      docker:
        config:
          volumes:
            enabled: true # Security warning: This allows all nomad jobs to read any file on the system by mounting any folder
            # If you want a secure environment, use nomad_host_volumes instead
          gc:
            image: true
            image_delay: 10m
    nomad_docker_enable: true

  roles:
    - { role: dnsmasq, become: true }
    - role: docker
    - role: address_setup
    - { role: ansible-consul, become: yes }
    - role: podman
    - role: nomad
- hosts: all
  name: Start nomad jobs
  strategy: free
  tasks:
    - import_tasks: tasks/jobs.yml
```

## VPN

I'm using [Tailscale](//tailscale.com) VPN, which securely connects servers to each other without using their servers as a proxy, and without me having to go through the pain of setting up Wireguard (it's built on it).
It's very cheap because of it's price of free for 100 devices and up to 3 users.

Setup is really easy so I skipped adding it to ansible - you *can* do that, but it's simpler to install it manually - `pacman -Sy tailscale`, `systemctl enable --now tailscaled` and `tailscale up` which will ask for you to log into your tailscale account (via URL you open in browser).

You can optionally enable exit node, which will allow you to access internet through your server (and bypass geo-blocking, have a secure connection on unsecure network etc).  
And their [tech blog](https://tailscale.com/blog/) and [documentation](https://tailscale.com/kb/1017/install/) are really good.

## DNSMasq

My DNS server of choice. It runs locally, and manages routing DNS requests - either to consul (if it ends with .consul), tailscale (if ts.net) or to the main recursive DNS, in my case Cloudflare DNS ([1.1.1.1](http://1.1.1.1)).

## Consul

Consul is a tool mainly for service discovery - it manages a list of services and their address/port combos. It also has a DNS server built-in, so you can use it to resolve services by their name ("service name".service.consul).  
It also has a key-value store, but I don't use it.

### Installation

I'm using ansible-consul role

### Configuration

As I'm using a secure VPN to connect the servers, I skipped TLS configuration and lan/wan separation.  

So I first get the local IP address of selected interface (tailscale0)

```yaml
- name: Get local IP
  command: "sh -c \"ip address show dev {{consul_iface}} scope global | grep 'inet ' | awk '{print $2}' | cut -f1 -d'/'\""
  register: local_ip_cmd
```

And then set the relevant facts

```yaml
- name: Set consul variables
  set_fact:
    consul_advertise_address: "{{ local_ip_cmd.stdout }}"
    consul_advertise_address_wan: "{{ local_ip_cmd.stdout }}"
    nomad_advertise_address: "{{ local_ip_cmd.stdout }}"
    nomad_advertise_address_wan: "{{ local_ip_cmd.stdout }}"
    nomad_bind_address: "{{ local_ip_cmd.stdout }}"
```
