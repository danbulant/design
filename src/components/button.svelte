<script>
    export var href = "";
    export var text = false;
</script>

{#if href}
    <a href={href} class="button" class:text><slot /></a>
{:else}
    <button on:click class:text><slot /></button>
{/if}

<style>
    button, .button {
        background: #008EE8;
        border-radius: 5px;
        padding: 10px 15px;
        color: white;
    }
    .button:hover {
        text-decoration: none;
    }
    .button {
        display: inline-block;
    }

    button:active, .button:active {
        background: #007bc7;
    }
    button:focus, .button:focus {
        border-color: white;
    }
    .text {
        background: transparent;
        color: black;
        border-color: transparent;
    }
</style>