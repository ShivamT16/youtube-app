import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_URL } from '../utils/constants'
import VideoCard from './VideoCard';
import "./appBody.css"

const Body = () => {
  
  const [videos, setVideos] = useState([]);

  useEffect( () => {
    getVideo()
  }, [])

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.example.com/data")
  //   .then((json) => setData([...data, ...json]))
  //   .catch((error) => console.error(error));
  // }, [])

  // console.log(fetch("http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=bewajah"))

  const getVideo = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_URL)
    const data = await response.json()
    setVideos(data.items)
  }
   
  return (
    <div className='video-body'>
        {videos.map((videos) => 
        <VideoCard  key={videos?.id} video={videos} /> )}
    </div>
  )
}

export default Body