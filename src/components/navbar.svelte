<script>
    export var darkmode;
</script>

<nav class="bar" class:darkmode>
    <div class="inner">
        <slot />
    </div>
</nav>

<div class="spacer"></div>

<style>
    .spacer {
        height: 50px;
    }
    .darkmode {
        background: #242423;
    }
    nav.bar .inner {
        max-width: 1024px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        vertical-align: middle;
        align-items: center;
        height: 100%;
        width: calc(100% - 40px);
        padding: 0 20px;
    }
    nav.bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 50px;
        box-shadow: 0 0 5px black;
    }
</style>