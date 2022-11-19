import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
import Navigation from '../pages/Navigation'
import Cart from './UI/modal/Cart'

export default function Layout() {
    return (
        <>
            <Header />
            <Cart/>
            <Outlet />
            <Footer />
        </>
    )
}
