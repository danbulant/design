<script context="module">
    export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
    import Navbar from "$lib/components/navbar.svelte";
    import PageTransition from "$lib/components/pageTransition.svelte";
    import "virtual:windi.css";
    import { browser } from "$app/env";
    if (browser) import("virtual:windi-devtools");
    export let url;
</script>

<Navbar />

<div class="overflow-x-hidden w-100vw">
    <PageTransition {url}>
        <slot />
    </PageTransition>
</div>
