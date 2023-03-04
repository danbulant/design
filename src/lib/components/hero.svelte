<script>
    import { onMount } from "svelte";

    let current = 0;
    export var appTypeHover;

    $: if(appTypeHover == "websites") current = 0;
    $: if(appTypeHover == "applications") current = 3;
    $: if(appTypeHover == "bots") current = 1;

    onMount(() => {
        let i = setInterval(() => {
            current++;
            if(current > 3) current = 0;
        }, 5000);
        return () => clearInterval(i);
    });
</script>

<div class="hero">
    <div class="bg z-0">
        <img class="bg1" style="right: {(current - 3) * 100}%;" src="/screenshots/heaventaker/heaventaker.webp" alt="">
        <img class="bg2" style="right: {(current - 2) * 100}%;" src="/screenshots/animasher.webp" alt="">
        <img class="bg3" style="right: {(current - 1) * 100}%;" src="/screenshots/ignibg.webp" alt="">
        <img class="bg4" style="right: {(current - 0) * 100}%;" src="/screenshots/mangadex.png" alt="">
    </div>
    <div class="blur z-1"></div>
    <div class="bg z-2">
        <img class="bg1" style="right: {(current - 3) * 100}%;" src="/screenshots/heaventaker/heaventaker.webp" alt="">
        <img class="bg2" style="right: {(current - 2) * 100}%;" src="/screenshots/animasher.webp" alt="">
        <img class="bg3" style="right: {(current - 1) * 100}%;" src="/screenshots/ignibg.webp" alt="">
        <img class="bg4" style="right: {(current - 0) * 100}%;" src="/screenshots/mangadex.png" alt="">
    </div>
    <slot />
</div>

<style>
    .hero {
        border-radius: 5px;
        background: rgba(244, 196, 196, 0.616);
        position: relative;
        padding: 40px 120px;
        padding: 40px min(120px, 10vw);
        margin: 2rem 1.5rem;
        /* min-height: calc(100vh - 129px - 80px + 5px); */
        max-height: 1080px;
        max-width: 1500px;
    }
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        z-index: -1;
        filter: darken(20%);
        background: #F4C4C4;
        overflow: hidden;
    }
    .bg img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        transition: right .4s;
    }
    .blur {
        position: absolute;
        top: -4rem;
        left: -4rem;
        width: calc(100% + 8rem);
        height: calc(100% + 8rem);
        backdrop-filter: blur(20px);
    }
    .z-0 {
        z-index: -3;
    }
    .z-1 {
        z-index: -2;
    }
    .z-2 {
        z-index: -1;
    }
    @media (prefers-reduced-motion) {
        .bg img {
            transition: none;
        }
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