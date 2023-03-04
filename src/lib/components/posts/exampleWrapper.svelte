<script>
    import darkmode from "$lib/stores/darkmode";
    import Callout from "./callout.svelte";
    export var title = "Result";
    export var nopadding = false;

    $: color = $darkmode ? "#000000" : "#AAAAAA";
</script>

<Callout {color}>
    <div slot="title">
        {#if title || $$slots.title}
            <slot name="title" />
            {title}
        {/if}
    </div>
    <div class="inner" class:nopadding>
        <slot />
    </div>
</Callout>

<style>
    .inner {
        @apply p-2;
    }
    .inner.nopadding {
        padding: 0;
    }
</style>