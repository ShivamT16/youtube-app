import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import "./watchPage.css"
import {LiveChat} from './LiveChat'
import ShowComments from './ShowComments'
import { YOUTUBE_VIDEO_COMMENTS_API, YOUTUBE_VIDEO_DETAIL_API } from '../utils/constants'
import { convertIntoMillions } from '../utils/utilsFunctions'
import Description from './Description'
import { closeSidebar } from '../utils/appSlice'
import { useDispatch } from 'react-redux'

const WatchPage = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const [videoDetail, setVideoDetail] = useState('')
    const [comments, setComments] = useState([])

    useEffect(() => {
      dispatch(closeSidebar())
      getVideoDetails();
      getComments();
      window.scrollTo(0 , 0)
    }, [])

    const getVideoDetails = async () => {
      try {
        const response = await fetch(YOUTUBE_VIDEO_DETAIL_API + searchParams.get('v'))
        const json = await response.json()
        setVideoDetail(json?.items[0])
      } 
      catch (error) {
        console.error(error)  
      }     
    } 

    const getComments = async () => {
      try {
        const response = await fetch(YOUTUBE_VIDEO_COMMENTS_API + searchParams.get('v'))
      const json = await response.json()
      setComments(json?.items)
      } 
      catch (error) {
        console.error(error)  
      }     
    }

  return (
    <div className='watchPage-main'>
       <div className='watchPage-container'>
        <div>
        <iframe
        className='videoFrame' 
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
         
         <div className='watchPage-video-btn'>
         <h3 className='watchPage-video-btn'> <img className="user-icon" alt="user" src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' />
          {videoDetail?.snippet?.channelTitle} </h3>
         
         <div className='watchPage-video-btn'>
          <button className='watchPage-like-Button'> <img className='watchPage-action-Btn' alt='likeBtn' src='https://cdn-icons-png.flaticon.com/128/9513/9513802.png' /> {convertIntoMillions(videoDetail?.statistics?.likeCount)} </button>
          <button className='watchPage-dislike-Button'> <img className='watchPage-action-Btn' alt='dislikeBtn' src='https://cdn-icons-png.flaticon.com/128/4466/4466315.png' /> </button>
         
          </div>
         </div>
         
         <div className='watchPage-video-description'>
          <h5 className='watchPage-video-details'> {videoDetail?.statistics?.viewCount} views, {Date(videoDetail?.snippet?.publishedAt).slice(0,15)} </h5>
          <Description description={videoDetail.snippet?.description} /> 
        </div>
        </div>

        <ShowComments comment={comments} />
    </div>
  )
}

export default WatchPage