import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
import Navigation from '../pages/Navigation'

export default function Layout() {
    return (
        <>
            <Header />
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}
