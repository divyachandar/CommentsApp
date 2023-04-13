// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLike, deleteComment} = props
  const {name, comment, isLike, id} = commentDetails
  const likeImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const onClickLikeIcon = () => {
    toggleIsLike(id)
  }
  const onDeleteComment = () => {
    deleteComment(id)
  }
  // const {firstLetter} = name.splice(0, 1)
  return (
    <li className="comments-container">
      <p>{name}</p>
      <p className="comment">{comment}</p>
      <div className="like-container">
        <button
          type="button"
          onClick={onClickLikeIcon}
          className="like-icon-container"
        >
          <img src={likeImgUrl} className="like-icon" alt="like" />
        </button>
        <button
          type="button"
          data-testId="delete"
          className="delete-btn"
          onClick={onDeleteComment}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
