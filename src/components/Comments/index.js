import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

class Comments extends Component {
  state = {
    count: 0,
    commentsList: [],
    name: '',
    comment: '',
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !prevState.isLike}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredCommentList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState(prevState => ({
      commentsList: filteredCommentList,
      count: prevState.count - 1,
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: true,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {count, commentsList, name, comment} = this.state
    return (
      <div className="app-container">
        <div className="comments-app-container">
          <div className="comments-card-container">
            <h1 className="comment-header">Comments</h1>
            <p className="description">say something about 4.o technologies</p>
            <form
              className="comment-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                value={name}
                onChange={this.onChangeName}
                placeholder="Your Name"
                className="input-name"
              />
              <br />
              <textarea
                value={comment}
                onChange={this.onChangeComment}
                placeholder="Your Comment"
                className="input-comment"
              />
              <br />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <div className="comments-image-gallery">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>

        <ul className="comments-list">
          <li>
            <p>
              <span className="comments-count">{count}</span>comments
            </p>
          </li>
          {commentsList.map(eachComment => (
            <CommentItem
              toggleIsLike={this.toggleIsLike}
              key={eachComment.id}
              commentDetails={eachComment}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
// Write your code here
