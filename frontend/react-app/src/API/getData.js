
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


export async function checkUserCart(authToken, userData) {
    const cartsResponse = await fetch(`${base_url}/carts/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
        },
    })
    const carts = await cartsResponse.json()
    let userCart = false
    for (let cart of carts) {
        if (cart.user === userData.id) {
            userCart = cart
        }
    }
    return userCart
}

export async function getUserCartItem(authToken, userCart, items) {
    const CartItemsResponse = await fetch(`${base_url}/carts-items/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const CartItems = await CartItemsResponse.json()
    return CartItems
}


export async function getUserCartItemQuantity(authToken, userCart, items) {
    const CartItems = await getUserCartItem()
    let cartItemsQuantity = new Map()
    for (let CartItem of CartItems) {
        if (CartItem.cart === userCart.id) {
            let itemFullInfo
            for (let item of items) {
                if (item.id === CartItem.item) {
                    itemFullInfo = item
                    break
                }
            }
            cartItemsQuantity.set(itemFullInfo, CartItem.quantity)
        }
    }
    return cartItemsQuantity
}


export async function createUserCart(authToken, userData) {
    const userCartResponse = await fetch(`${base_url}/carts/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
        },
        body: JSON.stringify({
            user: userData.id,
            total_cost: 0,
        })
    })
    const userCart = await userCartResponse.json()
    return userCart
}

export async function addItemToUserCart(authToken, userCart, item) {
    fetch(`${base_url}/carts-items/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
        },
        body: JSON.stringify({
            item: item.id,
            cart: userCart.id,
            quantity: 1,
        })
    })
}

export async function deleteUserItemFromCart(authToken, item, userCart) {

    const CartItems = await getUserCartItem()
    for (let cartItem of CartItems) {
        if (cartItem.cart === userCart.id) {
            if (cartItem.item === item.id) {
                fetch(`${base_url}/carts-items/${cartItem.id}/`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${authToken}`,
                    },
                })
            }
        }
    }
}