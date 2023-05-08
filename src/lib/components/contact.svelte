<script>
    import { goatCounter } from "$lib/goatcounter";
    import { DateTime } from "luxon";
    import { onMount } from "svelte";
    import Location from "./icons/location.svelte";

    let time = DateTime.now();
    onMount(() => {
        let i = setInterval(() => {
            time = DateTime.now();
        }, 1000);
        return () => clearInterval(i);
    });
</script>

<div class="rounded-lg bg-dark-800 text-gray-300 max-w-100 m-auto mb-5 mt-15 p-5">
    <div class="list">
        <a href="https://goo.gl/maps/pM3bGyx9u5uBuqqv5" class="flex items-center justify-center w-full p-5" rel="noreferrer noopener" target="_blank">
            <div class="text-gray-400 h-7 w-7">
                <Location />
            </div>
            Prague, Czech Republic
        </a>
        <div class="profiles">
            <!-- svelte-ignore security-anchor-rel-noreferrer -->
            <a href="https://github.com/danbulant" use:goatCounter data-goatcounter-click="contact-github" rel="me noopener" target="_blank">
                <span class="platform">GitHub</span>
                <div class="main">
                    <img src="/tech/github.png" alt="" draggable={false}>
                    <span class="name">danbulant</span>
                </div>
            </a>
            <!-- svelte-ignore security-anchor-rel-noreferrer -->
            <a href="https://www.linkedin.com/in/danbulant/" use:goatCounter data-goatcounter-click="contact-linkedin" rel="me noopener" target="_blank">
                <span class="platform">LinkedIn</span>
                <div class="main">
                    <img src="/tech/linkedin.png" class="rounded-1" alt="" draggable={false}>
                    <span class="name">danbulant</span>
                </div>
            </a>
            <!-- svelte-ignore security-anchor-rel-noreferrer -->
            <a href="https://discord.gg/XKPbz5xRuK" use:goatCounter data-goatcounter-click="contact-discord" rel="noopener" target="_blank">
                <span class="platform">Discord</span>
                <div class="main">
                    <img src="/tech/discord.png" alt="" draggable={false}>
                    <span class="name">TechmandanCZ#3372</span>
                </div>
            </a>
            <!-- svelte-ignore security-anchor-rel-noreferrer -->
            <a href="https://twitter.com/danbulant" use:goatCounter data-goatcounter-click="contact-twitter" rel="me noopener" target="_blank">
                <span class="platform">Twitter</span>
                <div class="main">
                    <img src="/tech/twitter.png" alt="" draggable={false}>
                    <span class="name">@danbulant</span>
                </div>
            </a>
            <a use:goatCounter data-goatcounter-click="contact-layer8" href="https://layer8.space/@techmandan">
                <span class="platform">Mastodon</span>
                <div class="main">
                    <img src="/tech/mastodon.png" alt="" draggable={false}>
                    <a rel="me" use:goatCounter data-goatcounter-click="contact-layer8" href="https://layer8.space/@techmandan" class="name !hover:underline">@techmandan@layer8.space</a>
                </div>
            </a>
            <a href="mailto:me@danbulant.eu" use:goatCounter data-goatcounter-click="contact-email">
                <span class="platform">Email</span>
                <div class="main">
                    <img src="/tech/mail.svg" alt="" draggable={false}>
                    <span class="name">me@danbulant.eu</span>
                </div>
            </a>
            <div>
                <span class="platform">Matrix</span>
                <div class="main">
                    <span class="logo">[]</span>
                    <span class="name">@/:danbulant.cz</span>
                </div>
            </div>
            <div>
                <div class="platform">Local Time</div>
                <div class="main">
                    <img src="/tech/clock.svg" alt="" draggable={false}>
                    <div class="name">GMT+1 - {time.setZone("Europe/Prague", { keepLocalTime: true }).toFormat("HH:mm:ss")}</div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .platform {
        @apply text-gray-400;
    }
    .main {
        @apply flex gap-3 pt-1 items-center;
    }
    .profiles {
        @apply max-w-80 m-auto flex flex-col;
    }
    a:hover, a:active {
        @apply no-underline;
    }
    a:active .main, a:hover .main {
        @apply underline;
    }
    .profiles > * {
        @apply py-1.5;
    }
    .profiles > div {
        @apply m-0 p-0;
    }
    img, .logo {
        height: 2em;
        width: 2em;
        text-align: center;
        user-select: none;
    }
</style>
