import { error } from "@sveltejs/kit";
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
    let allPosts = [];
    let allNotes = [];
    try {
        const allPostFiles = import.meta.glob('../../posts/**/*.md');
        const allNotesFiles = import.meta.glob('../../notes/**/*.md');
    
        allPosts = (await loadAll(allPostFiles)).filter(t => !t.draft);
        allNotes = (await loadAll(allNotesFiles));
    
        allPosts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        });
        allNotes.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        });
    } catch (e) {
        console.error("Error loading posts or notes:", e);
        return json({
            message: "Failed to load posts or notes."
        }, {
            status: 500
        })
    }

    return json({
        posts: allPosts.filter(t => new Date(t.date) < Date.now()),
        notes: allNotes
    })
}

export const prerender = true;
