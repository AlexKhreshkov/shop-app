import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const DataContext = createContext(null)
export const DataProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const signIn = (newUser, redirectCallBack) => {
        setUser(newUser)
        redirectCallBack()
    }
    const signOut = (redirectCallBack) => {
        setUser(null)
        redirectCallBack()
    }

    const value = { user, signIn, signOut }

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}   