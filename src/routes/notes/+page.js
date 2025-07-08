import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const response = await fetch("/api/posts.json");
    if(!response.ok) {
        console.log(response)
        throw error(response.status, await response.text());
    }

    return response.json();
}