import { json } from "@sveltejs/kit";

function loadAll(files) {
    return Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            let postPath = path.slice(2, -3);
            if(postPath.endsWith('/+page')) postPath = postPath.slice(0, -6);
            return {
                ...metadata,
                path: postPath,
            };
        })
    )
}

/**
 * @type {import("@sveltejs/kit").RequestHandler}
 */
export async function GET(req) {
    const allPostFiles = import.meta.glob('../../posts/**/*.md');
    const allNotesFiles = import.meta.glob('../../notes/**/*.md');

    const allPosts = (await loadAll(allPostFiles)).filter(t => !t.draft);
    const allNotes = (await loadAll(allNotesFiles));

    allPosts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    });

    return json({
        posts: allPosts.filter(t => new Date(t.date) < Date.now()),
        notes: allNotes
    })
}

export const prerender = true;
