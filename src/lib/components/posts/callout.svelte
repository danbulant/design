<script>
    import darkmode from "$lib/stores/darkmode";
    import { brightnessByColor, mix } from "../../color";

    export var color;
    export var closed = false;
    export var closable = closed;
    export var minimal = false;

    function toggle() {
        if (closable) {
            closed = !closed;
        }
    }

    let brightness = 0;
    $: brightness = brightnessByColor(mix(color, $darkmode ? "#000" : "#fff", 0.5));

    let isDark = false;
    $: isDark = brightness < 0.5;
</script>

<!-- A simple callout with header and slot body. Header background colored according to color, and the whole callout has a left border colored as well. -->
<div class:minimal class:closed class:closable class="w-full rounded border-l border-l-4 my-6 color-shadow" style:border-left-color={color} style:--shadow-color="{color}0D">
    <div on:click={toggle} on:keydown={toggle} class="header rounded-tr-lg" style:background-color="{color}40" class:dark-bg={isDark}>
        <h1 class="text-big p-0 m-0">
            <slot name="title"/>
        </h1>
    </div>
    <div class="content rounded-br-lg p-4 backdrop-blur -mt-1 pt-5">
        <slot />
    </div>
</div>

<style lang="postcss">
    .color-shadow {
        box-shadow: 0 0 1rem 0.25rem var(--shadow-color), -4px 0 1rem 0.25rem var(--shadow-color);
    }
    .closed .content {
        @apply hidden;
    }
    .closable .header {
        @apply cursor-pointer select-none;
    }
    .closed .header {
        @apply rounded-br-lg;
    }
    .minimal .header {
        @apply p-0.5 pl-4;
    }
    .header {
        @apply text-black p-4;
    }
    .header.dark-bg {
        @apply text-white;
    }
</style>