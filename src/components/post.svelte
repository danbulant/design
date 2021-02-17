<script>
    export var thumbnail;
    export var categories = [];
    export var author;
    export var date;
    export var title;
    export var authorIcon;
</script>

<div class="post">
    <img src={thumbnail} alt="Thumbnail" class="thumbnail" draggable={false}>
    <div class="data">
        <div class="categories">
            {#each categories as category}
                <span>{category}</span>
            {/each}
        </div>
        <h4>{title}</h4>
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
    .post {
        width: 100%;
        height: 150px;
        margin: 10px 0;
        display: flex;
        align-items: center;
    }
    h4 {
        margin: 0;
        font-weight: 400;
        font-size: 18px;
    }
    .categories {
        color: #0054E2;
    }
    .thumbnail {
        width: 150px;
        margin-right: 15px;
    }
    img {
        height: 100%;
        border-radius: 5px;
    }
    .author img {
        height: 100%;
        border-radius: 50%;
    }
    .author {
        height: 2em;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-left: -5px;
    }
    .author > * {
        padding: 0 5px;
    }
</style>