<script>
    import darkmode from "$lib/stores/darkmode";

    var name = "world";
    
    let funny = { "amogus": "ඞ", "AMOGUS": "sussy baka", "discord": "proprietary matrix", "never gonna give you up": "never gonna let you down", "wysi": "727", "727": "wysi" };
</script>

<h1>Hello {funny[name] || name}</h1>

<input class:dark={$darkmode} type=text class="text-black" bind:value={name}>

<style>
    h1 {
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
    input.dark {
        @apply border-b-white/30 text-white;
    }
    input.dark:focus {
        @apply border-b-white/70;
    }
</style>
