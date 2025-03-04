import { useEffect, useState } from "react";
import "./header.css"
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState("")
    const [searchSuggestion, setSearchSuggestions] = useState([])
    const searchCache = useSelector(store => store.search)

    useEffect(() => {

     const timer = setTimeout(() => { 
       if(searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery])
       }
       else{
      getSearchSuggestions()} 
      }, 200);

     return() => {
       clearTimeout(timer)
     }

    }, [searchQuery])

    const getSearchSuggestions = async () => {
      try {
        const response = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await response.json()
        setSearchSuggestions(json[1])
        // handleCacheResult({[searchQuery]: json[1]})
        dispatch(cacheResults({[searchQuery]: json[1]}))
      } catch (error) {
        console.error(error)
      }
    }

  return (
    <header className='header-main'>

        <div className="header-left">
        <img className="sideBar-icon" onClick={() => dispatch(toggleSidebar())} alt="icon" src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png' />

        <Link to="/">
        <img className="youtube-icon" alt="logo" src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' /> </Link>
        </div>

        <div>
         <div className="header-center">
          <input className="search-input" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button className="search-btn">🔍</button>
         </div>

         { searchSuggestion.length > 0 &&
         <div className="suggestions">
          { searchSuggestion.map((suggestions) => <Link to={"/results?search_query="+suggestions} onClick={() => setSearchSuggestions([])} className="suggestion-list" key={suggestions}>{suggestions} </Link>)}
         </div> }
        </div>

        <img className="user-icon" alt="user" src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' />

    </header>
  )
}

export default Header