<script>
    import Described from "./described.svelte";

    export var src;
    export var alt;
    export var title;
</script>

<Described>
    <img {src} {alt} {title} name="content">
    <slot />
</Described>

<style>
    img {
        border-radius: 5px;
    }
</style>