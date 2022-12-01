import { base_url } from "./getData"

export async function updateItemLikes(newItemLikes, slug, authToken) {
    fetch(`${base_url}/items/${slug}/update/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
        },
        body: JSON.stringify({
            likes: newItemLikes,
        }),
    })
}

