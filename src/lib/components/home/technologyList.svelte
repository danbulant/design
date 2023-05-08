<script>
    import TechnologyDetails from "./technologyDetails.svelte";

    var technologySelected = null;
	var technologyListHovered = false;
</script>

<div class="also relative">
    <TechnologyDetails bind:selected={technologySelected} />
    <h2 class="text-center font-semibold text-2xl m-0">I also worked with the following:</h2>
    <noscript class="text-center text-white">Clicking won't work if javascript is not enabled.</noscript>
    <span class="text-center" class:text-gray={!technologyListHovered} class:text-white={technologyListHovered}>{typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches ? "Touch" : "Click"} each technology for more details about why I'm using it.</span>
    <div class="split" class:text-gray={technologyListHovered} on:mouseenter={() => technologyListHovered = true} on:mouseleave={() => technologyListHovered = false}>
        <ul>
            <li on:click={() => technologySelected = "typescript"} on:keydown={() => technologySelected = "typescript"}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" draggable={false} />
                Typescript
            </li>
            <li on:click={() => technologySelected = "rust"} on:keydown={() => technologySelected = "rust"}>
                <img class="white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" alt="" draggable={false} />
                Rust
            </li>
            <li on:click={() => technologySelected = "x11"} on:keydown={() => technologySelected = "x11"}>
                <img src="/tech/x11.png" alt="" draggable={false} />
                X11
            </li>
            <li on:click={() => technologySelected = "cs"} on:keydown={() => technologySelected = "cs"}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" alt="" draggable={false} />
                C#
            </li>
            <li on:click={() => technologySelected = "git"} on:keydown={() => technologySelected = "git"}>
                <img class="white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" draggable={false} />
                Git + GitHub
            </li>
            <li on:click={() => technologySelected = "docker"} on:keydown={() => technologySelected = "docker"}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" alt="" draggable={false} />
                Docker + Docker compose
            </li>
            <li on:click={() => technologySelected = "react"} on:keydown={() => technologySelected = "react"}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" draggable={false} />
                React
            </li>
            <li on:click={() => technologySelected = "nomad"} on:keydown={() => technologySelected = "nomad"}>
                <img src="/tech/nomad.svg" alt="" draggable={false} />
                Nomad
            </li>
            <li on:click={() => technologySelected = "consul"} on:keydown={() => technologySelected = "consul"}>
                <img src="/tech/consul.svg" alt="" draggable={false} />
                Consul
            </li>
            <li on:click={() => technologySelected = "discord"} on:keydown={() => technologySelected = "discord"}>
                <img src="/tech/discord.png" alt="" draggable={false}>
                Discord bots
            </li>
        </ul>
        <ul>
            <li on:click={() => technologySelected = "electron"} on:keydown={() => technologySelected = "electron"}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" alt="" draggable={false} />
                Electron
            </li>
            <li on:click={() => technologySelected = "svelte"} on:keydown={() => technologySelected = "svelte"}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="" draggable={false} />
                Svelte + SvelteKit
            </li>
            <li on:click={() => technologySelected = "mysql"} on:keydown={() => technologySelected = "mysql"}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="" draggable={false} />
                MySQL/MariaDB
            </li>
            <li on:click={() => technologySelected = "mongodb"} on:keydown={() => technologySelected = "mongodb"}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" alt="" draggable={false} />
                MongoDB
            </li>
            <li on:click={() => technologySelected = "postgresql"} on:keydown={() => technologySelected = "postgresql"}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" alt="" draggable={false} />
                PostgreSQL
            </li>
            <li on:click={() => technologySelected = "node"} on:keydown={() => technologySelected = "node"}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" draggable={false} />
                Node.js
            </li>
            <li on:click={() => technologySelected = "deno"} on:keydown={() => technologySelected = "deno"}>
                <img class="white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg" alt="" draggable={false} />
                Deno
            </li>
            <li on:click={() => technologySelected = "linux"} on:keydown={() => technologySelected = "linux"}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" draggable={false} />
                Linux
            </li>
            <li on:click={() => technologySelected = "nginx"} on:keydown={() => technologySelected = "nginx"}>
                <img src="/tech/nginx.svg" alt="" draggable={false} />
                Nginx
            </li>
            <li on:click={() => technologySelected = "cloudflare"} on:keydown={() => technologySelected = "cloudflare"}>
                <img src="/tech/cloudflare.png" alt="" draggable={false} />
                Cloudflare
            </li>
        </ul>
    </div>
</div>

<style>
	.also > span {
		transition: color .3s;
	}
	.text-gray { 
		color: rgb(150, 150, 150);
	}
    .text-gray img {
        filter: grayscale(70%);
        transition: filter .3s;
    }
	.text-white {
		color: black;
	}
	:global(.dark) .text-white {
		color: white;
	}
	.also {
		margin: 50px auto 0 auto;
		max-width: 850px;
		border-radius: 15px;
	}
	.also > span {
		margin-bottom: 25px;
		display: block;
	}
	.split {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.split ul {
		min-width: 340px;
		margin: 0 auto;
        padding-left: 20px;
        list-style-type: none;
	}
	.also li {
		height: 32px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: left;
		cursor: pointer;
		transition: transform .3s, color .2s;
	}
    .also li:hover {
        color: black;
    }
    .also li:hover img {
        filter: grayscale(0%);
    }
    .dark .also li:hover {
        color: white;
    }
	.also li:active {
		transform: scale(0.95);
	}
	.also li::before {
		content: "";
		position: absolute;
		top: 13px;
		left: -20px;
		width: 6px;
		height: 6px;
		border-radius: 6px;
		background-color: black;
		transition: background-color .3s;
	}
	.dark .also li::before {
		background-color: white;
	}
	.also li img {
		height: 24px;
		width: 24px;
		margin-right: 6px;
	}

</style>