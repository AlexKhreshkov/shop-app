import React from 'react'
import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import NavSearch from '../components/UI/search/NavSearch'
import { useData } from '../hooks/useData'

export default function Navigation() {

    const { user, authToken, signOut, cartItems, isLoading } = useData()
    const location = useLocation()
    const navigate = useNavigate()
    const fromPage = location.state?.from?.pathname || '/'
    const { setCartStatus } = useData()
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false)


    return (
        <>
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
                            <div className="nav__item"><NavLink end to='/login'>Login</NavLink></div>
                        </>
                    }
                </div>
                <NavSearch />
                <div className="nav__icons">
                    {cartItems.length
                        ?
                        <div className="nav__cart-content" onClick={() => setCartStatus(true)}>
                            <div className="nav__count">{cartItems.length}</div>
                            <div className="nav__ellipse"><img src="/img/ellipse.png" /></div>
                            <div className="nav__cart"><img src="/img/cart.png" alt="" /></div>
                        </div>
                        :
                        <>
                            <div className="nav__cart-content">
                                <div className="nav__cart"><img src="/img/cart.png" alt="" /></div>
                            </div>
                        </>
                    }
                    <div className="nav__profile">
                        <Link to='/profile'><img src="/img/profile.png" alt="" /></Link>
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
            <div className='lowNav'>
                <div className="lowNav__title">Online shop</div>
                <div
                    className="burgerMenu"
                    onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
                >
                </div>
            </div>
            <ul className={isBurgerMenuOpen ? 'lowNavList ' : 'lowNavList hidden'}>
                <Link to='/'><li>Main</li></Link>
                <Link to='/items'><li>Products</li></Link>
                <Link to='/about'><li>About</li></Link>
                {cartItems
                    ?
                    <li onClick={() => setCartStatus(true)}>
                        <div>
                            Cart: <img src="/img/cart.png" alt="" />
                            {cartItems.length}
                        </div>
                    </li>
                    :
                    <></>
                }
                {authToken
                    ?
                    <Link to='/profile'><li>Profile</li></Link>
                    :
                    <>
                        <Link to='/login'><li>Login</li></Link>
                        <Link to='/signup'><li>Signup</li></Link>
                    </>
                }
            </ul>
        </>
    )
}
