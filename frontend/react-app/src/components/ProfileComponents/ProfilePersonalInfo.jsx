import React from 'react'
import { useState } from 'react'
import { useData } from '../../hooks/useData'
import ProfileInfoForm from './ProfileInfoForm'


export default function ProfilePersonalInfo() {

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
            <ProfileInfoForm
                fields={Object.keys(userInfoForm)}
                userInfoForm={userInfoForm}
                setUserInfoForm={setUserInfoForm}
                setIsSuccessModal={setIsSuccessModal}
                profileNewPic={profileNewPic}
                isSuccessModal={isSuccessModal}
            />
        </div>
    )
}
