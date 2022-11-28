import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemMainPage({ title, img, price, likes, slug }) {
    return (
        <div className="best-sellers__item">
            <div className="best-sellers__img">
                <img src={img} alt="" />
            </div>
            <div className="best-sellers__img-name">
                <Link to={`/items/${slug}`}>{title}</Link>
            </div>
            <div className="best-sellers__price">{price}$</div>
            <div className="best-sellers__stars">Likes: {likes}</div>
        </div>
    )
}
