<script>
    import Navbar from "$lib/components/navbar.svelte";
    import darkmode from "$lib/stores/darkmode";

    export let title;
    export let date;
</script>

<svelte:head>
	<title>Daniel Bulant - Homepage</title>
	<meta name="description" content="Homepage of danbulant.eu - List of my projects, contact info.">
</svelte:head>

<Navbar />

<main class:dark={$darkmode}>
    <h1>{title}</h1>
    <span>{date}</span>
    <slot />
</main>

<style>
	main {
        margin: 0 auto;
        max-width: 700px;
        padding: 0 20px;
	}
</style>