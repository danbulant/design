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
            dsn: process.env.SENTRY_DSN,
            environment: process.env.SENTRY_ENVIRONMENT,
            release: process.env.SENTRY_RELEASE,
        });
    }
</script>

<Navbar />

<div class="overflow-x-hidden w-100vw">
    <PageTransition url={data.url}>
        <slot />
    </PageTransition>
</div>
