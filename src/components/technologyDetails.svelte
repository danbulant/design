<script>
    export var selected = true;

    var shouldClose = true;
    /**
     * @param {MouseEvent} e
     */
    function close(e) {
        if(e.target.href) return;
        if(shouldClose) selected = null;
    }
</script>

<div class="dialog" class:selected on:mousedown={() => shouldClose = true} on:mousemove={() => shouldClose = false} on:mouseup={close}>
    <div class="main">
        {#if selected === "typescript"}
            <h2>Typescript</h2>
            <p><a href="https://typescriptlang.org">Typescript</a> prevents bugs and makes it easier to develop new functionality, as good IDEs will show types without having to go through documentation.</p>
            <p>Most of my new projects use Typescript. And those that don't have native typescript have types, like for example <a href="https://github.com/iceproductions/Commando">Commando</a>.</p>
            <p>Typescript has great integration with Deno, so whenever I use Deno for my scripts, I also use Typescript. An example can be found <a href="https://github.com/danbulant/colors">in this repository</a>.</p>
            <p>More information about Typescript can be found <a href="https://typescriptlang.org">here</a>.</p>
        {:else if selected === "rust"}
            <h2>Rust</h2>
            <p><a href="https://rust-lang.org">Rust</a> is a low-level memory-safe programming language by Mozilla. It has the speed of C and memory safety of high level languages (like Javascript).</p>
            <p>I wanted to learn a low-level programming language to find out more about how computers work. I looked into multiple languages, but Rust seemed the best choice, as it's a low-level language with automatic memory handling.</p>
            <p>To test out my knowledge, I tried to create a simple <a href="https://github.com/danbulant/rush">shell</a>, and although I didn't finish it because I found out I was just reinventing the wheel (<a href="https://fishshell.com">Fish shell</a> in this case), I made great progress (it parses essentially everything normal shell should, and supports basic command running).</p>
        {:else if selected === "x11"}
            <h2>X11</h2>
            <p>I love reading about how computers work, especially in case of Linux.</p>
            <p>X server (using X11 protocol) is currently the most used window handler in Linux.</p>
            <p>I tried writing my own simple Window Manager in Javascript, which posed additional challenge, as X11 doesn't have official implementation for Node.JS. For the basic communication, I used <a href="https://github.com/sidorares/node-x11">node-x11</a>, which implements only the basic X11 protocol without any abstraction (like what <code>xlib</code> does for C).</p>
            <p>The code for the simple Window Manager (mostly an experiment) can be found <a href="https://github.com/danbulant/test-x">here</a>. This project also uses Vagrant by HashiCorp.</p>
        {:else if selected === "cs"}
            <h2>C#</h2>
            <p>I'm learning C# at my school, in addition to learning Unity and looking into the osu!framework.</p>
            <p>Currently, I don't have any project worth sharing.</p>
        {:else if selected === "git"}
            <h2>Git + GitHub</h2>
            <p>I use Git version control system for all of my projects, even if I don't upload them to GitHub. Most of my projects can be found on GitHub.</p>
            <p>My GitHub profile is @<a href="https://github.com/danbulant">danbulant</a>.</p>
        {:else if selected === "docker"}
            <h2>Docker + Docker compose + Docker desktop</h2>
            <p></p>
        {/if}
    </div>
    <div class="bottom">
        Click to close.
    </div>
</div>

<style>
    .dialog {
        position: absolute;
        display: flex;
        flex-direction: column;
        transition: opacity .3s, transform .3s;
        opacity: 0;
        transform: scale(0.8);
        pointer-events: none;
        backdrop-filter: blur(25px);
        padding: 8px 16px;
        margin: 0;
        top: 0;
        left: 0;
        margin: auto;
        height: 100%;
        width: 100%;
        z-index: 10;
        background: rgba(0,0,0,0.1);
        border-radius: 15px;
        cursor: pointer;
    }
    h2 {
        margin-top: 0;
        margin-block-start: 0;
    }
    .main {
        flex-grow: 1;
    }
    .bottom {
        color: gray;
    }
    :global(.dark .dialog a) {
        color: pink;
    }
    a {
        color: rgb(255, 102, 128);
    }
    :global(.dark .dialog) {
        background: rgba(255,255,255,0.2);
    }
    .dialog.selected {
        pointer-events: all;
        opacity: 1;
        transform: scale(1);
    }
</style>