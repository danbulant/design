<nav class="bar-component">
    <slot />
</nav>

<style>
    nav {
        width: calc(100% - 20px);
        border-radius: 5px;
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
    :global(nav.bar-component > *) {
        margin: 10px;
    }
</style>