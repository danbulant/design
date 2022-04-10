<script context="module">
	/** @type {import('./[slug]').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const response = await fetch("/api/posts.json");
	
		return {
			props: {
				posts: response.ok && (await response.json())
			}
		};
	}
</script>

<script>
	import Bottombar from "$lib/components/bottombar.svelte";
	import Button from "$lib/components/button.svelte";
	import Contact from "$lib/components/contact.svelte";
	import Hero from "$lib/components/hero.svelte";
	import Navbar from "$lib/components/navbar.svelte";
	import Posts from "$lib/components/posts.svelte";
	import Project from "$lib/components/project.svelte";
	import TechnologyDetails from "$lib/components/technologyDetails.svelte";
	import darkmode from "$lib/stores/darkmode";

	var technologySelected = null;
	var technologyHover = false;
	/** @type {null | "websites" | "applications" | "bots"} */
	var appTypeHover = null;

	export var posts;
	$: console.log(posts);
</script>

<svelte:head>
	<title>Daniel Bulant - Homepage</title>
	<link href="/posts/rss.xml" type="application/rss+xml" rel="alternate" title="Blog posts - RSS" />
    <meta property="og:title" content="Daniel Bulant - Homepage"/>
	<meta name="description" content="Homepage of danbulant.eu - List of my projects, contact info.">
	<meta name="og:description" content="Homepage of danbulant.eu - List of my projects, contact info.">
    <meta property="og:site_name" content="Daniel Bulant"/>
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="profile" />
    <meta property="og:profile:first_name" content="Daniel" />
    <meta property="og:profile:last_name" content="Bulant" />
    <meta property="og:profile:username" content="danbulant" />
    <meta property="og:profile:gender" content="male" />
</svelte:head>

<Navbar />
<main class:dark={$darkmode}>
	<Hero>
		<h1>I'm a young developer making <u on:mouseenter={() => appTypeHover = "websites"} on:mouseleave={() => appTypeHover == "websites" && (appTypeHover = null)}>websites</u>,
			<u on:mouseenter={() => appTypeHover = "applications"} on:mouseleave={() => appTypeHover == "applications" && (appTypeHover = null)}>applications</u> and
			<u on:mouseenter={() => appTypeHover = "bots"} on:mouseleave={() => appTypeHover == "bots" && (appTypeHover = null)}>discord bots</u>.</h1>
		<!-- <h3>To be used later</h3> -->
		<Button href="#projects">Check out my work</Button>
	</Hero>
	<div class="blog">
		I recently started my own blog.<br>
		You can checkout &ldquo;<a href={posts[0].path}><b>{posts[0].title}</b></a>&rdquo; and other recent blog posts:<br>
		<div style="text-align: center; margin-top: 5px;">
			<Button href="/posts">blog</Button>
		</div>
	</div>
	<p class="center firefox-notice">Firefox (and it's 3.4% users) doesn't support background blur. This website is better viewed on a more modern browser.</p>
	<div class="projects" id="projects">
		<div>
			<h2>
				I helped many projects come to life. Here are some examples:
			</h2>
			<Project link="https://top.gg/bot/739864286775738399" tags={["Discord bot", "Backend", "Discord.js", "Typescript"]} image="/screenshots/ignibg.png" grayscale={appTypeHover && appTypeHover === "applications"}>
				<b>igni</b> - The universal Discord bot
				<svelte:fragment slot="desc">
					<p>
						igni is a universal Discord bot, making managing Discord communities easy.
					</p>
					<p>
						It includes customizability, music playback (Youtube, SoundCloud, Spotify), moderation commands, anime, automation, games and more.
					</p>
				</svelte:fragment>
			</Project>
			<Project tags={["Backend", "Website", "Svelte", "React", "Typescript"]} image="/screenshots/animasher.png" grayscale={appTypeHover && appTypeHover !== "websites"} extradark>
				<b>Animasher</b> - Platform for creating and sharing animations
				<svelte:fragment slot="desc">
					<p>
						Animasher is a work in progress platform for creating and sharing animations online.
					</p>
					<p>
						It allows people to easily create animations inside the website, and then share it with the world, as well as communicate with other creators to improve themselves.
					</p>
				</svelte:fragment>
			</Project>
		</div>
		<div>
			<div class="pad"></div>
			<Project link="https://danbulant.itch.io/heaventaker" tags={["Website", "Application", "Phaser", "Svelte"]} image="/screenshots/heaventaker.png" grayscale={appTypeHover && appTypeHover === "bots"}>
				<b>Heaventaker</b> - Helltaker fan game
				<svelte:fragment slot="desc">
					<p>
						<img src="/azrael.gif" alt="" style="height: 24px;"> Heaventaker is a helltaker fan-game visual novel and puzzle game.
					</p>
					<p>
						Heaventaker currently has 3 different puzzles and 4 angels to collect. Playable online on the website, or on Android devices (application installable from Google Play Store)
					</p>
				</svelte:fragment>
			</Project>
			<Project link="https://manga.danbulant.eu" tags={["Website", "Svelte"]} image="/screenshots/mangadex.jfif" grayscale={appTypeHover && appTypeHover !== "websites"}>
				<b>Mangades</b> - Mangadex downloader
				<svelte:fragment slot="desc">
					<p>
						Mangades is a manga downloader from Mangadex.
					</p>
					<p>
						It can download mangas to EPUB or CBZ files online from browsers
					</p>
				</svelte:fragment>
			</Project>
		</div>
	</div>
	<div class="center">
		In addition, this website is open-source and available on <img class="white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="height: 1em;" alt=""> <a href="https://github.com/danbulant/design" style="color: rgb(255, 102, 128)">GitHub</a>
	</div>
	<div class="also relative">
		<TechnologyDetails bind:selected={technologySelected} />
		<h2 class="text-center">I also worked with the following:</h2>
		<noscript class="text-center text-white">Clicking won't work if javascript is not enabled.</noscript>
		<span class="text-center" class:text-gray={!technologyHover} class:text-white={technologyHover}>{typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches ? "Touch" : "Click"} each technology for more details about why I'm using it.</span>
		<div class="split" on:mouseenter={() => technologyHover = true} on:mouseleave={() => technologyHover = false}>
			<ul>
				<li on:click={() => technologySelected = "typescript"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" draggable={false} />
					Typescript
				</li>
				<li on:click={() => technologySelected = "rust"}>
					<img class="white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" alt="" draggable={false} />
					Rust
				</li>
				<li on:click={() => technologySelected = "x11"}>
					<img src="/tech/x11.png" alt="" draggable={false} />
					X11
				</li>
				<li on:click={() => technologySelected = "cs"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" alt="" draggable={false} />
					C#
				</li>
				<li on:click={() => technologySelected = "git"}>
					<img class="white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" draggable={false} />
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
					<img src="/tech/nomad.svg" alt="" draggable={false} />
					Nomad
				</li>
				<li on:click={() => technologySelected = "consul"}>
					<img src="/tech/consul.svg" alt="" draggable={false} />
					Consul
				</li>
				<li on:click={() => technologySelected = "discord"}>
					<img src="/tech/discord.png" alt="" draggable={false}>
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
					<img class="white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg" alt="" draggable={false} />
					Deno
				</li>
				<li on:click={() => technologySelected = "linux"}>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" draggable={false} />
					Linux
				</li>
				<li on:click={() => technologySelected = "nginx"}>
					<img src="/tech/nginx.svg" alt="" draggable={false} />
					Nginx
				</li>
				<li on:click={() => technologySelected = "cloudflare"}>
					<img src="/tech/cloudflare.png" alt="" draggable={false} />
					Cloudflare
				</li>
			</ul>
		</div>
	</div>
	{#if posts}
		<Posts {posts} />
	{/if}
	<div id="contact">
		<Contact />
	</div>
</main>
<Bottombar />

<style>
	.firefox-notice {
		display: none;
	}
	@supports (-moz-appearance:none) {
		.firefox-notice {
			display: block !important;
		}
	}
	img.white {
		background: white;
		border-radius: 50%;
	}
	.blog {
		margin: auto;
		margin-top: 20px;
		max-width: max-content;
		padding: 15px;
		border-radius: 5px;
		background: #282B29;
		color: white;
	}
	.dark .blog {
		background: white;
		color: #282B29;
	}
	/* :global(body) {
		background-image: linear-gradient(to top, rgb(242,210,223), transparent min(180vh, 1080px));
	}
	:global(body.dark) {
		background-image: linear-gradient(to top, rgba(94, 61, 74, 0.685), transparent min(180vh, 1080px));
	} */
	.center {
		text-align: center;
	}
	.relative {
		position: relative;
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
	.projects {
		max-width: 1380px;
	}
	.projects {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0 20px 0px 20px;
	}
	.also {
		margin: 50px auto 0 auto;
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
		margin: 0;
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
		margin-right: 6px;
	}
	@media (min-width: 1520px) {
		.projects {
			margin: 0 auto 0px auto;
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
		.projects h2 {
			margin: 1em 0 1em 10px;
		}
	}
	.projects h2 {
		font-size: 29px;
		font-weight: 400;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 40px;
		margin-inline-end: 40px;
	}
	h1 {
		color: #282B29;
	}
	h1 {
		font-size: 64px;
	}
	@media (max-width: 1100px) {
		h1 {
			font-size: 40px;
		}
	}
</style>
