<script>
    import darkmode from "../stores/darkmode";
    export var outline = false;
    export var href = null;
    export var value = null;
    export var newTab = false;

    function click() {
        value = !value;
    }
</script>

{#if href}
    <a {href} target={newTab ? "_blank" : undefined} class:darkmode={$darkmode} on:click={click} {...$$restProps} class:outline>
        <slot />
    </a>
{:else}
    <button class:darkmode={$darkmode} on:click={click} {...$$restProps} class:outline>
        <slot />
    </button>
{/if}

<style>
    button.darkmode, a.darkmode {
        color: #f4f4f4;
    }
    button, a {
        margin: 2.5px 0;
        display: inline-block;
        color: #333;
        background-color: #f4f4f4;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px 10px;
        box-shadow: 0 0 0 black;
        background: #F5CB5C;
        transition: box-shadow 0.1s, background 0.3s;
    }
    .outline {
        position: relative;
        background: transparent;
        z-index: 1;
    }
    .outline::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: #F5CB5C;
        width: 0;
        height: 100%;
        border-radius: 0;
        transition: width .3s, border-radius .3s, background-color .3s;
        z-index: -1;
    }
    .outline:hover::before {
        width: 100%;
        background-color: #e0a500;
    }
    a:hover, button:hover {
        background-color: #e0a500;
        text-decoration: none;
        box-shadow: 0 0 3px black;
    }
    a.outline:hover, button.outline:hover {
        background: transparent;
    }
</style>