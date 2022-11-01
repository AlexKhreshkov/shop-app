import React from 'react'
import { Link } from 'react-router-dom'
import AddToCartBtn from './UI/buttons/AddToCartBtn'
import LikeBtn from './UI/buttons/LikeBtn'

export default function ItemListItem({ title, slug, body, price, category, image, availableCount, likes }) {
    return (
        <div className="items__item">
            <div className="items__item-img">
                <img src={image} alt="" />
            </div>
            <div className="items__item-content">
                <div className="items__item-title"><Link to={`${slug}`}>{title}</Link></div>
                <div className="items__item-price">{price}$</div>
                <div className="items__item-rating">Likes: {likes}</div>
                <div className="items__item-text">{body}</div>
                <div className="items__item-categories">{category}</div>
                <div className="item__buttons">
                    <AddToCartBtn />
                    <LikeBtn />
                </div>
            </div>
        </div>
    )
}
