import React from 'react'
import { useState } from 'react'
import { useData } from '../hooks/useAuth'
import ProfilleInfoInput from './UI/input/ProfilleInfoInput'

export default function ProfileInfoForm({ fields, userInfoForm, setUserInfoForm, setIsSuccessModal }) {
    const { authToken, user, setUser } = useData()

    function updateUserInfo(e) {
        e.preventDefault()
        fetch(`http://127.0.0.1:8000/api/profiles/${user.id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`,
            },
            body: JSON.stringify(userInfoForm),
        })
        setUser({ ...user, ...userInfoForm })
    }
    return (
        <form>
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
        </form>
    )
}
