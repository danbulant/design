<script>
    export var image = "https://picsum.photos/725/350?random=" + Math.floor(Math.random() * 5000);
    export var link = "";
    export var tags = [];
</script>

<a href={link} target="_blank" class="full">
    <div class="project">
        <img src={image} alt="Project" draggable={false}>
        <h3><slot /></h3>
        <div class="tags">
            {#each tags as tag, i}
                <span>{tag}</span>
                {#if i !== tags.length - 1}
                    <span>&middot;</span>
                {/if}
            {/each}
        </div>
        <a href={link} target="_blank">View</a>
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
    img {
        width: 100%;
        border-radius: 5px;
    }
    h3 {
        font-weight: 400;
    }
</style>