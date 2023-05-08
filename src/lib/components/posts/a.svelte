<script>
    export var href;
    export var title;

    $: domain = new URL(href, typeof window !== "undefined" && window.location || "https://danbulant.eu").hostname;

    let blacklist = [
        "localhost",
        "danbulant.eu",
        "danbulant.cloud",
        typeof window !== "undefined" && window.location.hostname
    ];

    let newtitle = "";
    let options = new Map;

    // Faviconkit, a free service that provides favicons for any domain
    $: defaultfavicon = `https://filthy-cyan-otter.faviconkit.com/${domain}/32`;
    let favicon = defaultfavicon;

    $: {
        // extract key=value options from title
        if(title && title.includes("=")) {
            let titleparts = title.split("=");
            for (let i = 0; i < titleparts.length; i+=2) {
                options.set(titleparts[i], titleparts[i+1]);
            }
            newtitle = options.get("title") || "";
            favicon = options.get("favicon") || defaultfavicon;
        } else {
            newtitle = title;
            favicon = defaultfavicon;
        }
    }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...$$props} title={newtitle}>
    {#if !blacklist.includes(domain) && favicon}
        <img src="{favicon}" width=32 height=32 alt="">
    {/if}
    <span>
        <slot />
    </span>
</a>

<style>
    img {
        height: 1em;
        width: 1em;
        display: inline;
    }
    a {
        text-decoration: none;
    }
    span {
        text-decoration: underline;
    }
</style>