<div class="hero">
    <slot />
</div>

<style>
    .hero {
        border-radius: 5px;
        background: #F4C4C4;
        padding: 40px 120px;
        padding: 40px min(120px, 10vw);
        margin: 0 20px;
        /* min-height: calc(100vh - 129px - 80px + 5px); */
        max-height: 1080px;
        max-width: 1500px;
        
        margin-bottom: 30px;
    }
    @media (min-width: 1760px) {
        .hero {
            margin: 0 auto;
        }
    }
	@media (max-width: 1100px) {
        .hero {
            min-height: auto;
            margin-bottom: 30px;
        }
	}
</style>