<script>
    export var image; // "https://picsum.photos/725/350?random=" + Math.floor(Math.random() * 5000);
    export var link = "";
    export var tags = [];
    export var grayscale = false;
    export var extradark = false;
    function handle(e) {
        if(!link) {
            e.preventDefault();
            alert("No link available");
        }
    }
</script>

<a href={link} target="_blank" rel="noreferrer noopener" class="full" on:click={handle}>
    <div class="project">
        <div class="imgcon">
            <img src={image} alt="Project" draggable={false} class:grayscale>
            {#if $$slots.desc}
                <div class="desc" class:extradark>
                    <div class="content">
                        <slot name="desc" />
                    </div>
                    <div class="bottom">Click to open in new tab</div>
                </div>
            {/if}
        </div>
        <h3><slot /></h3>
        <div class="tags">
            {#each tags as tag, i}
                <span>{tag}</span>{#if i !== tags.length - 1}<span>&middot;</span>{/if}
            {/each}
        </div>
        <a href={link || "#"} rel="noreferrer noopener" target="_blank">View</a>
    </div>
</a>

<style>
    a.full:hover {
        text-decoration: none;
    }
    .tags {
        margin: 5px 0;
        margin-left: -3px;
    }
    .tags span {
        padding: 0 3px;
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
    .desc.extradark {
        background-color: rgba(0,0,0,0.4);
    }
    .desc .content {
        flex-grow: 1;
    }
    img {
        width: 100%;
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