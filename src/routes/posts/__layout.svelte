<script>
    import Navbar from "$lib/components/navbar.svelte";
</script>

<Navbar/>

<div class="post-layout">
    <slot />
</div>

<style>
    :global(body .post-layout a) {
        color: rgb(4, 192, 192);
    }
    :global(body .post-layout a:hover) {
        color: rgb(2, 218, 218);
    }
</style>