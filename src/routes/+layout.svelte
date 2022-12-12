<script>
    import Navbar from "$lib/components/navbar.svelte";
    import PageTransition from "$lib/components/pageTransition.svelte";
    import "virtual:windi.css";
    import { browser, dev } from "$app/env";
    import * as Sentry from '@sentry/browser';
    if (browser && dev) import("virtual:windi-devtools");
    export let data;

    if (browser && !dev) {
        Sentry.init({
            dsn:  import.meta.env.VITE_SENTRY_DSN,
            environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
            release: import.meta.env.VITE_SENTRY_RELEASE,
        });
    }
</script>

<Navbar />

<div class="overflow-x-hidden w-100vw">
    <PageTransition url={data.url}>
        <slot />
    </PageTransition>
</div>
