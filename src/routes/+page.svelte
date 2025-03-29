<script>
	import Bottombar from "$lib/components/bottombar.svelte";
	import Button from "$lib/components/button.svelte";
	import Contact from "$lib/components/contact.svelte";
	import Hero from "$lib/components/hero.svelte";
	import Posts from "$lib/components/posts.svelte";
    import TechnologyList from "$lib/components/home/technologyList.svelte";
    import Projects from "$lib/components/home/projects.svelte";

	/** @type {null | "websites" | "applications" | "bots"} */
	var appTypeHover = null;

	export var data;
    var posts = data.posts;
    $: posts = data.posts;

	var selectedPost = posts && posts.find(t => !t.categories.includes("experiment"));
</script>

<svelte:head>
	<title>Daniel Bulant</title>
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

<main>
	<Hero {appTypeHover}>
		<h1 class="font-bold">I'm making <b on:mouseenter={() => appTypeHover = "websites"} on:mouseleave={() => appTypeHover === "websites" && (appTypeHover = null)}>websites</b>,
			<b on:mouseenter={() => appTypeHover = "applications"} on:mouseleave={() => appTypeHover === "applications" && (appTypeHover = null)}>mobile applications</b> and
			<b on:mouseenter={() => appTypeHover = "websites"} on:mouseleave={() => appTypeHover === "website" && (appTypeHover = null)}>online games</b>.</h1>
		<!-- <h3>To be used later</h3> -->
        <div class="flex gap-4">
            <Button blur class="!p-4" href="#contact">Send me a message</Button>
            <div class="blog-preview flex backdrop-blur bg-black/40 items-center rounded">
                <Button blur class="!p-4 h-full !flex items-center !rounded-r-0 !bg-transparent !backdrop-none" href="/posts">
                    <span>
                        Blog
                    </span>
                </Button>
                <div class="right md:inline-block hidden p-4 border-l-2 border-l-white/20">
                    {#if selectedPost}
                        <a href={selectedPost.path}><b>{selectedPost.title}</b></a>
                    {/if}
                </div>
            </div>
        </div>
	</Hero>
	<Projects {appTypeHover} />
	<!-- <div class="text-center">
		In addition, this website is open-source and available on <img class="white inline w-1em h-1em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt=""> <a href="https://github.com/danbulant/design" style="color: rgb(255, 102, 128)">GitHub</a>
	</div> -->
    <!-- <TechnologyList /> -->
	{#if posts}
		<Posts {posts} />
	{/if}
	<div id="contact">
		<Contact />
	</div>
</main>
<Bottombar />

<style>
	img.white {
		background: white;
		border-radius: 50%;
	}
	main {
		margin: 0 min(50px, 5%) 0 min(50px, 5%);
		width: calc(100% - min(100px, 10%));
	}
	h1 {
		color: #282B29;
		font-size: 64px;
	}
	@media (max-width: 1100px) {
		h1 {
			font-size: 40px;
		}
	}
</style>
