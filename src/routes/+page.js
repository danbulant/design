
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    return await fetch("/api/posts.json").then(t => t.json())
}