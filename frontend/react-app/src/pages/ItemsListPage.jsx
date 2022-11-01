import React from 'react'
import { useState, useEffect } from 'react'
import { getCategories, getItems } from '../API/getData'
import ItemListCategories from '../components/ItemListCategories'
import ItemListItem from '../components/ItemListItem'
import { Loader } from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching'
export default function ItemsListPage() {
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [fetchItems, isLoading, error] = useFetching(async () => {
        let fetchedItems = await getItems()
        setItems(fetchedItems)
        let fetchedCategories = await getCategories()
        setCategories(fetchedCategories)
    }
    )

    useEffect(() => {
        fetchItems()
    }, [])
    console.log(items);


    return (
        <div className="main-content" >
            {isLoading
                ?
                <div style={{ display: "flex", justifyContent: 'center' }}><Loader /></div>
                :
                <div className="main">
                    <div className="after-nav hr-black-line"></div>
                    <div className="items">
                        <div className="items__wrapp">
                            <ItemListCategories categories={categories} />
                            <div className="items__content">
                                <div className="items__header">
                                    <div className="items__header-showing-results">Showing 1–12 of {items.length} results</div>
                                    <div className="items__header-sort">
                                        <select className="" id="">
                                            <option value="">Sort by newness</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="items__line100 line100"></div>
                                {
                                    items.map((item) =>
                                        <ItemListItem
                                            key={item.id}
                                            title={item.title}
                                            slug={item.slug}
                                            body={item.body}
                                            price={item.price}
                                            category={item.category}
                                            image={item.image}
                                            availableCount={item.available_count}
                                            likes={item.likes}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}
