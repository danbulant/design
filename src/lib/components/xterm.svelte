<script>
    // not used anywhere as of now.
    // planned showcase of some other projects (possibly WASM compiled rust shell, or just for fun)
    import { Terminal } from 'xterm';
    import "xterm/css/xterm.css";

    const term = new Terminal();
    var div;
    export var terminal;

    onMount(() => {
        term.open(div);
        terminal = term;
    });
</script>

<div bind:this={div}></div>