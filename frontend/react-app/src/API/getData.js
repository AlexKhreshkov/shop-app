import axios from 'axios'

const base_url = 'http://127.0.0.1:8000/api'

export async function getItems() {
    const response = await axios.get(`${base_url}/items/`)
    return response.data
}

export async function getCategories() {
    const response = await axios.get(`${base_url}/categories/`)
    return response.data
}

export async function getItem(itemSlug) {
    const response = await axios.get(`${base_url}/items/${itemSlug}/`)
    return response.data
}