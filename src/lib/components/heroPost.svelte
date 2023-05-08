<script>
    import { DateTime } from "luxon";

    // this component used to support authors and categories, removed because I didn't use them.

    export var bigThumbnail;
    export var date;
    export var title;
    export var description;
    export var path;

    let dt = DateTime.fromISO(date);
    $: dt = DateTime.fromISO(date);
</script>

<a href={path} class="post select-none cursor-pointer hover:no-underline transform transition duration-300 active:scale-95 block">
    {#if bigThumbnail}
        <img src={bigThumbnail} styles="width: 800px; height: 400px;" alt="Thumbnail" class="thumbnail" draggable={false}>
    {/if}
    <div class="data">
        <h3>{title}</h3>
        <p>{description}</p>
        <div class="author">
            <span class="date">{dt.toRelativeCalendar()} ({dt.toLocaleString(DateTime.DATE_FULL)})</span>
        </div>
    </div>
</a>

<style>
    .thumbnail {
        border-radius: 5px;
        width: 100%;
    }
    /* .categories {
        color: #0054E2;
    } */
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
    .author {
        color: gray;
    }
    .author > * {
        padding: 0 5px;
    }
    /* .author img {
        height: 100%;
        border-radius: 50%;
        padding-right: 5px;
    } */
</style>