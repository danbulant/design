<script>
    import darkmode from "$lib/stores/darkmode";
    import { DateTime } from "luxon";

    export var thumbnail;
    // export var categories = [];
    // export var author;
    export var date;
    export var title;
    // export var authorIcon;
    export var currentHover;
    export var path;
    export var description
    
    var grayscale = false;
    $: grayscale = currentHover && currentHover !== title;

    function mouseenter() {
        currentHover = title;
    }
    function mouseleave() {
        if(currentHover == title) currentHover = null;
    }

    let dt = DateTime.fromISO(date);
    $: dt = DateTime.fromISO(date);
</script>

<a href={path} class:dark={$darkmode} class="post" class:grayscale on:mouseenter={mouseenter} on:mouseleave={mouseleave}>
    {#if thumbnail}
        <img src={thumbnail} alt="Thumbnail" class="thumbnail" draggable={false}>
    {:else}
        <div class="thumbnail"></div>
    {/if}
    <div class="data">
        <!-- <div class="categories">
            {#each categories as category}
                <span>{category}</span>
            {/each}
        </div> -->
        <h4>{title}</h4>
        <p>{description}</p>
        <div class="author">
            <!-- <img src={authorIcon} alt="Avatar of author" draggable={false}>
            <span class="spacer">—</span>
            <span class="author">{author}</span>
            <span class="spacer">—</span> -->
            <span class="date">{dt.toRelativeCalendar()} ({dt.toLocaleString(DateTime.DATE_FULL)})</span>
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
        margin: 5px 0;
        font-weight: 400;
        font-size: 22px;
    }
    /* .categories {
        color: #0054E2;
    } */
    .thumbnail {
        width: 150px;
        height: 150px;
        margin-right: 15px;
        margin-top: 5px;
        object-fit: cover;
        box-shadow: 0 0 5px rgb(145, 145, 145);
    }
    .dark .thumbnail {
        box-shadow: 0 0 5px rgb(0, 0, 0);
    }
    img {
        height: 100%;
        border-radius: 5px;
    }
    /* .author img {
        height: 100%;
        border-radius: 50%;
    } */
    .author {
        color: gray;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-left: -5px;
    }
    .author > * {
        padding: 0 5px;
    }
    p {
        margin: 0;
    }
</style>