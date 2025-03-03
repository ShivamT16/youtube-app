import './showComments.css'
import { Link } from 'react-router-dom'
import Description from './Description'

const ShowComments = ({comment}) => {
  return (
    <div className='comments-main'>
    
    <h2> {comment?.length} Comments</h2>
    
    {comment.map((comment) => 
      <div key={comment?.id}>     
       <ShowReplies className='comments-card' key={comment?.id} comment={comment?.snippet?.topLevelComment} />
       
        <div className='replies'>
        <p className='replies-count'>{comment?.replies?.comments?.length && comment?.replies?.comments?.length + ' Replies'}</p>
         {comment?.replies?.comments.map(replies =>  
           <ShowReplies key={replies?.id} comment={replies} />
         )}
        </div>
      </div> )}

    </div>
  )
}

export default ShowComments

const ShowReplies = ({comment}) => {

  return(
    <div className='comments-main'>

    <div className='comments-card' key={comment?.id}>
        <img className='comments-userImage' alt="user" src={comment?.snippet?.authorProfileImageUrl } /> 
        <div>
        <Link className='comments-userName' to={comment?.snippet?.authorChannelUrl} >{comment?.snippet.authorDisplayName}</Link>
        <span className='comment'> <Description description={comment?.snippet?.textOriginal} /> </span>
        </div>
    </div> 

    </div>
  )
}