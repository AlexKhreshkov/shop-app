import React from 'react'
import ItemMainPage from './ItemMainPage'

export default function BestSellers({ items }) {
    return (
        <div className="best-sellers">
            <div className="best-sellers__wrapp">
                <div className="best-sellers__description">
                    <div className="best-sellers__title">
                        Best Sellers
                    </div>
                    <div className="best-sellers__subtitle">The best products</div>
                    <div className="best-sellers__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                        unde nulla eius esse animi accusamus? A optio nostrum dignissimos similique hic deserunt
                        corporis, quae laudantium odit officia dolore perspiciatis saepe.</div>
                </div>
                <div className="best-sellers__items">
                    {items.map((item) =>
                        <ItemMainPage
                            key={item.id}
                            title={item.title}
                            img={item.image}
                            price={item.price}
                            likes={item.likes.length}
                            slug={item.slug}
                        />
                    )
                    }
                </div>
            </div>
        </div>
    )
}
