import React from 'react'
import { useState, useEffect } from 'react'
import { getCategories, getItems, getItemsData, getPosts } from '../API/getData'
import BestSellers from '../components/BestSellers'
import { useFetching } from '../hooks/useFetching'
import Services from '../components/Services'
import { Loader } from '../components/UI/loader/Loader'

export default function MainPage() {

    const [items, setItems] = useState([])
    const [fetchItems, isLoading, error] = useFetching(async () => {
        let fetchedItems = await getItems()
        setItems(fetchedItems)
    }
    )

    useEffect(() => {
        fetchItems()
    }, [])

    console.log(items);
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
                    <BestSellers items={items} />
                    <Services />
                </div>
            }
        </div>

    )
}