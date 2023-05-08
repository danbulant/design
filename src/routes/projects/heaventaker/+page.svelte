<script>
    import { browser } from "$app/environment";
    import HeaventakerButton from "$lib/components/projects/heaventaker/heaventakerButton.svelte";

    let top = 76;
    let remSize = 16;

    $: if(browser) remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    function scroll() {
        const imageHeight = window.innerWidth*1080/2050-10*remSize;
        const offset = 76;
        // parallax scroll so that the image has only the center of it visible at the end
        top = offset - Math.max(0, Math.min(imageHeight-offset, window.scrollY*0.4));
    }

    $: if(browser) scroll();
</script>

<svelte:head>
    <title>Heaventaker - Daniel Bulant</title>
    <meta name="description" content="A short game about solving puzzles in heaven and about pleasing your favorite angels. Playable online or on Android.">
</svelte:head>

<svelte:window on:scroll={scroll} />

<div class="relative">
    <div class="bg-img main-image flex items-end justify-center" aria-label="Heaventaker" style="background-position: 50% {top}px;">
    </div>

    <section class="px-4 m-auto mb-5 max-w-200">
        <div class="flex justify-between items-center flex-wrap">
            <HeaventakerButton href="https://heaventaker.danbulant.eu">Play online</HeaventakerButton>
            <HeaventakerButton href="https://play.google.com/store/apps/details?id=eu.danbulant.heaventaker">Google Play</HeaventakerButton>
            <HeaventakerButton href="https://github.com/danbulant/heaventaker">GitHub</HeaventakerButton>
        </div>
        <div class="flex items-center justify-center flex-wrap flex-row-reverse">
            <div class="flex-grow" style="width: 300px;">
                <p>
                    A Work-in-progress Helltaker inspired game with angels.
                </p>
        
                <p>
                    Short game about solving puzzles in heaven and about pleasing your favorite angels.
                </p>
        
                Features:
                <ul class="list-disc">
                    <li class="ml-4">6 angels, each with a unique puzzle - art by u/hohodo</li>
                    <li class="ml-4">Audio from Mittsies</li>
                </ul>
            </div>
            <img src="/screenshots/heaventaker/Uriel_unhappy.png" class="h-80" alt="">
        </div>
    </section>

    <div class="bg-img image-uriel"></div>

    <div class="bg-img secondary-image"></div>

    <section class="licensing">
        <div class="infobox">
            <h2 class="text-2xl font-bold">Licensing</h2>
    
            <p>
                The game is licensed under AGPLv3. This means it's free software, but you must give credit to the author and share your changes under the same license. Read full license <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">here</a>.
            </p>
    
            <p>
                Images are licensed under CC-BY-SA. This means you must give credit to the author and share your changes under the same license.
            </p>
        </div>
        <img src="/screenshots/heaventaker/characters.png" width="640" height="381" alt="">
    </section>

    <div class="bg-img image-michael"></div>
</div>

<style lang="postcss">
    .bg-img {
        @apply p-0 m-0 w-full bg-no-repeat bg-fixed;
    }
    .main-image {
        background-image: url("/screenshots/heaventaker/heaventaker2.webp");
        --width: min(1800px, 100vw);
        --height: calc(var(--width)*1080/2050);
        background-size: var(--width) var(--height);
        height: var(--height);
    }
    .secondary-image {
        background-image: url("/screenshots/heaventaker/lucifer.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-color: #7F4953;
        height: 90vh;
    }
    .image-michael {
        background-image: url("/screenshots/heaventaker/michael.webp");
        background-size: contain;
        background-repeat: no-repeat;
        height: calc(100vw*0.4312611012);
        background-position: 100% 100%;
    }
    .image-uriel {
        background-image: url("/screenshots/heaventaker/uriel.png");
        background-size: cover;
        background-repeat: no-repeat;
        height: 90vh;
        background-position: 50% 100%;
    }

    .licensing {
        @apply px-4 py-8 m-auto mb-5 max-w-300 gap-5 flex items-center justify-center flex-wrap flex-row-reverse;
    }
    .licensing .infobox {
        @apply fleg-grow max-w-60;
    }
    .licensing img {
        @apply rounded w-full h-auto;
        max-width: calc(600px - 15rem);
    }
    @media (max-width: 670px) {
        .licensing .infobox {
            @apply max-w-full;
        }
        .licensing img {
            @apply max-w-full;
        }
    }

    section {
        @apply mb-0;
    }
    p {
        @apply my-2;
    }
</style>
