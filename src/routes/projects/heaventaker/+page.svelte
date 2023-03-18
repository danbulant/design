<script>
    import Button from "$lib/components/projects/heaventaker/button.svelte";

    let top = 76;

    function scroll() {
        top = 76 - document.scrollingElement.scrollTop * (0.35 * window.innerWidth / 1456);
    }
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
            <Button href="https://heaventaker.danbulant.eu">Play online</Button>
            <Button href="https://play.google.com/store/apps/details?id=eu.danbulant.heaventaker">Google Play</Button>
            <Button href="https://github.com/danbulant/heaventaker">GitHub</Button>
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

    <div class="bg-img secondary-image flex items-center justify-center">
    </div>

    <section class="px-4 m-auto mb-5 max-w-200">

        <h2 class="text-2xl font-bold">Licensing</h2>

        <p>
            The game is licensed under AGPLv3. This means it's free software, but you must give credit to the author and share your changes under the same license. Read full license <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">here</a>.
        </p>

        <p>
            Images are licensed under CC-BY-SA. This means you must give credit to the author and share your changes under the same license.
        </p>
    </section>

    <div class="bg-img image-michael"></div>
</div>

<style lang="postcss">
    .bg-img {
        @apply p-0 m-0 w-full bg-no-repeat bg-fixed;
    }
    .main-image {
        background-image: url("/screenshots/heaventaker/heaventaker2.webp");
        background-size: calc(100vw - 10rem * 2050 / 1080) calc(100vw*1080/2050 - 10rem);
        height: calc(100vw*1080/2050 - 10rem);
    }
    .secondary-image {
        background-image: url("/screenshots/heaventaker/lucifer.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-color: #7F4953;
        height: calc(100vw*0.509375);
    }
    .image-michael {
        background-image: url("/screenshots/heaventaker/michael.webp");
        background-size: contain;
        background-repeat: no-repeat;
        height: calc(100vw*0.4312611012);
        background-position: 100% 100%;
    }
    section {
        margin-bottom: 0;
    }
    p {
        @apply my-2;
    }
</style>
