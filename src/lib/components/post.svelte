<script>
    export var thumbnail;
    export var categories = [];
    export var author;
    export var date;
    export var title;
    export var authorIcon;
    export var currentHover;
    export var path;
    
    var grayscale = false;
    $: grayscale = currentHover && currentHover !== title;

    function mouseenter() {
        currentHover = title;
    }
    function mouseleave() {
        if(currentHover == title) currentHover = null;
    }
</script>

<a href={path} class="post" class:grayscale on:mouseenter={mouseenter} on:mouseleave={mouseleave}>
    <img src={thumbnail} height="256" width="256" alt="Thumbnail" class="thumbnail" draggable={false}>
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
</a>

<style>
    .grayscale {
        filter: grayscale(100%) blur(2px);
    }
    a.post:hover {
        text-decoration: none;
    }
    .post {
        transition: filter .3s;
        cursor: pointer;
        user-select: none;
        width: 100%;
        height: 150px;
        padding: 10px 0;
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