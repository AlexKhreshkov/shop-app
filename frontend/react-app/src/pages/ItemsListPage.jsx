import React, { useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import ItemListCategories from '../components/ItemListCategories'
import ItemListItem from '../components/ItemListItem'
import { Loader } from '../components/UI/loader/Loader'
import BigSearch from '../components/UI/search/BigSearch'
import ItemsSort from '../components/UI/select/ItemsSort'
import { useData } from '../hooks/useAuth'
import Navigation from './Navigation'

export default function ItemsListPage() {

    const { items, isLoading, categories } = useData()
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategories, changeSelectedCategories] = useState(true)

    const [priceForm, setPriceForm] = useState({
        min: 1,
        max: 99999,
    })

    const sortedItems = useMemo(() => {
        if (selectedSort) {
            if (selectedSort === 'id') {
                return [...items].sort((a, b) => a.id - b.id)
            }
            if (selectedSort === 'price_descending') {
                return [...items].sort((a, b) => b.price - a.price)
            }
            if (selectedSort === 'price_increase') {
                return [...items].sort((a, b) => a.price - b.price)
            }
            if (selectedSort === 'likes') {
                return [...items].sort((a, b) => b.likes.length - a.likes.length)
            }
        }
        return items
    }, [selectedSort, items])

    const searchedAndSortedItems = useMemo(() => {
        return sortedItems.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedItems])

    const filteredByPriceAndsearchedAndSortedItems = useMemo(() => {
        return searchedAndSortedItems.filter((item) => item.price <= +priceForm.max && item.price >= +priceForm.min)
    }, [priceForm, searchedAndSortedItems])

    // const filterByCategories = useMemo(() => {
    //     return filteredByPriceAndsearchedAndSortedItems.filter(item => selectedCategories[item.category])
    // }, [selectedCategories, filteredByPriceAndsearchedAndSortedItems])

    
    

    useEffect(() => {
        let obj = {}
        for (let category of categories) {
            obj[category.name] = false
        }
        changeSelectedCategories(obj)
    }, [categories])

    return (
        <div className="main-content" >
            {isLoading
                ?
                <div style={{ display: "flex", justifyContent: 'center', marginTop: '100px' }}><Loader /></div>
                :
                <>
                    <Navigation />
                    <div className="main">
                        <div className="after-nav hr-black-line"></div>
                        <div className="items">
                            <div className="items__wrapp">
                                <ItemListCategories
                                    categories={categories}
                                    selectedCategories={selectedCategories}
                                    changeSelectedCategories={changeSelectedCategories}
                                    priceForm={priceForm}
                                    setPriceForm={setPriceForm}
                                />
                                <div className="items__content">
                                    <div className="items__header">
                                        <div className="items__header-showing-results">Showing {filteredByPriceAndsearchedAndSortedItems.length} results of {items.length}</div>
                                        <ItemsSort
                                            onChange={e => setSelectedSort(e.target.value)}
                                        />
                                    </div>
                                    <div className="items__line100 line100"></div>
                                    <div className="items__search">
                                        <BigSearch
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder='Search...'
                                        />
                                    </div>
                                    {
                                        filteredByPriceAndsearchedAndSortedItems.map((item) =>
                                            <ItemListItem
                                                key={item.id}
                                                id={item.id}
                                                title={item.title}
                                                slug={item.slug}
                                                body={item.body}
                                                price={item.price}
                                                category_name={item.category_name}
                                                image={item.image}
                                                availableCount={item.available_count}
                                                likes={item.likes.length}
                                            />
                                        )
                                    }
                                    {filteredByPriceAndsearchedAndSortedItems.length > 1
                                        ?
                                        <></>
                                        :
                                        <div
                                            style={{ textAlign: 'center', fontSize: '30px', marginTop: '30px' }}
                                        >
                                            No items
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div >
    )
}
