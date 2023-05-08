<script>
    import { DateTime } from "luxon";

    // this component used to support authors and categories, removed because I didn't use them.
    export var thumbnail;
    export var date;
    export var title;
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

<a href={path} class="post transition duration-300 block transform active:scale-95" class:grayscale on:mouseenter={mouseenter} on:mouseleave={mouseleave}>
    {#if thumbnail}
        <img src={thumbnail} alt="Thumbnail" class="thumbnail" draggable={false}>
    {:else}
        <div class="thumbnail"></div>
    {/if}
    <div class="data">
        <h4>{title}</h4>
        <p>{description}</p>
        <div class="author">
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
        cursor: pointer;
        user-select: none;
        width: 100%;
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .data {
        flex-grow: 1;
    }
    @media (max-width: 768px) {
        img.thumbnail {
            width: 20vw;
        }
    }
    h4 {
        margin: 5px 0;
        font-weight: 400;
        font-size: 22px;
    }
    .thumbnail {
        width: 150px;
        height: 150px;
        margin-right: 15px;
        margin-top: 5px;
        object-fit: cover;
        box-shadow: 0 0 5px rgb(145, 145, 145);
        border-radius: 5px;
    }
    :global(.dark) .thumbnail {
        box-shadow: 0 0 5px rgb(0, 0, 0);
    }
    img {
        height: 100%;
    }
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