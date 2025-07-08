<script>
    import { fly } from "svelte/transition";
    export let url = "";
</script>

{#key url}
    <div
        in:fly={{ x: -2, duration: 200, delay: 200 }}
        out:fly={{ x: 2, duration: 200 }}
        class="absolute bg-inherit w-full"
    >
        <slot />
    </div>
{/key}