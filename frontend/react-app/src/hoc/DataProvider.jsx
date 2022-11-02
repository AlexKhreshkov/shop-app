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
    const [cartItemsQuantity, setCartItemsQuantity] = useState(new Map())

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


    const value = { items, setItems, isLoading, categories, setCategories, user, signIn, signOut, cartItems, setCartItems, addToCart, isCartOpen, setCartStatus, removeFromCart, cartItemsQuantity, setCartItemsQuantity, getCartTotal }

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}   