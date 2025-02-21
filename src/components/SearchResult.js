import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants'
import './searchResult.css'

const SearchResult = () => {

  const [searchedParams] = useSearchParams()
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getVideos()
  }, [searchedParams])

  const getVideos = async() => {
    const results = await fetch(YOUTUBE_SEARCH_RESULTS_API+searchedParams.get('search_query'))
    const json = await results.json()
    setSearchResults(json?.items)
  }

  return (
    <div className='searchResult-main'>
     {searchResults.map((searchResults) => 
      <Link className='searchResult-card' to={`/watch?v=${searchResults?.id?.videoId}`}> 
       <img className='searchResult-image' alt="thumbnail" src={searchResults?.snippet?.thumbnails?.medium?.url} />
       <div className='searchResult-details'>   
        <p>{searchResults?.snippet?.title}</p>
        <p>{searchResults?.snippet?.channelTitle}</p>
        <p className='searchResult-description'>{searchResults?.snippet?.description}</p>
       </div>
      </Link> )}       
    </div>
  )
}

export default SearchResult