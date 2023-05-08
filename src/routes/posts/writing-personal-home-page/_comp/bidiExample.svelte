<script>
    var name = "world";
</script>

<input type=text bind:value={name} class="text-black">

&lt;=>

<input type=text bind:value={name} class="text-black">

<style lang="postcss">
    input {
        @apply p-2 bg-transparent backdrop-blur my-2 transition-colors duration-150;
        border: none;
        border-bottom: 1px solid rgba(0,0,0, 0.3);
    }
    input:focus {
        @apply outline-none border-b-black/70;
    }
    :global(.dark) input {
        @apply border-b-white/30 text-white;
    }
    :global(.dark) input:focus {
        @apply border-b-white/70;
    }
</style>