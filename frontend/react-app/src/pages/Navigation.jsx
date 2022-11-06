import React from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth, useData } from '../hooks/useAuth'
import { getUserUserName } from '../API/getData'

export default function Navigation() {

    const { user, authToken, signOut, cartItems } = useData()
    const location = useLocation()
    const navigate = useNavigate()
    const fromPage = location.state?.from?.pathname || '/'
    const { isCartOpen, setCartStatus } = useData()

    return (
        <div className="nav">
            <div className="nav__title">Online shop</div>
            <div className="nav__menu">
                <div className="nav__item"><NavLink end to='/'>Main</NavLink></div>
                <div className="nav__item"><NavLink end to='/items'>Products</NavLink></div>
                <div className="nav__item"><NavLink end to='/about'>About</NavLink></div>
                {authToken ?
                    <div className="nav__item">
                        <Link onClick={() => signOut(() => navigate(fromPage))}>
                            Logout
                        </Link>
                    </div>
                    :
                    <>
                        <div className="nav__item"><NavLink end to='/signup'>SignUp</NavLink></div>
                    </>
                }
            </div>
            <div className="nav__search">
                <input type="text" />
            </div>
            <div className="nav__icons">
                <div className="nav__cart-content">
                    {cartItems.length ?
                        <>
                            <div className="nav__count" onClick={() => setCartStatus(true)}>{cartItems.length}</div>
                            <div className="nav__ellipse" onClick={() => setCartStatus(true)}><img src="/img/ellipse.png" /></div>
                        </>
                        :
                        <></>
                    }
                    <div className="nav__cart"><img src="/img/cart.png" alt="" /></div>
                </div>
                <div className="nav__profile">
                    <NavLink to='/profile'><img src="/img/profile.png" alt="" /></NavLink>
                </div>
                {user
                    ?
                    <div>
                        <div>Welcome,</div>
                        <div style={{ textAlign: 'center' }}>{user.username}</div>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}
