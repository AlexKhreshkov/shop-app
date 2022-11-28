import React from 'react'

export default function Services() {
    return (
        <div className="services">
            <div className="services__wrapp">
                <div className="services__items">
                    <div className="services__item">
                        <div className="services__img"><img src="/img/diamond.png" alt="" /></div>
                        <div className="services__title">SPECIAL OFFERS</div>
                        <div className="services__text">Shop Big Save Big</div>
                    </div>
                    <div className="services__item">
                        <div className="services__img"><img src="/img/plane.png" alt="" /></div>
                        <div className="services__title">Free delivery</div>
                        <div className="services__text">On Orders Above $99</div>
                    </div>
                    <div className="services__item">
                        <div className="services__img"><img src="/img/return.png" alt="" /></div>
                        <div className="services__title">30 Days Return</div>
                        <div className="services__text">Policy We Offers</div>
                    </div>
                    <div className="services__item">
                        <div className="services__img"><img src="/img/rocket.png" alt="" /></div>
                        <div className="services__title">Fastest Shipping</div>
                        <div className="services__text">2 Days Express</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
