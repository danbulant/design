<script>
	import darkmode from "../stores/darkmode";

    export var href = "";
    export var text = false;
    export var blur = false;

    let className;
    export { className as class };
</script>

{#if href}
    <a href={href} class:blur tabindex="0" class="button {className}" class:text class:dark={$darkmode}><slot /></a>
{:else}
    <button class="button {className}" class:blur on:click class:text class:dark={$darkmode}><slot /></button>
{/if}

<style>

    .button {
        @apply bg-black/50 rounded;
        padding: 10px 15px;
        color: white;
        cursor: pointer;
        position: relative;
        border: 1px solid transparent;
        transition: border-color .2s;
    }
    .blur {
        @apply backdrop-blur;
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