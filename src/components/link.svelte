<script>
    export var colored = true;
</script>

<span>
    <a {...$$restProps} class:colored>
        <slot />
    </a>
</span>
    
<style>
    *, *:after, *:before {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    * {
        margin:0;
        padding:0;
        border:0 none;
        position: relative;
        outline: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    a:hover {
        text-decoration: none;
    }
    .colored {
        color: #e0a500;
    }
    a.colored:before {
        background: #e0a500;
    }
    a:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -2px;
        left: 0;
        background: black;
        visibility: hidden;
        border-radius: 5px;
        transform: scaleX(0);
        opacity: 0.1;
        transition: .25s linear, .4s opacity;
    }
    a:hover:before,
    a:focus:before {
        visibility: visible;
        opacity: 1;
        transform: scaleX(1);
    }


    @keyframes hover-v {
        0% {
            transform: scaleX(0);
            height: 5px;
        }
        45% {   
            transform: scaleX(1.05);
            height: 5px;
        }
        55% {
            height: 5px;
        }
        100% {
            transform: scaleX(1.05);
            height: 3.8rem;
        }
    }
    @keyframes no-hover-v {
        0% {
            transform: scaleX(1.05);
            height: 3.8rem;
        }
        45% {
            height: 5px;
        }
        55% {   
            transform: scaleX(1.05);
            height: 5px;
            opacity: 1;
        }
        
        100% {
            transform: scaleX(0);
            height: 5px;
            opacity: .02;
        }
    }
</style>