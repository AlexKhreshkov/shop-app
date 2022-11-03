import axios from 'axios'

const base_url = 'http://127.0.0.1:8000/api'


export async function getItems() {
    const response = await fetch(`${base_url}/items/`)
    let posts = await response.json()
    return posts
}

export async function getCategories() {
    const response = await fetch(`${base_url}/categories/`)
    let categories = await response.json()
    return categories
}

export async function getComments() {
    const response = await fetch(`${base_url}/comments/`)
    let comments = await response.json()
    return comments
}
