<script>
    import darkmode from "$lib/stores/darkmode";
    var name = "world";
</script>

<input class:dark={$darkmode} type=text bind:value={name} class="text-black">

&lt;=>

<input class:dark={$darkmode} type=text bind:value={name} class="text-black">

<style>
    input {
        @apply p-2 bg-transparent backdrop-blur my-2 transition-colors duration-150;
        border: none;
        border-bottom: 1px solid rgba(0,0,0, 0.3);
    }
    input:focus {
        @apply outline-none border-b-black/70;
    }
    input.dark {
        @apply border-b-white/30 text-white;
    }
    input.dark:focus {
        @apply border-b-white/70;
    }
</style>