import React from 'react'

export default function ProfilleInfoInput({ field, userInfoForm, setUserInfoForm }) {

    return (
        <div className="profile__surname">
            {field}:
            <input
                value={userInfoForm[field]}
                onChange={e => {
                    setUserInfoForm({ ...userInfoForm, [field]: e.target.value })
                }}
            />
        </div>
    )
}
