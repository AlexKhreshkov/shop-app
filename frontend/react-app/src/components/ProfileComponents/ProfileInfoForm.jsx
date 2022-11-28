import React from 'react'
import { base_url } from '../../API/getData'
import { useData } from '../../hooks/useData'
import ProfilleInfoInput from '../UI/input/ProfilleInfoInput'
import Success from '../UI/modal/Success'

export default function ProfileInfoForm({ fields, userInfoForm, setUserInfoForm, setIsSuccessModal, isSuccessModal, profileNewPic }) {
    const { authToken, user, setUser } = useData()

    function updateUserInfo(e) {
        e.preventDefault()
        fetch(`${base_url}/profiles/${user.id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`,
            },
            body: JSON.stringify(userInfoForm),
        })
        // console.log(profileNewPic);
        setUser({ ...user, ...userInfoForm })
    }
    return (
        <form className="profile__info-form">
            {fields.map((field, index) =>
                <ProfilleInfoInput
                    key={index}
                    field={field}
                    userInfoForm={userInfoForm}
                    setUserInfoForm={setUserInfoForm}
                />
            )}
            <button onClick={(e) => {
                updateUserInfo(e)
                setIsSuccessModal(true)
            }}
            >
                Update
            </button>
            {isSuccessModal ? <Success/> : <></>}
        </form>
    )
}
