<script>
    import Navbar from "$lib/components/navbar.svelte";
    import PageTransition from "$lib/components/pageTransition.svelte";
    import "virtual:windi.css";
    import { browser, dev } from "$app/environment";
    import * as Sentry from '@sentry/browser';
    import { apm } from "$lib/apm";
    import { page } from "$app/stores";

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