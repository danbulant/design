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
    <a href="https://goo.gl/maps/pM3bGyx9u5uBuqqv5" class="flex items-center justify-center w-full p-5" rel="noreferrer noopener" target="_blank">
        <div class="text-gray-400 h-7 w-7">
            <Location />
        </div>
        Prague, Czech Republic
    </a>
    <div class="profiles">
        <a href="https://github.com/danbulant" use:goatCounter data-goatcounter-click="contact-github" rel="noreferrer noopener" target="_blank">
            <span class="platform">GitHub</span>
            <div class="main">
                <img src="/tech/github.png" alt="" draggable={false}>
                <span class="name">danbulant</span>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/danbulant/" use:goatCounter data-goatcounter-click="contact-linkedin" rel="noreferrer noopener" target="_blank">
            <span class="platform">LinkedIn</span>
            <div class="main">
                <img src="/tech/linkedin.png" class="rounded-1" alt="" draggable={false}>
                <span class="name">danbulant</span>
            </div>
        </a>
        <a href="https://discord.gg/XKPbz5xRuK" use:goatCounter data-goatcounter-click="contact-discord" rel="noreferrer noopener" target="_blank">
            <span class="platform">Discord</span>
            <div class="main">
                <img src="/tech/discord.png" alt="" draggable={false}>
                <span class="name">TechmandanCZ#3372</span>
            </div>
        </a>
        <a href="https://twitter.com/danbulant" use:goatCounter data-goatcounter-click="contact-twitter" rel="noreferrer noopener" target="_blank">
            <span class="platform">Twitter</span>
            <div class="main">
                <img src="/tech/twitter.png" alt="" draggable={false}>
                <span class="name">danbulant</span>
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
            <div class="platform">Time</div>
            <div class="main">
                <img src="/tech/clock.svg" alt="" draggable={false}>
                <div class="name">GMT+1 - {time.setZone("Europe/Prague", { keepLocalTime: true }).toFormat("HH:mm:ss")}</div>
            </div>
        </div>
    </div>
</div>

<style>
    .platform {
        @apply text-gray-400;
    }
    .main {
        @apply flex gap-3 pt-1;
    }
    .profiles {
        @apply max-w-80 m-auto flex flex-col;
    }
    a:active, a:hover {
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
    img {
        height: 2em;
        width: 2em;
    }
</style>
