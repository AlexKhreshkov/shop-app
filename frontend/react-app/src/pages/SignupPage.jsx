import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Loader } from '../components/UI/loader/Loader'
import { useData } from '../hooks/useData'
import BlackLine from '../components/UI/lines/BlackLine'
import Navigation from './../components/Navigation'
import SignUpForm from '../components/UI/forms/SignUpForm'

export default function SignUp() {
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'
    const { signUp, isLoading, user } = useData()


    useEffect(() => {
        if (user) {
            return navigate(fromPage, { replace: true })
        }
    })

    return (
        <main className="main-content">
            {isLoading
                ?
                <div className='loader'><Loader /></div>
                :
                <>
                    <Navigation />
                    <BlackLine />
                    <div className="main">
                        <div className='signUpTitle'>
                            SignUp
                        </div>
                        {fromPage !== '/' ?
                            <div style={{ textAlign: 'center', fontSize: '20px', marginTop: '40px' }}>
                                <div style={{ textDecoratzon: 'underline', marginBottom: '10px' }}>
                                    First, SignUp/Login
                                </div>
                                to access {fromPage}
                            </div>
                            :
                            <></>
                        }
                        <SignUpForm
                            signUp={signUp}
                            navigate={navigate}
                            fromPage={fromPage}
                        />
                    </div>
                </>
            }
        </main>
    )
}
