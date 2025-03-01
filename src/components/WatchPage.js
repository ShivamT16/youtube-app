import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useSearchParams } from 'react-router-dom'
import "./watchPage.css"
import {LiveChat} from './LiveChat'
import ShowComments from './ShowComments'
import { YOUTUBE_VIDEO_COMMENTS_API, YOUTUBE_VIDEO_DETAIL_API } from '../utils/constants'
import { convertStringsIntoLink } from '../utils/utilsFunctions'

const WatchPage = () => {
    const {closeSideDrawer} = useContext(AppContext)
    const [searchParams] = useSearchParams();
    const [videoDetail, setVideoDetail] = useState('')
    const [comments, setComments] = useState([])

    useEffect(() => {
      closeSideDrawer();
      getVideoDetails();
      getComments();
      window.scrollTo(0 , 0)
    }, [])

    const getVideoDetails = async () => {
      const response = await fetch(YOUTUBE_VIDEO_DETAIL_API + searchParams.get('v'))
      const json = await response.json()
      setVideoDetail(json?.items[0])
    } 

    const getComments = async () => {
      const response = await fetch(YOUTUBE_VIDEO_COMMENTS_API + searchParams.get('v'))
      const json = await response.json()
      setComments(json?.items)
    }

  return (
    <div className='watchPage-main'>
       <div className='watchPage-container'>
        <div >
        <iframe
        className='videoFrame' 
        width="850" 
        height="500" 
        src={"https://www.youtube.com/embed/" + searchParams.get('v')} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </div>
        
          <LiveChat />
        </div>

        <div className='watchPage-video-detail'>
         <h2> {videoDetail?.snippet?.title} </h2>
         <p className='watchPage-video-description' style={{whiteSpace: "pre-wrap"}}> {convertStringsIntoLink(videoDetail.snippet?.description)} </p>
        </div>

        <ShowComments comment={comments} />
    </div>
  )
}

export default WatchPage