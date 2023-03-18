<script>
    import darkmode from "$lib/stores/darkmode";
    import { onMount } from "svelte";
    import Button from "./button.svelte";
    import Split from "./split.svelte";

    function toggle() {
        $darkmode = !$darkmode;
    }

    var scrollTop = 0;

    onMount(() => {
        const handleScroll = () => {
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        };
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    });

    $: progress = typeof window === "undefined" ? 1 : Math.min(1, scrollTop / 40);
</script>

<nav class="bar fixed top-0 left-0 z-99 w-100vw mx-auto mb-30px" class:dark={$darkmode}
    style:background="rgba({$darkmode ? "28,28,33" : "255,255,255"}, {progress * 0.2})"
    style:backdrop-filter="blur({progress*20}px)">
    <div class="subbar w-full flex items-center justify-between max-w-8xl m-auto">
        <a href="/"><h3>Daniel Bulant</h3></a>
        <Split />
        <Button text on:click={toggle}>{$darkmode ? "Light" : "Dark"} mode</Button>
        <div class="big">
            <Button text href="/#contact" class="big">Contact</Button>
            <Button text href="/posts" class="big">Blog</Button>
        </div>
    </div>
</nav>

<div class="h-19"></div>

<style lang="postcss">
	@media (max-width: 570px) {
		.bar .big {
			display: none;
		}
	}
    
	.bar {
        @apply w-full flex flex-between items-center p-2;
		background: rgba(255,255,255, 0.2);
	}
	.dark.bar {
		background: rgba(28, 28, 33, 0.8);
	}
    .bar .subbar > * {
        margin: 5px 10px;
    }
	@media (max-width: 400px) {
		.bar {
			width: 100vw;
		}
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