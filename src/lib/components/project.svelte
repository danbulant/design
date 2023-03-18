<script>
    import { goatCounter } from "$lib/goatcounter";
    import { goto } from "$app/navigation";
    export var image; // "https://picsum.photos/725/350?random=" + Math.floor(Math.random() * 5000);
    export var link = "";
    export var grayscale = false;
    export var extradark = false;
    export var clickable = false;
    export var crossfadesend = null;
    export var crossfadereceive = null;
    export var crossfadekey = null;
    export var target = "_blank";
    export var width;
    export var height;
    export var name;
    function handle(e) {
        if (!link) {
            e.preventDefault();
            alert("No link available");
        } else if (link.startsWith("/")) {
            e.preventDefault();
            goto(link);
        }
    }
</script>

<a
    href={link || "#"}
    {target}
    rel="noopener"
    data-goatcounter-click="project-{name}"
    class="w-full hover:no-underline block transition duration-300 active:scale-95 transform"
    on:click={handle}
    use:goatCounter
>
    <div class="project">
        <div class="imgcon">
            {#if crossfadesend}
                <img
                    out:crossfadesend={{ key: crossfadekey }}
                    in:crossfadereceive={{ key: crossfadekey }}
                    src={image}
                    alt={name}
                    draggable={false}
                    class:grayscale
                    {width}
                    {height}
                />
            {:else}
                <img
                    src={image}
                    alt={name}
                    draggable={false}
                    class:grayscale
                    {width}
                    {height}
                />
            {/if}
            {#if $$slots.desc}
                <div class="desc" class:extradark>
                    <div class="content">
                        <slot name="desc" />
                    </div>
                </div>
            {/if}
        </div>
        <h3><slot /></h3>
        {#if clickable}
            <div class="clickable">Click to view details</div>
        {/if}
    </div>
</a>

<style lang="postcss">
    .project {
        width: 100%;
        margin-bottom: 30px;
    }
    .imgcon {
        @apply rounded-lg mb-4;
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    .project:hover .desc {
        opacity: 1;
        user-select: auto;
    }
    .project:hover img {
        filter: blur(35px);
    }
    .desc {
        @apply absolute top-0 left-0 w-full h-full rounded-lg opacity-0 select-none flex flex-col py-2rem px-2rem;
        transition: background-color 0.3s, opacity 0.3s;
        background-color: rgba(0, 0, 0, 0.2);
        color: rgb(214, 214, 214);
    }
    /* @supports (-moz-appearance:none) {
		.desc {
			background: rgba(0,0,0,0.9) !important;
		}
	} */
    .desc.extradark {
        background-color: rgba(0, 0, 0, 0.4);
    }
    .desc .content {
        flex-grow: 1;
    }
    img {
        @apply rounded-lg;
        width: 100%;
        height: auto;
        transition: filter 0.3s;
        filter: blur(0px) grayscale(0);
    }
    img.grayscale {
        filter: blur(0px) grayscale(100%);
    }
    h3 {
        @apply font-normal text-xl;
    }
</style>
