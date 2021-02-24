<script>
    import darkmode from "../stores/darkmode";
</script>

<div class="contact" class:dark={$darkmode}>
    <div class="address">Prague, Czech Republic</div>
    <a href="mailto:danbulant@danbulant.eu" target="_blank">danbulant@danbulant.eu</a>
    <div class="profiles">
        <a href="https://github.com/danbulant" target="_blank">
            <div class="github" title="GitHub">
                <img src="/github.png" alt="Github Icon" draggable={false}>
                <span>danbulant</span>
            </div>
        </a>
        <a href="https://discord.gg/EgBGYmA" target="_blank">
            <div class="discord" title="Discord">
                <img src="/discord.png" alt="Discord Icon" draggable={false}>
                <span>TechmandanCZ#0135</span>
            </div>
        </a>
    </div>
</div>

<style>
    .contact {
        text-align: center;
        margin: 120px 0;
    }
    .address {
        color: #202020d5;
    }
    .dark .address {
        color: rgba(191, 191, 191, 0.835);
    }
    .contact > a {
        color: #202020;
        font-size: 36px;
        font-weight: 500;
        margin: 20px 0;
        display: block;
        font-size: max(min(36px, 4vw), 23px);
    }
    .dark.contact > a {
        color: rgb(191, 191, 191);
    }
    .profiles {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2em;
    }
    .profiles a {
        height: 100%;
    }
    .profiles a div {
        height: 100%;
        display: flex;
        align-items: center;
    }
    .profiles a div span {
        padding: 0 5px;
    }
    .profiles a:hover {
        text-decoration: none;
    }
    img {
        height: 100%;
    }
    .github {
        color: #333333;
    }
    .dark .github {
        color: rgb(191, 191, 191);
    }
    .discord {
        color: #7289DA;
    }
</style>