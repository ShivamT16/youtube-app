import { Link } from 'react-router-dom'
import './videoCard.css'

const VideoCard = ({video}) => {
    // console.log({video})
  return (
    <div className='videoCard-main'>
        <Link to={`/watch?v=${video?.id}`} className='videoCard'>
         <img className='thumbnail' alt="thumbnail" src={video?.snippet?.thumbnails?.medium?.url} />
         <p className='videoTitle'> {video?.snippet?.title}</p>
         <p className='videoChannel'>{video?.snippet?.channelTitle}</p>
         <p className='videoViewCount'>{video?.statistics?.viewCount} views * {video?.snippet?.publishedAt}</p>
         {/* <p className='videoPublishAt'>{video?.snippet?.publishedAt}</p> */}
        </Link>
    </div>
  )
}

export default VideoCard