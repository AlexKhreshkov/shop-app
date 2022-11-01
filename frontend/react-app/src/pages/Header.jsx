import React from 'react'

export default function Header() {
    return (
        <div className="header__wrap">
            <header className="header">
                <div className="header__phone">+123123</div>
                <div className="header__line line"></div>
                <div className="header__email">alex.khreshkov@gmail.com</div>
                <div className="header__social"><a href="https://github.com/AlexKhreshkov" target="new"><img src="/img/github.png" alt="" /></a></div>
            </header>
        </div>
    )
}
