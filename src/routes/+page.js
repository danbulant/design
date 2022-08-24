
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    return {
        posts: await fetch("/api/posts.json").then(t => t.json())
    };
}