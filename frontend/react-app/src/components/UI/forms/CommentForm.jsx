import React from 'react'

export default function CommentForm() {
    return (
        <div className="comments__add-comment">
            <div className="comments__add-comment-wrapp">
                <form action="">
                    <div className="comments__add-comment-title">
                        Add your comment
                    </div>
                    <div className="comments__add-comment-author-name">
                        Your name:
                    </div>
                    <div className="comments__add-comment-inputs">
                        <input type="text" />
                    </div>
                    <div className="comments__add-comment-subtitle">
                        <div className="comments__add-comment-your-comment">Your comment</div>
                        <div className="comments__add-comment-rating">
                            <div className="comments__add-comment-rating-title">Your rating</div>
                            <div className="comments__add-comment-rating-ratings">1 2 3 4 5</div>
                        </div>
                    </div>
                    <div className="comments__add-comment-textarea">
                        <textarea></textarea>
                    </div>
                    <div className="comments__add-comment-button">
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
