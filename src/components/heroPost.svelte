<script>
    export var thumbnail;
    export var categories = [];
    export var author;
    export var date;
    export var title;
    export var authorIcon;
    export var description;
</script>

<div class="post">
    <img src={thumbnail} alt="Thumbnail" class="thumbnail" draggable={false}>
    <div class="data">
        <div class="categories">
            {#each categories as category}
                <span>{category}</span>
            {/each}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div class="author">
            <img src={authorIcon} alt="Avatar of author" draggable={false}>
            —
            <span class="author">{author}</span>
            —
            <span class="date">{date}</span>
        </div>
    </div>
</div>

<style>
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
    }
</style>