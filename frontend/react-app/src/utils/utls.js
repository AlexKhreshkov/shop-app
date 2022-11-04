
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

export function getCategoryItemCount(items, categoryId) {
    let count = 0
    for (let item of items) {
        if (item.category === categoryId) {
            count++
        }
    }
    return count
}

export function setTrueStateCategories(categories) {
    let obj = {}
    for (let category of categories) {
        obj[category.name] = false
    }
    return obj
}