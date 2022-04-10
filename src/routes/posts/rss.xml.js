/**
 * @type {import("@sveltejs/kit").RequestHandler}
 */
export async function get(req) {
    const allPostFiles = import.meta.glob('../posts/**/*.md');

    const allPosts = await Promise.all(
        Object.entries(allPostFiles).map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            let postPath = path.slice(2, -3);
            if(postPath.endsWith('/index')) postPath = postPath.slice(0, -6);
            return {
                ...metadata,
                path: postPath,
            };
        })
    );

    allPosts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    });

    return {
        body: `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
    <title>Blog - Daniel Bulant</title>
    <description>My personal blog about work, programming and fun stuff.</description>
    <link>https://danbulant.eu/posts</link>
    <copyright>2022 Daniel Bulant</copyright>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>180</ttl>

    ${allPosts.map(t => `
    <item>
        <title>${t.title}</title>
        <description>${t.description}</description>
        <link>https://danbulant.eu${t.path}</link>
        <pubDate>${new Date(t.date).toUTCString()}</pubDate>
        <guid>${t.path}</guid>
    </item>`).join("\n")}

</channel>
</rss>`
    };
}