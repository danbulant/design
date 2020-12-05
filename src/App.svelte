<script>
	import Button from "./components/button.svelte";
	import Link from "./components/link.svelte";
	import Navbar from "./components/navbar.svelte";
	import Project from "./components/project.svelte";
	import Separator from "./components/separator.svelte";

	import darkmode from "./stores/darkmode";
</script>

<svelte:head>
	<title>Daniel Bulant design</title>
</svelte:head>

<Navbar darkmode={$darkmode}>
	<Link href="/" colored>
		Daniel Bulant
	</Link>
	<Separator />
	<Button bind:value={$darkmode} outline={$darkmode}>{$darkmode ? "Dark" : "Light"} mode</Button>
</Navbar>

<main class:darkmode={$darkmode}>
	<h1 class="center">Daniel Bulant</h1>

	<section>
		<h2 class="center">Projects</h2>

		<Project title="igni">
			<p slot="description">
				igni is a universal discord bot with advanced moderation, advanced configuration and unique command handling. It can replace majority of other bots and is being actively worked on.
			</p>
			<img class="preview" src="igni.png" alt="igni avatar" slot="preview">
			<div slot="actions">
				<Button href="https://discordbotlist.com/bots/igni">More information</Button>
				<Button outline href="https://discord.com/oauth2/authorize?client_id=739864286775738399&scope=bot&permissions=1039199350">Add igni to your server</Button>
			</div>
		</Project>

		<Project title="The Tutorials">
			<p slot="description">
				Czech tutorials, blog and news about node, php and scratch for everyone.
			</p>
			<img class="preview thetutorials" src="thetutorials.jpg" alt="The Tutorials logo" slot="preview">
			<div slot="actions">
				<Button href="https://thetutorials.cz">Website</Button>
				<Button outline href="https://youtube.com/thetutorials">Youtube channel</Button>
			</div>
		</Project>
	</section>

</main>
	
<style>
	main {
		min-height: calc(100vh - 50px);
	}
	main section {
		max-width: 720px;
		margin: auto;
		padding: 0 20px;
		width: calc(100vw - 55px);
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
	}
	img.preview.thetutorials {
		border-radius: 50%;
		height: 200px;
		width: auto;
	}
</style>