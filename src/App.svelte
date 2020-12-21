<script>
	import Button from "./components/button.svelte";
import Flexbox from "./components/flexbox.svelte";
	import Link from "./components/link.svelte";
	import Navbar from "./components/navbar.svelte";
	import Project from "./components/project.svelte";
	import Separator from "./components/separator.svelte";

	import darkmode from "./stores/darkmode";
</script>

<svelte:head>
	<title>Daniel Bulant - Homepage</title>
	<meta name="description" content="Homepage of danbulant.eu - List of my projects, contact info.">
</svelte:head>

<Navbar darkmode={$darkmode}>
	<Link href="/" colored>
		Daniel Bulant
	</Link>
	<Separator />
	<Link href="#contact">
		Contact
	</Link>
	<Button bind:value={$darkmode} outline={$darkmode}>{$darkmode ? "Dark" : "Light"} mode</Button>
</Navbar>

<main class:darkmode={$darkmode}>
	<h1 class="center">Daniel Bulant</h1>

	<section>
		<h2 class="center" id="projects">Projects</h2>

		<Project title="igni">
			<p slot="description">
				igni is a universal discord bot with advanced moderation, advanced configuration and unique command handling. It can replace majority of other bots and is being actively worked on.
			</p>
			<img draggable={false} class="preview" src="igni.png" alt="igni avatar" slot="preview">
			<div slot="actions">
				<Button newTab href="https://discordbotlist.com/bots/igni">More information</Button>
				<Button newTab outline href="https://discord.com/oauth2/authorize?client_id=739864286775738399&scope=bot&permissions=1039199350">Add igni to your server</Button>
			</div>
		</Project>

		<Project title="The Tutorials">
			<p slot="description">
				Czech tutorials, blog and news about node, php and scratch for everyone.
			</p>
			<img draggable={false} class="preview thetutorials" src="thetutorials.jpg" alt="The Tutorials logo" slot="preview">
			<div slot="actions">
				<Button newTab href="https://thetutorials.cz">Website</Button>
				<Button newTab outline href="https://youtube.com/thetutorials">Youtube channel</Button>
			</div>
		</Project>

		<Project title="Learner">
			<div slot="description">
				Czech e-learning website and application, currently in closed beta.
			</div>
			<!-- <img draggable={false} src="https://learner.danbulant.eu/logo.png" alt="Learner logo" slot="preview" class="preview"> -->
			<div slot="actions">
				<Button newTab href="https://play.google.com/store/apps/details?id=cz.janrossler.learner">Application</Button>
				<Button newTab outline href="https://learner.danbulant.eu">Website</Button>
			</div>
		</Project>

		<Project title="Ice Productions">
			<div slot="description">
				Independent team of developers, worked on Aztec, browser and more.
			</div>
			<img draggable={false} src="/iceproductions.svg" alt="Ice Productions Logo" slot="preview" class="preview">
			<div slot="actions">
				<Button newTab href="https://iceproductions.dev">Website</Button>
				<Button newTab outline href="https://discord.gg/JUTFUKH">Discord server</Button>
			</div>
		</Project>
	</section>

	<section>
		<h2 id="contact">Contact info</h2>

		<ul>
			<li>Discord - TechmandanCZ#0135, you can find me in my <Link href="https://discord.gg/EgBGYmA" colored>server</Link>.</li>
			<li>Github - <Link href="https://github.com/danbulant"> @danbulant </Link> </li>
			<li>Youtube - <Link href="https://youtube.com/thetutorials"> TheTutorials </Link> </li>
		</ul>
	</section>


	<footer>
		<Flexbox>
			&copy; Daniel Bulant {(new Date()).getFullYear()}.
			<Separator />
			<Link href="/"> danbulant.eu </Link>
		</Flexbox>
	</footer>
</main>
	
<style>
	main {
		min-height: calc(100vh - 50px);
		padding-bottom: 10px;
	}
	main section {
		max-width: 720px;
		margin: auto;
		padding: 0 20px;
		width: calc(100vw - 55px);
	}

	footer {
		margin-top: 20px;
		padding: 10px 20px;
	}
	.darkmode {
		background: #242423;
		color: #E8EDDF;
	}
	.center {
		text-align: center;
	}
	img.preview {
		height: 18rem;
		max-height: 100%;
		max-width: 100%;
	}
	img.preview.thetutorials {
		border-radius: 50%;
		height: 200px;
		width: auto;
	}
</style>