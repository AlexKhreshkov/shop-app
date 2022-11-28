import React from 'react'
import { Link } from 'react-router-dom'
import CommentForm from '../UI/forms/CommentForm'
import Comment from './Comment'


export default function ItemComments({ item, authToken, itemComments, setItemCommets }) {

    return (
        <div className="comments">
            <div className="comments__wrapp">
                <div className="comments__count">Comments: {itemComments.length}</div>
                {authToken
                    ?
                    <></>
                    :
                    <div className='login-to-comment'>
                        <Link to='/signup'>
                            <span className='warningText'>SignUp</span>
                        </Link>
                        <span> to add comment</span>
                    </div>
                }
                {itemComments.map((comment) =>
                    <Comment
                        key={comment.id}
                        commentId={comment.id}
                        userId={comment.user}
                        user_name={comment.user_name}
                        name={comment.name}
                        text={comment.text}
                        created={comment.created}
                        itemComments={itemComments}
                        setItemCommets={setItemCommets}
                    />
                )}
                {authToken
                    ?
                    <CommentForm
                        item={item}
                        itemComments={itemComments}
                        setItemCommets={setItemCommets}
                    />
                    :
                    <></>
                }
            </div>
        </div>
    )
}
