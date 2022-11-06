import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { getCategories, getComments, getItem, getItems, getUserData, getUsersProfilesPic } from '../API/getData'
import { useFetching } from '../hooks/useFetching'

export const DataContext = createContext(null)
export const DataProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [authToken, setAuthToken] = useState(null)
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setCartStatus] = useState(false)
    const [comments, setComments] = useState([])
    const [cartItemsQuantity, setCartItemsQuantity] = useState(new Map())
    // const [itemComments, setItemComments] = useState([])
    const [usersProfilesPic, setUsersProfilesPic] = useState([])


    const [fetchItems, isLoading, error] = useFetching(async () => {
        const fetchedItems = await getItems()
        setItems(fetchedItems)
        const fetchedCategories = await getCategories()
        setCategories(fetchedCategories)
        const fetchedComments = await getComments()
        setComments(fetchedComments)
        const fetchedUsersProfiles = await getUsersProfilesPic()
        setUsersProfilesPic(fetchedUsersProfiles)
        defineUser()
    })

    const defineUser = async () => {
        if (localStorage.getItem('authToken')) {
            const token = localStorage.getItem('authToken')
            setAuthToken(token)
            const userData = await getUserData(token)
            setUser(userData)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [])

    useEffect(() => {
        defineUser()
    }, [authToken])

    useEffect(() => {
        async function getcomments() {
            const fetchedComments = await getComments()
            setComments(fetchedComments)
        }
        getcomments()
    }, [comments])

    async function signUp(newUser, redirectCallBack) {

        const sigUpResponse = await fetch('http://127.0.0.1:8000/api/auth/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        let EmailUsernameId = await sigUpResponse.json()
        const getTokenResponse = await fetch('http://127.0.0.1:8000/api/auth/token/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'password': newUser.password,
                'username': newUser.username,
            }),
        })
        const token = await getTokenResponse.json()
        setAuthToken(token.auth_token)
        localStorage.setItem('authToken', token.auth_token)
        redirectCallBack()
    }


    const signOut = (redirectCallBack) => {
        fetch('http://127.0.0.1:8000/api/auth/token/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`,
            },
        })
        setAuthToken(null)
        localStorage.removeItem('authToken')
        setUser(null)
        redirectCallBack()
    }

    const addToCart = (itemSlug) => {
        let item
        for (let i of items) {
            if (i.slug === itemSlug) {
                item = i
                break
            }
        }
        if (!cartItems.includes(item)) {
            setCartItems([...cartItems, item])
            setCartItemsQuantity(new Map(cartItemsQuantity.set(item, 1)))
        }
    }

    const removeFromCart = (itemSlug) => {
        let item
        for (let i of cartItems) {
            if (i.slug === itemSlug) {
                item = i
                break
            }
        }
        setCartItems(cartItems.filter((element) => element !== item))
        setCartItemsQuantity(new Map(cartItemsQuantity.delete(item)))
    }

    const getCartTotal = (cartItemsQuantity) => {
        let sum = 0
        for (let entries of cartItemsQuantity) {
            let price = entries[0].price
            sum += price * entries[1]
        }
        return sum
    }


    const value = { items, setItems, isLoading, categories, setCategories, user, setUser, authToken, setAuthToken, signUp, signOut, cartItems, setCartItems, addToCart, isCartOpen, setCartStatus, removeFromCart, cartItemsQuantity, setCartItemsQuantity, getCartTotal, comments, usersProfilesPic, setComments }

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}   