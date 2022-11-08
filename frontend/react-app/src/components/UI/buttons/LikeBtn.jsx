import React from 'react'

export default function LikeBtn({ childern, isLiked, ...props }) {

    return (
        <>
            {isLiked ?
                <div className="item__like-btn-active">
                    <button
                        {...props}
                    >
                        <img src="/img/like.png" alt="" />
                        {childern}
                    </button>
                </div>
                :
                <div className="item__like-btn">
                    <button
                        {...props}
                    >
                        <img src="/img/like.png" alt="" />
                        {childern}
                    </button>
                </div>
            }
        </>
    )
}

