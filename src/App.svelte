<script>
	import Bar from "./components/bar.svelte";
	import Button from "./components/button.svelte";
	import Contact from "./components/contact.svelte";
	import Hero from "./components/hero.svelte";
	import Posts from "./components/posts.svelte";
	import Project from "./components/project.svelte";
	import Split from "./components/split.svelte";
	import darkmode from "./stores/darkmode";

</script>

<svelte:head>
	<title>Daniel Bulant - Homepage</title>
	<meta name="description" content="Homepage of danbulant.eu - List of my projects, contact info.">
</svelte:head>

<div class="bar">
	<Bar>
		<h3>Daniel Bulant</h3>
		<a href="#contact" class="big">Contact</a>
		<Split />
		<a href="#contact" class="small">Contact</a>
		<a href="mailto:danbulant@danbulant.eu" class="big">danbulant@danbulant.eu</a>
	</Bar>
</div>
<main>
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
			<Project link="https://learnerapp.eu" tags={["Website design", "Frontend"]}>
				<b>Learner</b> - A learning platform for students
			</Project>
			<Project link="https://thetutorials.cz" tags={["Writer", "Full stack"]}>
				<b>TheTutorials</b> - Czech tutorials and blog about programming
			</Project>
		</div>
		<div>
			<div class="pad"></div>
			<Project link="https://top.gg/bot/739864286775738399" tags={["Discord bot", "Backend"]}>
				<b>igni</b> - The universal discord bot
			</Project>
			<Project link={"data:text/plain,No website available yet"} tags={["Backend"]}>
				<b>Animasher</b> - Platform for creating and sharing animations
			</Project>
		</div>
	</div>
	<Posts />
	<div id="contact">
		<Contact />
	</div>
</main>
<div class="bottombar">
	<Bar>
		<h3>Daniel Bulant</h3>
		<Split />
		<a href="https://github.com/shinoa-hiragi" target="_blank">
			<h3>
				Design by Carl Hansen
			</h3>
		</a>
	</Bar>
</div>

<style>
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
		width: calc(100vw - 15px);
		max-width: 1920px;
		margin: 0 auto 30px auto;
		background: white;
	}
	.bar h3 {
		font-size: 18px;
		font-weight: bold;
	}
	h1, h3 {
		color: #282B29;
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
</style>