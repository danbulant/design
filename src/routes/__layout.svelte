<script context="module">
    export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
    import Navbar from "$lib/components/navbar.svelte";
    import PageTransition from "$lib/components/pageTransition.svelte";
    export let url;
</script>

<Navbar />

<div style="overflow-x: hidden;">
    <PageTransition {url}>
        <slot />
    </PageTransition>
</div>
