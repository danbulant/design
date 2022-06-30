<script>
    export var href;
</script>

<a {href} class="button" on:click>
    <div>
        <slot />
    </div>
</a>
    
<style>
    .button {
        max-width: 800px;
        position: relative;
        font-size: clamp(1rem, 4vh - 0.2rem, 1.5rem);
        background: url("/screenshots/heaventaker/btnmiddle.png");
        background-size: auto 100%;
        background-repeat: repeat-x;
        padding: 5px 5px;
        text-align: center;
        background-position-x: center;
        cursor: pointer;
        opacity: 0.8;
        margin: 15px auto;
        transition: opacity .3s, margin .3s, transform .3s;
    }
    .button > div {
        margin-inline: 3em;
        display: inline-block;
    }
    .button:before {
        content: "";
        height: 1.72em;
        width: 2.56em;
        background: url("/screenshots/heaventaker/btnstart.png");
        background-size: contain;
        left: 0;
        top: 0;
        position: absolute;
    }
    .button:after {
        content: "";
        height: 1.72em;
        width: 2.56em;
        background: url("/screenshots/heaventaker/btnstart.png");
        background-size: contain;
        right: 0;
        top: 0;
        position: absolute;
        transform: scaleX(-1);
    }
    .button:first-child:hover, .button:first-child:focus {
        margin-top: 15px;
    }
    .button:hover, .button:focus {
        outline: none;
        opacity: 1;
        margin-top: 15px;
        margin-bottom: 15px;
        transform: scale(1.2);
    }
    .button.button:last-child {
        margin-bottom: 0;
    }
</style>