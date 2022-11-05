import React from 'react'
import { useEffect } from 'react'
import { useData } from '../hooks/useAuth'

export default function Comment({ index, userId, user_name, name, text, created }) {

    const { usersProfilesPic } = useData()

    function getImage() {
        let image
        for (let user of usersProfilesPic) {
            if (user.user === userId) {
                image = user.profile_pic
                return image
            }
        }
    }

    return (
        <div className="comments__comment">
            <div className="comments__comment-author-img"><img src={getImage()} alt="" />
            </div>
            <div className="comments__comment-content">
                <div className="comments__comment-head">
                    <div className="comments__rating">Rating 5</div>
                    <div className="comments__date">{created}</div>
                </div>
                <div className="comments__comment-author-name">{user_name}</div>
                <div className="comments__text">
                    {text}
                </div>
            </div>
        </div>
    )
}
