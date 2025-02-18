import './videoCard.css'

const VideoCard = ({video}) => {
    // console.log({video})
  return (
    <div className='videoCard-main'>
        <div className='videoCard'>
         <img className='thumbnail' alt="thumbnail" src={video?.snippet?.thumbnails?.medium?.url} />
         <p className='videoTitle'> {video?.snippet?.title}</p>
         <p className='videoChannel'>{video?.snippet?.channelTitle}</p>
         <p className='videoViewCount'>{video?.statistics?.viewCount} views</p>
         <p className='videoPublishAt'>{video?.snippet?.publishedAt}</p>
        </div>
    </div>
  )
}

export default VideoCard