import React from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Navigation() {

    const { user, signOut } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const fromPage = location.state?.from?.pathname || '/'

    return (
        <div className="nav">
            <div className="nav__title">Online shop</div>
            <div className="nav__menu">
                <div className="nav__item"><NavLink end to='/'>Main</NavLink></div>
                <div className="nav__item"><NavLink end to='/items'>Products</NavLink></div>
                <div className="nav__item"><NavLink end to='/about'>About</NavLink></div>
                {user ?
                    <div className="nav__item">
                        <Link onClick={() => signOut(() => navigate(fromPage))}>
                            Logout
                        </Link>
                    </div>
                    :
                    <>
                        <div className="nav__item"><NavLink end to='/login'>Login</NavLink></div>
                        <div className="nav__item"><NavLink end to='/signup'>SignUp</NavLink></div>
                    </>
                }
            </div>
            <div className="nav__search">
                <input type="text" />
            </div>
            <div className="nav__icons">
                <div className="nav__cart-content">
                    <div className="nav__count">1</div>
                    <div className="nav__ellipse"><a href="#"><img src="/img/ellipse.png" alt="" /></a></div>
                    <div className="nav__cart"><a href="#"><img src="/img/cart.png" alt="" /></a></div>
                </div>
                <div className="nav__profile">
                    <NavLink to='/profile'><img src="/img/profile.png" alt="" /></NavLink>
                </div>
            </div>
        </div>
    )
}
