import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useData } from '../hooks/useAuth'
import { searchItemBySlug } from '../utils/utls'
import AddToCartBtn from '../components/UI/buttons/AddToCartBtn'
import LikeBtn from '../components/UI/buttons/LikeBtn'
import Comment from '../components/Comment'
import { Loader } from '../components/UI/loader/Loader'
import CommentForm from '../components/UI/forms/CommentForm'
import Navigation from './Navigation'


export default function ItemPage() {

    const { slug } = useParams()
    const { items, comments, isLoading, user, authToken } = useData()
    const [item, setItem] = useState({})
    const [itemComments, setItemCommets] = useState([])

    useEffect(() => {
        const item = searchItemBySlug(slug, items)
        setItem(item)
        setItemCommets([...comments].filter(comment => comment.item_slug === slug))
    }, [comments])


    return (
        <div className="main-content">
            {isLoading
                ?
                <div style={{ display: "flex", justifyContent: 'center', marginTop: '100px' }}><Loader /></div>
                :
                <>
                    <Navigation />
                    <div className="main">
                        <div className="after-nav hr-black-line"></div>
                        <div className="item">
                            <div className="item__wrapp">
                                <div className="item__content">
                                    <div className="item__item-img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="item__description">
                                        <div className="item__title">{item.title}</div>
                                        <div className="item__price">Price: {item.price}$</div>
                                        <div className="item__rating">Rating 5</div>
                                        <div className="item__likes">Likes: {item.likes}</div>
                                        <div className="item__text">Description: {item.body}</div>
                                        <div className="item__tags">
                                            <div className="item__tags">
                                                <div className="item__tag">Category: {item.category_name}</div>
                                            </div>
                                        </div>
                                        <div className="item__buttons">
                                            <AddToCartBtn slug={slug} />
                                            <LikeBtn />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments">
                                <div className="comments__wrapp">
                                    <div className="comments__count">Comments: {itemComments.length}</div>
                                    {authToken
                                        ?
                                        <></>
                                        :
                                        <div className='login-to-comment'>
                                            <Link to='/signup'>
                                                <span style={{ textDecoration: 'underline', color: 'red' }}>
                                                    SignUp
                                                </span>
                                            </Link>
                                            <span> to add comment</span>
                                        </div>
                                    }
                                    {itemComments.map((comment) =>
                                        <Comment
                                            key={comment.id}
                                            commentId={comment.id}
                                            userId={comment.user}
                                            user_name={comment.user_name}
                                            name={comment.name}
                                            text={comment.text}
                                            created={comment.created}
                                            itemComments={itemComments}
                                            setItemCommets={setItemCommets}
                                        />
                                    )}
                                    {authToken
                                        ?
                                        <CommentForm
                                            item={item}
                                            itemComments={itemComments}
                                            setItemCommets={setItemCommets}
                                        />
                                        :
                                        <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
