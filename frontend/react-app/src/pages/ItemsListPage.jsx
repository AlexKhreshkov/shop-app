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
                return [...items].sort((a, b) => b.likes - a.likes)
            }
        }
        return items
    }, [selectedSort, items])

    const searchedAndSortedItems = useMemo(() => {
        return sortedItems.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedItems])

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
                                />
                                <div className="items__content">
                                    <div className="items__header">
                                        <div className="items__header-showing-results">Showing {searchedAndSortedItems.length} results of {items.length}</div>
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
                                        searchedAndSortedItems.map((item) =>
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
                                                likes={item.likes}
                                            />
                                        )
                                    }
                                    {searchedAndSortedItems.length > 1
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
