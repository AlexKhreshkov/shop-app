import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Cart from './UI/modal/Cart'

export default function Layout() {
    return (
        <>
            <Header />
            <Cart />
            <Outlet />
            <Footer />
        </>
    )
}
