<script>
    export var color;
</script>

<!-- A simple callout with header and slot body. Header background colored according to color, and the whole callout has a left border colored as well. -->
<div class="w-full rounded border-l border-l-4 my-2" style="border-left-color: {color}">
    <div class="rounded-tr-lg p-4" style="background-color: {color}40">
        <h1 class="text-big text-white p-0 m-0">
            <slot name="title"/>
        </h1>
    </div>
    <div class="rounded-br-lg p-4 bg-gray-500/10">
        <slot />
    </div>
</div>