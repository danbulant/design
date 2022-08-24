<script>
	import darkmode from "../stores/darkmode";

    export var href = "";
    export var text = false;
</script>

{#if href}
    <a href={href} tabindex="0" class="button" class:text class:dark={$darkmode}><slot /></a>
{:else}
    <button class="button" on:click class:text class:dark={$darkmode}><slot /></button>
{/if}

<style>

    .button {
        background: #006db3;
        border-radius: 5px;
        padding: 10px 15px;
        color: white;
        cursor: pointer;
        position: relative;
        border: 1px solid transparent;
        transition: border-color .2s;
    }

    .text {
        background: transparent;
        color: black;
    }
    .dark.text {
        color: white;
    }
    .button:hover, .button:focus {
        text-decoration: none;
        border-color: black;
    }
    .button.dark:hover, .button.dark:focus {
        border-color: white;
    }
    .button {
        display: inline-block;
    }

    .button:active {
        background: #007bc710;
    }
</style>