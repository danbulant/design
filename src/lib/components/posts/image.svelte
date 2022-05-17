<script>
    export var src;
    export var alt;
    export var title;
</script>

<figure>
    <img {src} {alt} {title} name="content">
    <figcaption>
        <slot />
    </figcaption>
</figure>

<style>
    img {
        border-radius: 5px;
    }
    figcaption {
        text-align: center;
        color: gray;
        width: 100%;
        display: inline-block;
    }
</style>