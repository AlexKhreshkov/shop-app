
export function setLast3Items(items) {
    return items.filter((item, index) => index > items.length - 4)
}


export function searchItemBySlug(slug, items, callback) {
    for (let item of items) {
        if (item.slug === slug) {
            return item
        }
    }
}
