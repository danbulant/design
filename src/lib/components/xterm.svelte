<script>
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