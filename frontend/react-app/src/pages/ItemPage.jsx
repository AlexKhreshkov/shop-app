import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useData } from '../hooks/useData'
import { searchItemBySlug } from '../utils/utls'
import { Loader } from '../components/UI/loader/Loader'
import Navigation from './../components/Navigation'
import { base_url } from '../API/getData'
import BlackLine from '../components/UI/lines/BlackLine'
import ItemWrapp from '../components/ItemPageComponents/ItemWrapp'
import ItemComments from '../components/ItemPageComponents/ItemComments'


export default function ItemPage() {

    const { slug } = useParams()
    const { items, comments, isLoading, user, authToken } = useData()
    const [item, setItem] = useState({})
    const [itemComments, setItemCommets] = useState([])
    const [isLiked, setIsLiked] = useState(null)

    useEffect(() => {
        async function preload() {
            const searchedItem = await searchItemBySlug(slug, items)
            setItem(searchedItem)
            setItemCommets([...comments].filter(comment => comment.item_slug === slug))
            for (let userId of searchedItem.likes) {
                if (userId === user.id) {
                    setIsLiked(true)
                    break
                }
            }
        }
        preload()
    }, [comments])


    async function addLikeToItem() {
        if (!isLiked) {
            const newItemLikes = [...item.likes, user.id]
            await fetch(`${base_url}/items/${slug}/update/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${authToken}`,
                },
                body: JSON.stringify({
                    likes: [...item.likes, user.id],
                }),
            })
            setIsLiked(true)
            item.likes = newItemLikes
        }
        else {
            const newItemLikes = [...item.likes].filter(elem => elem !== user.id)
            fetch(`${base_url}/items/${slug}/update/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${authToken}`,
                },
                body: JSON.stringify({
                    likes: newItemLikes,
                }),
            })
            setIsLiked(false)
            item.likes = newItemLikes
        }
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
