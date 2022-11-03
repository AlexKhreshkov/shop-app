import React from 'react'

export default function Comment({index,user_name,name,text,created}) {
    return (
        <div className="comments__comment">
            <div className="comments__comment-author-img"><img src="/img/items/comment_img.png" alt="" />
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
