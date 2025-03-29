import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const response = await fetch("/api/posts.json");
    if(!response.ok) {
        throw error(response.statusText, response.status);
    }

    return response.json();
}