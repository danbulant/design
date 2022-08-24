<script>
    import Navbar from "$lib/components/navbar.svelte";
    import PageTransition from "$lib/components/pageTransition.svelte";
    import "virtual:windi.css";
    import { browser } from "$app/env";
    if (browser) import("virtual:windi-devtools");
    export let data;
</script>

<Navbar />

<div class="overflow-x-hidden w-100vw">
    <PageTransition url={data.url}>
        <slot />
    </PageTransition>
</div>
