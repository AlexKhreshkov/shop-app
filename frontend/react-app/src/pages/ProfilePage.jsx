import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProfileInfoForm from '../components/ProfileInfoForm'
import { Loader } from '../components/UI/loader/Loader'
import Success from '../components/UI/modal/Success'
import { useData } from '../hooks/useAuth'
import BlackLine from './BlackLine'
import Navigation from './Navigation'

export default function ProfilePage() {

    const { user, isLoading } = useData()
    const [userInfoForm, setUserInfoForm] = useState({
        name: user.name,
        surname: user.surname,
        address: user.address,
        country: user.country,
        phone: user.phone,
    })
    const [isSuccessModal, setIsSuccessModal] = useState(false)

    return (
        <div className="main-content">
            {isLoading
                ?
                <div style={{ display: "flex", justifyContent: 'center', marginTop: '100px' }}><Loader /></div>
                :
                <>
                    <Navigation />
                    <BlackLine />
                    {isSuccessModal
                        ?
                        <Success
                            onClick={e => setIsSuccessModal(false)}
                        />
                        :
                        <></>
                    }
                    <div className="main">
                        <div className="" style={{ textAlign: 'center', fontSize: '30px', marginTop: '20px', marginBottom: '20px' }}>
                            Your Profile
                        </div>
                        <div className="profile__wrap">
                            <div className="profile__container">
                                <div className="profile__personal-info">
                                    <div className="profile__info-item">
                                        <div className="profile__row">
                                            <div className="profile__pic">
                                                <img src={user.profile_pic} />
                                            </div>
                                            <div className="profile__username">
                                                Username: {user.username}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile__info-form">
                                        <ProfileInfoForm
                                            fields={Object.keys(userInfoForm)}
                                            userInfoForm={userInfoForm}
                                            setUserInfoForm={setUserInfoForm}
                                            setIsSuccessModal={setIsSuccessModal}
                                        />
                                    </div>
                                </div>
                                <div className="profile__orders">
                                    <div className="profile__orders-title">Your Orders: 0</div>
                                    <div className="profile__orders-title">Your Orders</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
