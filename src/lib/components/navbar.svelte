<script>
    import darkmode from "$lib/stores/darkmode";
    import Bar from "./bar.svelte";
    import Button from "./button.svelte";
    import Split from "./split.svelte";

    function toggle() {
        $darkmode = !$darkmode;
    }
</script>

<div class="bar" class:dark={$darkmode}>
	<Bar>
		<a href="/"><h3>Daniel Bulant</h3></a>
		<Split />
		<Button text on:click={toggle}>{$darkmode ? "Light" : "Dark"} mode</Button>
		<a href="/#contact" class="big">Contact</a>
		<a href="/posts" class="big">Blog</a>
	</Bar>
</div>