import './showComments.css'
import { Link } from 'react-router-dom'
import { convertStringsIntoLink } from '../utils/utilsFunctions'

const ShowComments = ({comment}) => {
  return (
    <div className='comments-main'>
    
    <h2> {comment.length} Comments</h2>

    {comment.map((comment) => 
    <div className='comments-card' key={comment?.id}>
        <img className='comments-userImage' alt="user" src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} /> 
        <div>
        <Link className='comments-userName' to={comment?.snippet?.topLevelComment?.snippet?.authorChannelUrl} >{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</Link>
        <p className='comment' style={{whiteSpace: "pre-wrap"}}>{convertStringsIntoLink(comment?.snippet?.topLevelComment?.snippet?.textOriginal)}</p>
        </div>
    </div> )}

    </div>
  )
}

export default ShowComments
