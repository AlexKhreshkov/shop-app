import React from 'react'
import { base_url } from '../../API/getData'
import { useData } from '../../hooks/useData'


export default function Comment({ commentId, userId, user_name, name, text, created, itemComments, setItemCommets }) {

    const { usersProfilesPic, user, authToken } = useData()

    function getImage() {
        let image
        for (let user of usersProfilesPic) {
            if (user.user === userId) {
                image = user.profile_pic
                return image
            }
        }
    }

    async function deleteComment() {
        fetch(`${base_url}/comments/${commentId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`,
            },
        })
        setItemCommets([...itemComments].filter(comment => comment.id !== commentId))
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
                {!user
                    ?
                    <></>
                    :
                    <>
                        {userId === user.id
                            ?
                            <div className="comments__comment-buttons">
                                <div className="comments__comment__delete">
                                    <button onClick={() => deleteComment()}>
                                        DELETE
                                    </button>
                                </div>
                            </div>
                            :
                            <></>
                        }
                    </>
                }
            </div>
        </div>
    )
}
