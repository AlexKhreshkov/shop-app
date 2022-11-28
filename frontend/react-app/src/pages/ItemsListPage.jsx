import React, { useState, useMemo, useEffect } from 'react'
import ItemListCategories from '../components/ItemsListPageComponents/ItemListCategories'
import ItemListItem from '../components/ItemsListPageComponents/ItemListItem'
import Items from '../components/ItemsListPageComponents/Items'
import WhiteLine100 from '../components/UI/lines/WhiteLine100'
import { Loader } from '../components/UI/loader/Loader'
import BigSearch from '../components/UI/search/BigSearch'
import ItemsSort from '../components/UI/select/ItemsSort'
import { useData } from '../hooks/useData'
import Navigation from './../components/Navigation'
import BlackLine from '../components/UI/lines/BlackLine'


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

    const filterByCategories = useMemo(() => {
        return filteredByPriceAndsearchedAndSortedItems.filter(item => selectedCategories[item.category_name])
    }, [selectedCategories, filteredByPriceAndsearchedAndSortedItems])

    useEffect(() => {
        let obj = {}
        for (let category of categories) {
            obj[category.name] = true
        }
        changeSelectedCategories(obj)
    }, [categories])

    return (
        <main className="main-content" >
            {isLoading
                ?
                <div className='loader'><Loader /></div>
                :
                <>
                    <Navigation />
                    <div className="main">
                        <BlackLine />
                        <Items>
                            <ItemListCategories
                                categories={categories}
                                selectedCategories={selectedCategories}
                                changeSelectedCategories={changeSelectedCategories}
                                priceForm={priceForm}
                                setPriceForm={setPriceForm}
                            />
                            <div className="items__content">
                                <div className="items__header">
                                    <div className="items__header-showing-results">
                                        Showing {filterByCategories.length} results of {items.length}
                                    </div>
                                    <ItemsSort
                                        onChange={e => setSelectedSort(e.target.value)}
                                    />
                                </div>
                                <WhiteLine100 />
                                <div className="items__search">
                                    <BigSearch
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder='Search...'
                                    />
                                </div>
                                {
                                    filterByCategories.map((item) =>
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
                                {filterByCategories.length > 1
                                    ?
                                    <></>
                                    :
                                    <div className='noItems'>No items</div>
                                }
                            </div>
                        </Items>
                    </div>
                </>
            }
        </main >
    )
}
