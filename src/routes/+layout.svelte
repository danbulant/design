<script>
    import Navbar from "$lib/components/navbar.svelte";
    import PageTransition from "$lib/components/pageTransition.svelte";
    import "virtual:windi.css";
    import { browser, dev } from "$app/environment";
    import * as Sentry from '@sentry/browser';
    import { apm } from "$lib/apm";
    import { navigating, page } from "$app/stores";
    import Spinner from "$lib/components/icons/spinner.svelte";
    import { fly } from "svelte/transition";

    if (browser && dev) import("virtual:windi-devtools");
    
    export let data;

    if (browser && !dev) {
        Sentry.init({
            dsn:  import.meta.env.VITE_SENTRY_DSN,
            environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
            release: import.meta.env.VITE_SENTRY_RELEASE,
        });
    }
    if(browser) {
        apm.setInitialPageLoadName($page.route.id);
    }
</script>

<Navbar />

{#if $navigating}
    <div transition:fly={{ duration: 200, opacity: 0, y: -20 }} class="fixed bg-hex-1f1f1f top-20 left-1/2 transform -translate-x-1/2 rounded-full w-14 h-14 p-2 z-99">
        <Spinner />
    </div>
{/if}

<div class="overflow-x-hidden w-100vw">
    <PageTransition url={data.url}>
        <slot />
    </PageTransition>
</div>

<style>
    :global(*) {
        box-sizing: border-box;
    }
</style>