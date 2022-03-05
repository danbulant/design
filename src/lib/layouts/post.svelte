<script>
    import darkmode from "$lib/stores/darkmode";
    import { DateTime } from "luxon";

    export let title;
    export let date;
    export let description;
</script>

<svelte:head>
	<title>{title} - Daniel Bulant</title>
	<meta name="description" content={description}>
</svelte:head>

<main class:dark={$darkmode}>
    <span>Posts /</span>
    <h1>{title}</h1>
    <span>Written {DateTime.fromISO(date).toRelativeCalendar()}</span>
    <slot />
</main>

<style>
	main {
        margin: 0 auto;
        max-width: 700px;
        padding: 0 20px;
	}
    h1 {
        padding: 0 0 15px;
    }
    span {
        color: gray;
    }
</style>