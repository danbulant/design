/**
 * @type {import("@sveltejs/kit").RequestHandler}
 */
export async function GET(req) {
    const allPostFiles = import.meta.glob('../../posts/**/*.md');

    const allPosts = await Promise.all(
        Object.entries(allPostFiles).map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            let postPath = path.slice(2, -3);
            if(postPath.endsWith('/+page')) postPath = postPath.slice(0, -6);
            return {
                ...metadata,
                path: postPath,
            };
        })
    );

    allPosts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    });

    return new Response(JSON.stringify(allPosts.filter(t => new Date(t.date) < Date.now())), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}