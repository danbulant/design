<script>
    import { goatCounter } from "$lib/goatcounter";
    import { goto } from '$app/navigation';
    export var image; // "https://picsum.photos/725/350?random=" + Math.floor(Math.random() * 5000);
    export var link = "";
    export var grayscale = false;
    export var extradark = false;
    export var clickable = false;
    export var crossfadesend = null;
    export var crossfadereceive = null;
    export var crossfadekey = null;
    export var target="_blank";
    export var width;
    export var height;
    export var name;
    function handle(e) {
        if(!link) {
            e.preventDefault();
            alert("No link available");
        } else if(link.startsWith("/")) {
            e.preventDefault();
            goto(link);
        }
    }
</script>

<a href={link || "#"} {target} rel="noopener" data-goatcounter-click="project-{name}" class="full" on:click={handle} use:goatCounter>
    <div class="project">
        <div class="imgcon">
            {#if crossfadesend}
                <img out:crossfadesend={{ key: crossfadekey }} in:crossfadereceive={{ key: crossfadekey }} src={image} alt={name} draggable={false} class:grayscale {width} {height}>
            {:else}
                <img src={image} alt={name} draggable={false} class:grayscale {width} {height}>
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
            <div class="clickable">
                Click to view details
            </div>
        {/if}
    </div>
</a>

<style>
    a.full:hover {
        text-decoration: none;
    }
    .project {
        width: 100%;
        margin-bottom: 30px;
    }
    a.full {
        width: 100%;
    }
    .imgcon {
        width: 100%;
        border-radius: 10px;
        position: relative;
    }
    .project:hover .desc {
        opacity: 1;
        user-select: auto;
    }
    .desc {
        position: absolute;
        top: 0;
        left: 0;
        transition: background-color .3s, opacity .3s;
        width: calc(100% - 30px);
        height: calc(100% - 27px);
        border-radius: 10px;
        opacity: 0;
        user-select: none;
        backdrop-filter: blur(35px);
        display: flex;
        flex-direction: column;
        padding: 10px 15px;
        background-color: rgba(0,0,0,0.2);
        color: rgb(214, 214, 214);
    }
	@supports (-moz-appearance:none) {
		.desc {
			background: rgba(0,0,0,0.9) !important;
		}
	}
    .desc.extradark {
        background-color: rgba(0,0,0,0.4);
    }
    .desc .content {
        flex-grow: 1;
    }
    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        transition: filter .3s;
    }
    img.grayscale {
        filter: grayscale(100%);
    }
    h3 {
        font-weight: 400;
    }
    .bottom {
        color: gray;
    }
</style>