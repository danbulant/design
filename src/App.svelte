<script>
	import Bar from "./components/bar.svelte";
	import Button from "./components/button.svelte";
	import Contact from "./components/contact.svelte";
	import Hero from "./components/hero.svelte";
	import Posts from "./components/posts.svelte";
	import Project from "./components/project.svelte";
	import Split from "./components/split.svelte";
	import TechnologyDetails from "./components/technologyDetails.svelte";
	import darkmode from "./stores/darkmode";

	function toggle() {
		$darkmode = !$darkmode;
	}

	$: {
		if(typeof document !== "undefined") {
			if($darkmode) {
				document.body.classList.add("dark");
			} else {
				document.body.classList.remove("dark");
			}
		}
	}

	var technologySelected = null;
	var technologyHover = false;
</script>

<svelte:head>
	<title>Daniel Bulant - Homepage</title>
	<meta name="description" content="Homepage of danbulant.eu - List of my projects, contact info.">
</svelte:head>

<div class="bar" class:dark={$darkmode}>
	<Bar>
		<h3>Daniel Bulant</h3>
		<Split />
		<Button text on:click={toggle}>{$darkmode ? "Light" : "Dark"} mode</Button>
		<a href="#contact" class="big">Contact</a>
	</Bar>
</div>
<main class:dark={$darkmode}>
	<Hero>
		<h1>I'm a young developer making <u>websites</u> and <u>discord bots</u>.</h1>
		<!-- <h3>To be used later</h3> -->
		<Button href="#projects">Check out my work</Button>
	</Hero>
	<div class="projects" id="projects">
		<div>
			<blockquote>
				I helped many projects come to life. Here are some examples:
			</blockquote>
			<Project link="https://top.gg/bot/739864286775738399" tags={["Discord bot", "Backend", "Discord.js", "Typescript"]} image="/screenshots/igni.png">
				<b>igni</b> - The universal discord bot
			</Project>
			<Project tags={["Backend", "Website", "Svelte", "React", "Typescript"]} image="/screenshots/animasher.png">
				<b>Animasher</b> - Platform for creating and sharing animations
			</Project>
		</div>
		<div>
			<div class="pad"></div>
			<Project link="https://danbulant.itch.io/heaventaker" tags={["Website", "Application", "Phaser", "Svelte"]} image="/screenshots/heaventaker.png">
				<b>Heaventaker</b> - Helltaker fan game
			</Project>
			<Project link="https://manga.danbulant.eu" tags={["Website", "Svelte"]} image="/screenshots/mangadex.jfif">
				<b>Mangades</b> - Mangadex downloader
			</Project>
		</div>
	</div>
	<div class="also relative">
		<TechnologyDetails bind:selected={technologySelected} />
		<h2 class="text-center">I also worked with the following:</h2>
		<noscript class="text-center text-white">Clicking won't work if javascript is not enabled.</noscript>
		<span class="text-center" class:text-gray={!technologyHover} class:text-white={technologyHover}>Click each technology for more details about why I'm using it.</span>
		<div class="split" on:mouseenter={() => technologyHover = true} on:mouseleave={() => technologyHover = false}>
			<ul>
				<li on:click={() => technologySelected = "typescript"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" draggable={false} />
					Typescript
				</li>
				<li on:click={() => technologySelected = "rust"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" alt="" draggable={false} />
					Rust
				</li>
				<li on:click={() => technologySelected = "x11"}>
					<img src="/x11.png" alt="" draggable={false} />
					X11
				</li>
				<li on:click={() => technologySelected = "cs"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" alt="" draggable={false} />
					C#
				</li>
				<li on:click={() => technologySelected = "git"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" draggable={false} />
					Git + GitHub
				</li>
				<li on:click={() => technologySelected = "docker"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" alt="" draggable={false} />
					Docker + Docker compose + Docker desktop
				</li>
				<li on:click={() => technologySelected = "react"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" draggable={false} />
					React
				</li>
				<li on:click={() => technologySelected = "nomad"}>
					<img src="/nomad.svg" alt="" draggable={false} />
					Nomad
				</li>
				<li on:click={() => technologySelected = "consul"}>
					<img src="/consul.svg" alt="" draggable={false} />
					Consul
				</li>
				<li on:click={() => technologySelected = "discord"}>
					<img src="/discord.png" alt="" draggable={false}>
					Discord
				</li>
			</ul>
			<ul>
				<li on:click={() => technologySelected = "electron"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" alt="" draggable={false} />
					Electron
				</li>
				<li on:click={() => technologySelected = "svelte"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="" draggable={false} />
					Svelte + SvelteKit
				</li>
				<li on:click={() => technologySelected = "mysql"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="" draggable={false} />
					MySQL/MariaDB
				</li>
				<li on:click={() => technologySelected = "mongodb"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" alt="" draggable={false} />
					MongoDB
				</li>
				<li on:click={() => technologySelected = "postgresql"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" alt="" draggable={false} />
					PostgreSQL
				</li>
				<li on:click={() => technologySelected = "node"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" draggable={false} />
					Node.js
				</li>
				<li on:click={() => technologySelected = "deno"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg" alt="" draggable={false} />
					Deno
				</li>
				<li on:click={() => technologySelected = "linux"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" draggable={false} />
					Linux
				</li>
				<li on:click={() => technologySelected = "nginx"}>
					<img src="/nginx.svg" alt="" draggable={false} />
					Nginx
				</li>
				<li on:click={() => technologySelected = "cloudflare"}>
					<img src="/cloudflare.png" alt="" draggable={false} />
					Cloudflare
				</li>
			</ul>
		</div>
	</div>
	<Posts />
	<div id="contact">
		<Contact />
	</div>
</main>
<div class="bottombar" class:dark={$darkmode}>
	<Bar>
		<h3>Daniel Bulant</h3>
		<Split />
		<a href="https://github.com/shinoa-hiragi" target="_blank" class="text-right">
			<h3>
				Design by Carl Hansen
			</h3>
		</a>
	</Bar>
</div>

<style>
	.relative {
		position: relative;
	}
	.text-right {
		text-align: right;
	}
	.text-center {
		text-align: center;
	}
	.also > span {
		transition: color .3s;
	}
	.text-gray { 
		color: rgb(150, 150, 150);
	}
	.text-white {
		color: black;
	}
	.dark .text-white {
		color: white;
	}
	main {
		margin: 0 min(50px, 5%) 0 min(50px, 5%);
		width: calc(100% - min(100px, 10%));
	}
	.bar .small {
		display: none;
	}
	@media (max-width: 570px) {
		.bar .big {
			display: none;
		}
		.bar .small {
			display: initial;
		}
	}
	.projects, .bottombar {
		max-width: 1380px;
	}
	.bottombar {
		margin: 30px auto 30px auto;
		width: calc(100% - min(100px, 10%));
	}
	@media (max-width: 520px) {
		.bottombar {
			margin: 30px 0 0 0;
			width: 100%;
			background: white;
		}
		.dark.bottombar {
			background: rgb(28, 28, 33);
		}
	}
	.bottombar h3 {
		font-size: 18px;
		font-weight: bold;
		margin: 0;
	}
	.projects {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0 20px 50px 20px;
	}
	.also {
		margin: auto;
		max-width: 850px;
		border-radius: 15px;
	}
	.also h2 {
		margin-block-end: 0;
		margin-bottom: 0;
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
	}
	.also li {
		height: 32px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: left;
		cursor: pointer;
		transition: transform .3s;
	}
	.also li::active {
		transform: scale(0.8);
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
		padding-right: 6px;
	}
	@media (min-width: 1520px) {
		.projects {
			margin: 0 auto 50px auto;
		}
	}
	.projects > div {
		width: calc(50% - 40px);
	}
	.projects .pad {
		margin-top: 110px;
	}
	@media (max-width: 860px) {
		.projects > div {
			width: calc(100% - 80px);
			margin: auto;
		}
		.projects .pad {
			margin-top: 0px;
		}
		.projects blockquote {
			margin: 1em 0 1em 10px;
		}
	}
	.projects blockquote {
		font-size: 29px;
	}
	.bar {
		position: -webkit-sticky; /* Safari */
		position: sticky;
		top: 0;
		left: 0;
		z-index: 99;
		/*width: calc(100vw - 15px);*/
		max-width: 1920px;
		margin: 0 auto 30px auto;
		background: rgba(255,255,255, 0.2);
		backdrop-filter: blur(10px);
	}
	@media (max-width: 400px) {
		.bar {
			width: 100vw;
		}
	}
	.dark.bar {
		background: rgba(28, 28, 33, 0.2);
	}
	.bar h3 {
		font-size: 18px;
		font-weight: bold;
	}
	h1, h3 {
		color: #282B29;
	}
	.dark h3 {
		color: rgb(191, 191, 191);
	}
	h1 {
		font-size: 72px;
	}
	@media (max-width: 1100px) {
		h1 {
			font-size: 40px;
		}
	}
	h3 {
		font-size: 29px;
		font-weight: 400;
	}
	.bar a {
		color: #202020b2;
	}
	.dark.bar a {
		color: rgba(191, 191, 191, 0.698);
	}
</style>
