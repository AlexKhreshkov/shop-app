import React from 'react'
import AddToCartBtn from '../UI/buttons/AddToCartBtn'
import LikeBtn from '../UI/buttons/LikeBtn'


export default function ItemWrapp({ item, slug, isLiked, addLikeToItem }) {
    return (
        <div className="item__wrapp">
            <div className="item__content">
                <div className="item__item-img">
                    <img src={item.image} alt="" />
                </div>
                <div className="item__description">
                    <div className="item__title">{item.title}</div>
                    <div className="item__price">Price: {item.price}$</div>
                    <div className="item__rating">Rating 5</div>
                    {item.likes
                        ?
                        <div className="item__likes">Likes: {item.likes.length}</div>
                        :
                        <div className="item__likes">Likes: </div>
                    }
                    <div className="item__text">Description: {item.body}</div>
                    <div className="item__tags">
                        <div className="item__tags">
                            <div className="item__tag">Category: {item.category_name}</div>
                        </div>
                    </div>
                    <div className="item__buttons">
                        <AddToCartBtn slug={slug} />
                        <LikeBtn
                            isLiked={isLiked}
                            onClick={() => addLikeToItem()}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
