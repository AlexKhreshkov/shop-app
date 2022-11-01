import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { getCategories, getItem, getItems } from '../API/getData'
import { useFetching } from '../hooks/useFetching'

export const DataContext = createContext(null)
export const DataProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setCartStatus] = useState(false)

    const [fetchItems, isLoading, error] = useFetching(async () => {
        let fetchedItems = await getItems()
        setItems(fetchedItems)
        let fetchedCategories = await getCategories()
        setCategories(fetchedCategories)
    })

    useEffect(() => {
        fetchItems()
    }, [])


    const signIn = (newUser, redirectCallBack) => {
        setUser(newUser)
        redirectCallBack()
    }
    const signOut = (redirectCallBack) => {
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
            console.log(item);
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
    }

    const value = { items, setItems, isLoading, categories, setCategories, user, signIn, signOut, cartItems, setCartItems, addToCart, isCartOpen, setCartStatus, removeFromCart }

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}   