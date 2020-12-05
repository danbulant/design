<script>
    export var navbar = false;
</script>

<section class="hero" class:navbar>
    {#if $$slots.content}
        <div class="title">
            <slot name="title" />
        </div>
        <div class="content">
            <slot name="content" />
        </div>
    {:else}
        <div class="title full">
            <slot name="title" />
        </div>
    {/if}
    <slot />
</section>

<style>
    .hero {
        display: flex;
        height: 100%;
        max-height: 720px;
        max-width: 1080px;
        margin: auto;
        padding: 0 5px;
        position: relative;
    }
    .navbar {
        height: calc(100% - 50px);
    }

    .title {
        width: 50%;
        text-align: center;
    }
    .title.full {
        width: 100%;
    }

    .content {
        width: 50%;
        text-align: center;
    }
</style>