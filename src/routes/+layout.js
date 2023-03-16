
/** @type {import('./$types').PageLoad} */
export const load = async ({ url }) => {
    return {
        url: url.pathname
    }
};

export const prerender = true
