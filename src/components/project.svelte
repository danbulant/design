<script>
    export var title;
    export var left = false;
</script>

<article>
    <div class="line" class:left>
        <div class="info">
            <h3>{title}</h3>
            <p><slot name="description" /></p>
            <div class="actions">
                <slot name="actions" />
            </div>
        </div>
        <div class="preview">
            <slot name="preview" />
        </div>
    </div>
</article>

<style>
    .line {
        display: flex;
        justify-content: space-between;
        max-width: 720px;
        width: 100%;
        margin: auto;
    }
    .info {
        width: calc(100% - 192px);
        flex-grow: 1;
        flex-shrink: 0;
    }
    .left .preview {
        float: left;
    }
    .left .info {
        float: right;
    }
    .preview {
        width: 50%;
        flex-shrink: 1;
        flex-grow: 0;
    }
</style>