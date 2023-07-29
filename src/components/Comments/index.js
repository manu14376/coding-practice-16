import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItemAppend from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentsList: ''}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundClassName = `initial , ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      initialClassName: initialBackgroundClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  Changecomment = event => {
    this.setState({comment: event.target.value})
  }

  Changename = event => {
    this.setState({name: event.target.value})
  }

  Delete = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {}
        }
        return {each}
      }),
    }))
  }

  toggle = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return {each}
      }),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    return (
      <div className="bg-container">
        <div className="comment-section">
          <div className="comment-container">
            <h1 className="heading">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <form className="form">
              <input
                type="text"
                className="inputEl"
                placeholder="Your Name"
                onChange={this.Changename}
                value={name}
              />
              <br />
              <textarea
                cols="40"
                rows="8"
                placeholder="Your Comment"
                className="textareaEl"
                onChange={this.Changecomment}
                value={comment}
              >
                d
              </textarea>
              <br />
              <button
                type="submit"
                className="button"
                onClick={this.onAddComment}
              >
                Add Comment
              </button>
            </form>
          </div>
          <div className="comment-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image"
            />
          </div>
        </div>
        <hr className="hr-line" />
        <span className="count">{commentsList.length}</span>
        <span className="style">Comments</span>
        <div className="comments-container">
          {commentsList.map(each => (
            <CommentItemAppend
              details={each}
              Ondelete={this.Delete}
              toggle={this.toggle}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Comments
