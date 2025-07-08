<script>
    import Bar from "./bar.svelte";
</script>

<div class="bottombar">
	<Bar>
		<h3>Daniel Bulant</h3>
		<h3>
			2020-2025
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
	h3 {
		font-size: 29px;
		font-weight: 400;
	}
</style>