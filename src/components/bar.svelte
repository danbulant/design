<nav class="bar-component">
    <slot />
</nav>

<style>
    nav {
        width: calc(100% - 20px);
        border-radius: 5px;
		background: rgba(255,255,255, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
    :global(.dark nav.bar-component) {
		background: rgba(28, 28, 33, 0.2);
    }
    :global(nav.bar-component > *) {
        margin: 10px;
    }
</style>