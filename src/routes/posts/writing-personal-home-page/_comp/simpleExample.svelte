<script>
    var name = "world";
    
    let funny = { "amogus": "ඞ", "AMOGUS": "sussy baka", "discord": "proprietary matrix", "never gonna give you up": "never gonna let you down", "wysi": "727", "727": "wysi" };
</script>

<h4>Hello {funny[name] || name}</h4>

<input type=text class="text-black" bind:value={name}>

<style lang="postcss">
    h4 {
        @apply p-0 m-0 text-xl font-bold;
    }
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
