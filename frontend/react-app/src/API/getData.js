
export const base_url = 'http://127.0.0.1:8000/api'


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

export async function getUsersProfilesPic() {
    const response = await fetch(`${base_url}/profiles/`)
    let usersProfiles = await response.json()
    return usersProfiles
}

async function getUserInfoByToken(authToken) {
    const userIfnoResponse = await fetch(`${base_url}/auth/users/me/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
        },
    })
    let userIdEmailUsername = await userIfnoResponse.json()
    return userIdEmailUsername
}

export async function getUserData(authToken) {
    let userIdEmailUsername = await getUserInfoByToken(authToken)
    const profileID = userIdEmailUsername.id
    const userProfileResponse = await fetch(`${base_url}/profiles/${profileID}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
        },
    })
    const userProfile = await userProfileResponse.json()
    const userData = { ...userIdEmailUsername, ...userProfile }
    return userData
}

export async function getAllOrders(authToken) {
    const ordersResponse = await fetch(`${base_url}/orders/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
        },
    })
    const orders = await ordersResponse.json()
    return orders
}


export async function getUserOrders(authToken) {
    const orders = await getAllOrders(authToken)
    let userIdEmailUsername = await getUserInfoByToken(authToken)
    return orders.filter(order => order.user_id === userIdEmailUsername.id)
}

export async function getOrdersStatuses(authToken) {
    const statusesResponse = await fetch(`${base_url}/orders-statuses/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
        },
    })
    const statuses = await statusesResponse.json()
    return statuses
}

// export function addLikeToItem(){
    
// }