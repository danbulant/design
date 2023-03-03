<script>
    import darkmode from "$lib/stores/darkmode";
    import Bar from "./bar.svelte";
    import Split from "./split.svelte";
</script>

<div class="bottombar" class:dark={$darkmode}>
	<Bar>
		<h3>Daniel Bulant</h3>
		<Split />
		<h3>
			2020-2023
		</h3>
	</Bar>
</div>

<style>
	.bottombar {
		margin: 30px auto 30px auto;
		width: calc(100% - min(100px, 10%));
	}
    
    h3 {
        margin: 5px 10px;
    }
	@media (max-width: 520px) {
		.bottombar {
			margin: 30px 0 0 0;
			width: 100%;
			background: white;
		}
		.dark.bottombar {
			background: rgb(28, 28, 33);
		}
	}
	.bottombar {
		max-width: 1380px;
	}
	.bottombar h3 {
		font-size: 18px;
		font-weight: bold;
		margin: 0;
	}
	.dark h3 {
		color: rgb(191, 191, 191);
	}
	h3 {
		font-size: 29px;
		font-weight: 400;
		color: #282B29;
	}
</style>