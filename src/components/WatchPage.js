import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useSearchParams } from 'react-router-dom'
import "./watchPage.css"

const WatchPage = () => {
    const {closeSideDrawer} = useContext(AppContext)
    const [searchParams] = useSearchParams();

    useEffect(() => {
      closeSideDrawer()
    }, [])

  return (
    <div className='watchPage-main'>
        <div >
        <iframe
        className='videoFrame' 
        width="800" 
        height="450" 
        src={"https://www.youtube.com/embed/" + searchParams.get('v')} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </div>
        
    </div>
  )
}

export default WatchPage