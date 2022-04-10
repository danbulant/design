<script>
    import darkmode from "$lib/stores/darkmode";

    export var selected = true;

    var shouldClose = true;
    /**
     * @param {MouseEvent} e
     */
    function close(e) {
        if(e.target.href || e.target.classList.contains("a")) return;
        if(shouldClose) selected = null;
    }
</script>

<div class="dialog" class:dark={$darkmode} class:selected on:mousedown={() => shouldClose = true} on:mousemove={() => shouldClose = false} on:mouseup={close}>
    <div class="main">
        {#if selected === "typescript"}
            <h2>Typescript</h2>
            <p><a href="https://typescriptlang.org" target="_blank">Typescript</a> prevents bugs and makes it easier to develop new functionality, as good IDEs will show types without having to go through documentation.</p>
            <p>Most of my new projects use Typescript. And those that don't have native Typescript have type definitions, like for example <a href="https://github.com/iceproductions/Commando" target="_blank">Commando</a>.</p>
            <p>Typescript has great integration with Deno, so whenever I use Deno for my scripts, I also use Typescript. An example can be found <a href="https://github.com/danbulant/colors" target="_blank">in this repository</a>.</p>
            <p>More information about Typescript can be found <a href="https://typescriptlang.org" target="_blank">here</a>.</p>
        {:else if selected === "rust"}
            <h2>Rust</h2>
            <p><a href="https://rust-lang.org" target="_blank" rel="noopener noreferrer">Rust</a> is a low-level memory-safe programming language by Mozilla. It has the speed of C and memory safety of high level languages (like Javascript).</p>
            <p>I wanted to learn a low-level programming language to find out more about how computers work. I looked into multiple languages, but Rust seemed the best choice, as it's a low-level language with automatic memory handling.</p>
            <p>To test out my knowledge, I tried to create a simple <a href="https://github.com/danbulant/rush" target="_blank" rel="noopener noreferrer">shell</a>, and although I didn't finish it because I found out I was just reinventing the wheel (<a href="https://fishshell.com" rel="noopener noreferrer">Fish shell</a> in this case), I made great progress (it parses essentially everything normal shell should, and supports basic command running).</p>
        {:else if selected === "x11"}
            <h2>X11</h2>
            <p>I love reading about how computers work, especially in case of <span class="a" on:click={() => selected = "linux"}>Linux</span>.</p>
            <p>X server (using X11 protocol) is currently the most used window handler in Linux.</p>
            <p>I tried writing my own simple Window Manager in Javascript, which posed additional challenge, as X11 doesn't have official implementation for Node.JS. For the basic communication, I used <a href="https://github.com/sidorares/node-x11" rel="noopener noreferrer">node-x11</a>, which implements only the basic X11 protocol without any abstraction (like what <code>xlib</code> does for C).</p>
            <p>The code for the simple Window Manager (mostly an experiment) can be found <a href="https://github.com/danbulant/test-x" target="_blank" rel="noopener noreferrer">here</a>. This project also uses Vagrant by HashiCorp.</p>
        {:else if selected === "cs"}
            <h2>C#</h2>
            <p>I'm learning C# at my school, in addition to learning Unity and looking into the osu!framework.</p>
            <p>Currently, I don't have any project worth sharing.</p>
        {:else if selected === "git"}
            <h2>Git + GitHub</h2>
            <p>I use Git version control system for all of my projects, even if I don't upload them to GitHub. Most of my projects can be found on GitHub.</p>
            <p>My GitHub profile is @<a href="https://github.com/danbulant" target="_blank" rel="noopener noreferrer">danbulant</a>.</p>
            <p>The source code of this website is available <a href="https://github.com/danbulant/design" target="_blank" rel="noopener noreferrer">here</a></p>
        {:else if selected === "docker"}
            <h2>Docker + Docker compose + Docker desktop</h2>
            <p><a href="https://www.docker.com" rel="noopener noreferrer" target="_blank">Docker</a> is the most widely used container runtime. <a href="https://docs.docker.com/compose/" target="_blank" rel="noopener noreferrer">Docker compose</a> makes it easy to orchestrate multiple containers, and finally, <a href="https://docs.docker.com/desktop/" target="_blank" rel="noopener noreferrer">Docker desktop</a> is the easiest way to get Docker on Windows.</p>
            <p>Most of my projects that I run on a server run in Docker, to make it easy to replicate environment, as well as make deployments easier via Nomad.</p>
        {:else if selected === "react"}
            <h2>React</h2>
            <p>My first interactive websites were in React, before I moved to <span class="a" on:click={() => selected = "svelte"}>Svelte</span>.</p>
            <p>An example of such website is Animasher.</p>
        {:else if selected === "nomad"}
            <h2>Nomad</h2>
            <p>Nomad is a distributed job scheduler, mainly for containers (via <span class="a" on:click={() => selected = "docker"}>Docker</span> or Podman). Along with <span class="a" on:click={() => selected = "consul"}>Consul</span>, it serves as a viable alternative to Kubernetes.</p>
            <p>I use Nomad as a job orchestrator on my server, to run my personal projects as well as few open-source one's, like my own NextCloud instance.</p>
            <p>In that single-node cluster, I run multiple databases (MariaDB, MongoDB) and projects, which communicate with each other using Consul as service resolver. And all websites are behind Nginx as a reverse proxy.</p>
        {:else if selected === "consul"}
            <h2>Consul</h2>
            <p>Consul is used for service discovery and communication, in the HashiCorp stack.</p>
            <p>I use Consul for health checks inside of my cluster, as well as service discovery and load balancing (although the last part is not needed at my scale yet, I made myself familiar with it in case I needed it).</p>
        {:else if selected === "discord"}
            <h2>Discord</h2>
            <p><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a> is a chat platform, originally aimed at gamers, but now for communities of all types.</p>
            <p>I created a Discord bot <a href="https://top.gg/bot/739864286775738399" target="_blank" rel="noopener noreferrer">igni</a> (which is at the time of writing in 940 servers), to make running Discord communities easier and more fun.</p>
            <p>The bot is written in Javascript with the use of Discord.js and a custom <a href="https://github.com/iceproductions/commando" target="_blank" rel="noopener noreferrer">Commando</a> framework. It's powered by <span class="a" on:click={() => selected = "mongodb"}>MongoDB</span>, and it's website (which is in the works) uses <span class="a" on:click={() => selected = "sveltekit"}>SvelteKit</span>, <span class="a" on:click={() => selected = "typescript"}>Typescript</span> and Redis.</p>
        

        {:else if selected === "electron"}
            <h2>Electron</h2>
            <p>Electron is a framework for building cross-platform desktop applications using <span class="a" on:click={() => selected = "nodejs"}>Node.JS</span>.</p>
            <p>I use Electron whenever I want to create a desktop application easily, for example when I made my simply <a href="https://github.com/danbulant/osuVisualizer" target="_blank" rel="noopener noreferrer">osu!visualizer</a>, or when I ported <a href="https://github.com/danbulant/svedexui" target="_blank" rel="noopener noreferrer">eDEX-UI to Svelte</a>.</p>
        {:else if selected === "svelte"}
            <h2>Svelte + SvelteKit</h2>
            <p><a href="http://svelte.dev" target="_blank" rel="noopener noreferrer">Svelte</a> is a web framework for building interactive websites easily with smaller size.</p>
            <p>I use Svelte for nearly all my new websites, including <a href="http://github.com/danbulant/design" target="_blank" rel="noopener noreferrer">this one</a>, <a href="https://github.com/danbulant/osuVisualizer" target="_blank" rel="noopener noreferrer">osu!visualizer</a>, <a href="https://github.com/danbulant/Mangades" target="_blank" rel="noopener noreferrer">Mangades</a> and more.</p>
            <p>I also use SvelteKit or Routify for sites that require multiple pages.</p>
        {:else if selected === "mysql"}
            <h2>MySQL/MariaDB</h2>
            <p>MySQL is a widely used relational database, using SQL as the query language.</p>
            <p>I use MariaDB (a fork of MySQL with improved speed) for most of my older projects before I knew about <span class="a" on:click={() => selected = "mongodb"}>MongoDB</span>.</p>
            <p>MariaDB is used in Animasher, Learner and on my older PHP experiments (which aren't publicly available).</p>
        {:else if selected === "mongodb"}
            <h2>MongoDB</h2>
            <p>MongoDB is a document database, used to store and retrieve documents with arbitrary schemas.</p>
            <p>MongoDB powers <a href="https://top.gg/bot/739864286775738399" target="_blank" rel="noopener noreferrer">igni</a> and other projects. Igni also uses some more advanced features, like update streaming to synchronize multiple clients, search, indexes, aggregation pipelines and more.</p>
        {:else if selected === "postgresql"}
            <h2>PostgreSQL</h2>
            <p>PostgreSQL is a faster alternative to <span class="a" on:click={() => selected="mysql"}>MySQL</span> with more features.</p>
            <p>Currently, I'm working on few projects that use PostgreSQL as their main database and data storage.</p>
        {:else if selected === "node"}
            <h2>Node.js</h2>
            <p>Node.js is a javascript runtime for servers and desktop applications (via <span class="a" on:click={() => selected="electron"}>Electron</span>).</p>
            <p>I use Node.js in nearly all of my projects. In case of websites, as a build platform, and in case of backend servers or desktop applications, as the primary runtime.</p>
            <p>I used Node.js from simply rollup scripts (like used in <a href="http://github.com/danbulant/design" target="_blank" rel="noopener noreferrer">this website</a>), to backend servers and APIs (like in case of Learner and igni website), to <a href="https://github.com/danbulant/test-x" target="_blank" rel="noopener noreferrer">Linux Window Manager</a> and <a href="https://github.com/danbulant/ssps-bot" target="_blank" rel="noopener noreferrer">Discord Bots</a>.</p>
        {:else if selected === "deno"}
            <h2>Deno</h2>
            <p>Deno is an alternative to <span class="a" on:click={() => selected="node"}>Node.js</span> by the same authors, written in <span class="a" on:click={() => selected="rust"}>Rust</span>.</p>
            <p>I use Deno mostly for simple scripts, as javascript is more familiar than bash/zsh/fish scripting for me. An example can be found <a href="https://github.com/danbulant/colors" target="_blank" rel="noopener noreferrer">here</a>, where I use Deno to programmatically set colors on my PS4 controller based on currently pressed buttons or currently playing Spotify song, on <span class="a" on:click={() => selected="linux"}>Linux</span> (using native Linux APIs).</p>
        {:else if selected === "linux"}
            <h2>Linux</h2>
            <p>Linux is a more efficient operating system, originally aimed at personal computers, now dominating all computing except personal computers.</p>
            <p>I use Linux everywhere I can because of it's superior performance and configurability. On phones, I use Android (which is based on the Linux kernel). On my personal computers, I use Arch linux, and, lastly, on my servers I use Ubuntu or Arch linux.</p>
            <p>I already experimented with Linux features, like DBus (for communicating with other applications, like getting current Spotify album and getting the average color from it <a href="https://github.com/danbulant/colors" target="_blank" rel="noopener noreferrer">here</a>), X11 (the most used graphical user interface on Linux, which I talk more about <span class="a" on:click={() => "x11"}>here</span>) and more.</p>
            <p>I also use Linux for containers in <span class="a" on:click={() => selected="docker"}>Docker</span>.</p>
        {:else if selected === "nginx"}
            <h2>Nginx</h2>
            <p>Nginx is a fast reverse proxy and web server.</p>
            <p>I use it as a load balancer and reverse proxy for my projects. It usually sits between <span class="a" on:click={() => selected="cloudflare"}>Cloudflare</span> and <span class="a" on:click={() => selected="node"}>Node.JS</span>.</p>
            <p>I also used Nomad with Consul to generate nginx configuration and load balance between multiple job instances on my personal server.</p>
        {:else if selected === "cloudflare"}
            <h2>Cloudflare</h2>
            <p><a href="http://cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare</a> is a global CDN, DNS server and DDOS protection service.</p>
            <p>I use Cloudflare to deflect common internet threats, cache and speed-up my web pages (I'm based in Czechia, but most of my traffic comes from USA, Cloudflare makes it fast for everyone) as well as to host my static websites (including <a href="http://github.com/danbulant/design" target="_blank" rel="noopener noreferrer">this website</a>) on their Cloudflare Pages product.</p>
            <p>I did also experiment with Cloudflare Workers, but I currently don't have a project suitable for that.</p>
        {/if}
    </div>
    <div class="bottom">
        Click to close.
    </div>
</div>

<style>
    .dialog {
        position: absolute;
        display: flex;
        flex-direction: column;
        transition: opacity .3s, transform .3s;
        opacity: 0;
        transform: scale(0.8);
        pointer-events: none;
        backdrop-filter: blur(25px);
        padding: 8px 16px;
        margin: 0;
        top: 0;
        left: 0;
        margin: auto;
        height: 100%;
        width: 100%;
        z-index: 10;
        border-radius: 15px;
        cursor: pointer;
        background: rgba(255,255,255,0.1);
        box-shadow: 0.6px 1.3px 1.3px hsl(0deg 0% 0% / 0.48);
    }
	@supports (-moz-appearance:none) {
		.dialog {
			background: rgba(255,255,255,0.9) !important;
		}
        .dark.dialog {
            background: rgba(70,70,70,0.97) !important;
        }
	}
    h2 {
        margin-top: 0;
        margin-block-start: 0;
    }
    .main {
        flex-grow: 1;
    }
    .bottom {
        color: gray;
    }
    :global(.dark .dialog a, .dark .dialog .a) {
        color: pink;
    }
    a, .a {
        color: rgb(255, 102, 128);
    }
    .a:hover {
        text-decoration: underline;
    }
    .dark.dialog {
        background: rgba(255,255,255,0.2);
    }
    .dialog.selected {
        pointer-events: all;
        opacity: 1;
        transform: scale(1);
    }
</style>