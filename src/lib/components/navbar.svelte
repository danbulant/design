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

<style>
	@media (max-width: 570px) {
		.bar .big {
			display: none;
		}
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
	@supports (-moz-appearance:none) {
		.bar {
			background: rgba(255,255,255,0.9) !important;
		}
		.dark.bar {
			background: rgba(28, 28, 33, 0.9) !important;
		}
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
		color: black;
		margin: 0;
	}
	.dark.bar h3 {
		color: white;
	}
	.bar a {
		color: #202020b2;
	}
	.dark.bar a {
		color: rgba(191, 191, 191, 0.698);
	}
</style>