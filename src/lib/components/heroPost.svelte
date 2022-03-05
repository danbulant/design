<script>
    export var bigThumbnail;
    // export var categories = [];
    export var author;
    export var relDate;
    export var title;
    export var authorIcon;
    export var description;
    export var path;
</script>

<a href={path} class="post">
    {#if bigThumbnail}
        <img src={bigThumbnail} styles="width: 800px; height: 400px;" alt="Thumbnail" class="thumbnail" draggable={false}>
    {/if}
    <div class="data">
        <!-- <div class="categories">
            {#each categories as category}
                <span>{category}</span>
            {/each}
        </div> -->
        <h3>{title}</h3>
        <p>{description}</p>
        <div class="author">
            <img src={authorIcon} alt="Avatar of author" draggable={false}>
            <span class="spacer">—</span>
            <span class="author">{author}</span>
            <span class="spacer">—</span>
            <span class="date">{relDate}</span>
        </div>
    </div>
</a>

<style>
    .post {
        cursor: pointer;
        user-select: none;
    }
    a.post:hover {
        text-decoration: none;
    }
    .thumbnail {
        border-radius: 5px;
        width: 100%;
    }
    .categories {
        color: #0054E2;
    }
    .author {
        display: flex;
        align-items: center;
        margin-left: -5px;
        height: 2em;
    }
    h3 {
        font-weight: 400;
        font-size: 29px;
        padding: 0;
        margin: 0;
    }
    p {
        font-size: 18px;
    }
    .author > * {
        padding: 0 5px;
    }
    .author img {
        height: 100%;
        border-radius: 50%;
        padding-right: 5px;
    }
</style>