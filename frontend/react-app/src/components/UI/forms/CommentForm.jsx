import React from 'react'
import { useState } from 'react'
import { base_url } from '../../../API/getData'
import { useData } from '../../../hooks/useAuth'
import Success from '../modal/Success'

export default function CommentForm({ item, itemComments, setItemCommets }) {

    const { user, authToken, } = useData()
    const [commentForm, setCommentForm] = useState({
        'name': user.username,
        'text': '',
    })
    const [isSuccessModal, setIsSuccessModal] = useState(false)

    async function addComment(event) {
        event.preventDefault()
        setIsSuccessModal(true)
        const userCommentForm = {
            ...commentForm,
            user: +user.id,
            item: +item.id,
        }
        fetch(`${base_url}/comments/add/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`,
            },
            body: JSON.stringify(userCommentForm),
        })
        setItemCommets([...itemComments, userCommentForm])
        setCommentForm({ ...commentForm, text: '' })
    }

    return (
        <div className="comments__add-comment">
            {/* {isSuccessModal
                ?
                <Success
                    onClick={e => setIsSuccessModal(false)}
                />
                :
                <></>
            } */}
            <a href=''></a>
            <div className="comments__add-comment-wrapp">
                <form onSubmit={e => addComment(e)}>
                    <div className="comments__add-comment-title">
                        Add your comment
                    </div>
                    <div className="comments__add-comment-author-name">
                        Your name:
                    </div>
                    <div className="comments__add-comment-inputs">
                        <input
                            type="text"
                            value={commentForm.name}
                            onChange={e => {
                                setCommentForm({ ...commentForm, name: e.target.value })
                            }}
                        />
                    </div>
                    <div className="comments__add-comment-subtitle">
                        <div className="comments__add-comment-your-comment">Your comment</div>
                        {/* <div className="comments__add-comment-rating">
                            <div className="comments__add-comment-rating-title">Your rating</div>
                            <div className="comments__add-comment-rating-ratings">1 2 3 4 5</div>
                        </div> */}
                    </div>
                    <div className="comments__add-comment-textarea">
                        <textarea
                            required
                            value={commentForm.text}
                            onChange={e => {
                                setCommentForm({ ...commentForm, text: e.target.value })
                            }} />
                    </div>
                    <div className="comments__add-comment-button">
                        <button>ADD</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
