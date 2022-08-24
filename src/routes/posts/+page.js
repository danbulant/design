
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const response = await fetch("/api/posts.json");

    return {
        posts: response.ok && (await response.json())
    };
}