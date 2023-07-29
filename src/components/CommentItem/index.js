const CommentItemAppend = props => {
  const {details, Ondelete, toggle} = props
  const {id, name, comment, date, isLiked, initialClassName} = details
  const islikedUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const button = () => {
    Ondelete(id)
  }

  const liketoggle = () => {
    toggle(id)
  }

  return (
    <li className="list-item">
      <div className={`card ${initialClassName}`}>{name[0]}</div>
      <h1 className="name">{name}</h1>
      <span className="time">{date}</span>
      <p className="comment-description">{comment}</p>
      <div className="likeDelete">
        <button className="delete-btn" type="button" onClick={liketoggle}>
          <img src={islikedUrl} alt="like" />
        </button>
        <button type="button" className="delete-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            onClick={button}
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItemAppend
