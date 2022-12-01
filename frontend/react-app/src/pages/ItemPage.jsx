import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useData } from '../hooks/useData'
import { isItemLiked, searchItemBySlug } from '../utils/utls'
import { Loader } from '../components/UI/loader/Loader'
import Navigation from './../components/Navigation'
import BlackLine from '../components/UI/lines/BlackLine'
import ItemWrapp from '../components/ItemPageComponents/ItemWrapp'
import ItemComments from '../components/ItemPageComponents/ItemComments'
import { updateItemLikes } from '../API/modifyData'


export default function ItemPage() {

    const { slug } = useParams()
    const { items, comments, isLoading, user, authToken } = useData()
    const [item, setItem] = useState({})
    const [itemComments, setItemCommets] = useState([])
    const [isLiked, setIsLiked] = useState(null)

    useEffect(() => {
        async function preload() {
            const searchedItem = searchItemBySlug(slug, items)
            setItem(searchedItem)
            setItemCommets([...comments].filter(comment => comment.item_slug === slug))
            setIsLiked(isItemLiked(user, searchedItem) ? true : false)
        }
        preload()
    }, [comments])

    async function addLikeToItem() {
        let newItemLikes
        if (!isLiked) {
            newItemLikes = [...item.likes, user.id]
            setIsLiked(true)
        }
        else {
            newItemLikes = [...item.likes].filter(elem => elem !== user.id)
            setIsLiked(false)
        }
        updateItemLikes(newItemLikes, slug, authToken)
        item.likes = newItemLikes
    }

    return (
        <main className="main-content">
            {isLoading
                ?
                <div className='loader'><Loader /></div>
                :
                <>
                    <Navigation />
                    <div className="main">
                        <BlackLine />
                        <div className="item">
                            <ItemWrapp
                                item={item}
                                slug={slug}
                                isLiked={isLiked}
                                addLikeToItem={addLikeToItem}
                            />
                            <ItemComments
                                item={item}
                                authToken={authToken}
                                itemComments={itemComments}
                                setItemCommets={setItemCommets}
                            />
                        </div>
                    </div>
                </>
            }
        </main>
    )
}
