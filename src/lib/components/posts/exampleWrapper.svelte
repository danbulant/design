<script>
    import darkmode from "$lib/stores/darkmode";
    export var title = "Result";
    export var nopadding = false;
</script>

<div class="outer" class:dark={$darkmode}>
    {#if title || $$slots.title}
        <div class="title">
            <slot name="title" />
            {title}
        </div>
    {/if}
    <div class="inner" class:nopadding>
        <slot />
    </div>
</div>

<style>
    .outer {
        border: 1px solid black;
        border-radius: 5px;
        transition: .3s border-color;
    }
    .outer.dark {
        border-color: white;
    }
    .inner {
        padding: 10px;
    }
    .inner.nopadding {
        padding: 0;
    }
    .title {
        width: calc(100% - 20px);
        padding: 10px 10px 0;
        height: 35px;
        font-size: 18px;
        background-color: rgb(218, 218, 218);
    }
    .dark .title {
        background-color: rgb(49, 49, 49);
    }
</style>