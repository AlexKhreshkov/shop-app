import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getItem } from '../API/getData'
import { useFetching } from '../hooks/useFetching'
import { Loader } from '../components/UI/loader/Loader'


export default function ItemPage() {

    const { slug } = useParams()
    const [item, setItem] = useState({})
    const [fetchItems, isLoading, error] = useFetching(async () => {
        let fetchedItem = await getItem(slug)
        setItem(fetchedItem)
    }
    )

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <div className="main-content">
            {isLoading
                ?
                <div style={{ display: "flex", justifyContent: 'center' }}><Loader /></div>
                :
                <div className="main">
                    <div className="after-nav hr-black-line"></div>
                    <div className="item">
                        <div className="item__wrapp">
                            <div className="item__content">
                                <div className="item__item-img">
                                    <img src="/img/HyperX-Cloud-Alpha-Pro.jpg" alt="" />
                                </div>
                                <div className="item__description">
                                    <div className="item__title">Treatise on the</div>
                                    <div className="item__price">{item.price}$</div>
                                    <div className="item__rating">Rating 5</div>
                                    <div className="item__likes">Likes: 10</div>
                                    <div className="item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed
                                        commodi cupiditate corrupti quam blanditiis cum! Aperiam dignissimos adipisci et.
                                        Reiciendis impedit, harum dolorum repellat tenetur soluta maiores minus aliquam!</div>
                                    <div className="item__tags">
                                        <div className="item__tags">
                                            <div className="item__tag">Phone</div>
                                        </div>
                                    </div>
                                    <div className="item__buttons">
                                        <div className="item__add-to-cart-btn cart">
                                            <button>Add to cart</button>
                                        </div>
                                        <div className="item__like-btn">
                                            <button><img src="/img/like.png" alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comments">
                            <div className="comments__wrapp">
                                <div className="comments__count">Comments: 2</div>
                                <div className="comments__comment">
                                    <div className="comments__comment-author-img"><img src="/img/items/comment_img.png" alt="" />
                                    </div>
                                    <div className="comments__comment-content">
                                        <div className="comments__comment-head">
                                            <div className="comments__rating">Rating 5</div>
                                            <div className="comments__date">June 3 2018</div>
                                        </div>
                                        <div className="comments__comment-author-name">Alex ASD</div>
                                        <div className="comments__text">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam animi iure
                                            consequuntur asperiores ipsa, aliquam vero velit dolor enim ratione accusantium aut
                                            magni quasi repellat. Ut necessitatibus officiis dolorum. Corrupti?
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam animi iure
                                            consequuntur asperiores ipsa, aliquam vero velit dolor enim ratione accusantium aut
                                            magni quasi repellat. Ut necessitatibus officiis dolorum. Corrupti?
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam animi iure
                                            consequuntur asperiores ipsa, aliquam vero velit dolor enim ratione accusantium aut
                                            magni quasi repellat. Ut necessitatibus officiis dolorum. Corrupti?
                                        </div>
                                    </div>
                                </div>
                                <div className="comments__comment">
                                    <div className="comments__comment-author-img"><img src="/img/items/comment_img.png" alt="" />
                                    </div>
                                    <div className="comments__comment-content">
                                        <div className="comments__comment-head">
                                            <div className="comments__rating">Rating 5</div>
                                            <div className="comments__date">June 3 2018</div>
                                        </div>
                                        <div className="comments__comment-author-name">Alex ASD</div>
                                        <div className="comments__text">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam animi iure
                                            consequuntur asperiores ipsa, aliquam vero velit dolor enim ratione accusantium aut
                                            magni quasi repellat. Ut necessitatibus officiis dolorum. Corrupti?
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam animi iure
                                            consequuntur asperiores ipsa, aliquam vero velit dolor enim ratione accusantium aut
                                            magni quasi repellat. Ut necessitatibus officiis dolorum. Corrupti?
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam animi iure
                                            consequuntur asperiores ipsa, aliquam vero velit dolor enim ratione accusantium aut
                                            magni quasi repellat. Ut necessitatibus officiis dolorum. Corrupti?
                                        </div>
                                    </div>
                                </div>
                                <div className="comments__add-comment">
                                    <div className="comments__add-comment-wrapp">
                                        <form action="">
                                            <div className="comments__add-comment-title">
                                                Add your comment
                                            </div>
                                            <div className="comments__add-comment-author-name">
                                                Your name:
                                            </div>
                                            <div className="comments__add-comment-inputs">
                                                <input type="text" />
                                            </div>
                                            <div className="comments__add-comment-subtitle">
                                                <div className="comments__add-comment-your-comment">Your comment</div>
                                                <div className="comments__add-comment-rating">
                                                    <div className="comments__add-comment-rating-title">Your rating</div>
                                                    <div className="comments__add-comment-rating-ratings">1 2 3 4 5</div>
                                                </div>
                                            </div>
                                            <div className="comments__add-comment-textarea">
                                                <textarea></textarea>
                                            </div>
                                            <div className="comments__add-comment-button">
                                                <button type="submit">SUBMIT</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
