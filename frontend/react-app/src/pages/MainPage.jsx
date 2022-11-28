import React from 'react'
import { useState, useEffect } from 'react'
import BestSellers from '../components/MainPageComponents/BestSellers'
import Intro from '../components/MainPageComponents/Intro'
import Services from '../components/MainPageComponents/Services'
import { Loader } from '../components/UI/loader/Loader'
import { useData } from '../hooks/useData'
import { setLast3Items } from '../utils/utls'
import Navigation from './../components/Navigation'



export default function MainPage() {
    const { items, isLoading } = useData()
    const [mainPageItems, setMainPageItems] = useState([])

    useEffect(() => {
        const mainPageItems = setLast3Items(items)
        setMainPageItems(mainPageItems)
    }, [items])

    return (
        <main className="main-content">
            {isLoading
                ?
                <div className='loader'><Loader /></div>
                :
                <>
                    <Navigation />
                    <div className="main">
                        <Intro />
                        <BestSellers items={mainPageItems} />
                        <Services />
                    </div>
                </>
            }
        </main>
    )
}