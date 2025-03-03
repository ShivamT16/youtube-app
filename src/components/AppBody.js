import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard';
import "./appBody.css"

const Body = () => {
  
  const [videos, setVideos] = useState([]);

  useEffect( () => {
    getVideo()
  }, [])

  const getVideo = async () => {
    try {
    const response = await fetch(YOUTUBE_VIDEOS_API)
    const data = await response.json()
    setVideos(data.items)
    } catch (error) {
    console.error(error)
    }
  }
   
  return (
    <div className='video-body'>
        {videos.map((videos) => 
        <VideoCard  key={videos?.id} video={videos} /> )}
    </div>
  )
}

export default Body