import React from 'react'

export default function LikeBtn({ childern, isLiked, ...props }) {

    return (
        <>
            {isLiked ?
                <button
                    className="item__like-btn-active"
                    {...props}
                >
                    {childern}
                </button>
                :
                <button className='item__like-btn'
                    {...props}
                >
                    {childern}
                </button>
            }
        </>
    )
}

