import React from 'react'
import { useState } from 'react'
import ProfileInfoForm from '../components/ProfileInfoForm'
import ProfileOrders from '../components/ProfileOrders'
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
    const [profileNewPic, setProfileNewPic] = useState(null)

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
                                        <div className='profile__pic-update'>
                                            <input
                                                onChange={e => setProfileNewPic(e.target.files[0])}
                                                type="file"
                                                accept="image/jpeg, image/png, image/jpg">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="profile__info-form">
                                        <ProfileInfoForm
                                            fields={Object.keys(userInfoForm)}
                                            userInfoForm={userInfoForm}
                                            setUserInfoForm={setUserInfoForm}
                                            setIsSuccessModal={setIsSuccessModal}
                                            profileNewPic={profileNewPic}
                                        />
                                    </div>
                                </div>
                                <ProfileOrders />
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
