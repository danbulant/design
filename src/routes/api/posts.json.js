import { DateTime } from "luxon";

export async function get() {
    const allPostFiles = import.meta.glob('../posts/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const postPath = path.slice(2, -3)

            return {
                ...metadata,
                relDate: DateTime.fromISO(metadata.date).toRelativeCalendar(),
                path: postPath,
            }
        })
    )

    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })

    return {
        body: sortedPosts
    }
}