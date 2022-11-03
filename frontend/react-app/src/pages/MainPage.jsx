import React from 'react'
import { useState, useEffect } from 'react'
import BestSellers from '../components/BestSellers'
import Services from '../components/Services'
import { Loader } from '../components/UI/loader/Loader'
import { useData } from '../hooks/useAuth'
import { setLast3Items } from '../utils/utls'

export default function MainPage() {
    const { items, isLoading } = useData()
    const [mainPageItems, setMainPageItems] = useState([])

    useEffect(() => {
        const mainPageItems = setLast3Items(items)
        setMainPageItems(mainPageItems)
    }, [items])

    return (
        <div className="main-content">
            {isLoading
                ?
                <div style={{ display: "flex", justifyContent: 'center' }}><Loader /></div>
                :
                <div className="main">
                    <div className="intro">
                        <div className="intro__wrap">
                            <div className="intro__title">Online</div>
                            <div className="intro__subtitle">Shop</div>
                            <div className="intro__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                                dolorem commodi nisi incidunt reiciendis, alias error. Doloremque perspiciatis quidem beatae
                                laborum itaque cumque expedita nesciunt nihil, ipsum officiis impedit commodi.</div>
                            <div className="intro__down-button">
                                <img src="/img/arrow_down.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <BestSellers items={mainPageItems} />
                    <Services />
                </div>
            }
        </div>
    )
}