import { useContext, useEffect, useState } from "react";
import "./header.css"
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const {handleSideDrawer} = useContext(AppContext);
    // console.log(searchQuery);

    useEffect(() => {

     const timer = setTimeout(() => { getSearchSuggestions() }, 200);

     return() => {
       clearTimeout(timer())
     }

    }, [searchQuery])

    const getSearchSuggestions = async () => {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery)
      const json = await response.json()
      console.log(json[1]) 
    }

  return (
    <header className='header-main'>

        <div className="header-left">
        <img className="sideBar-icon" onClick={() => handleSideDrawer()} alt="icon" src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png' />

        <Link to="/">
        <img className="youtube-icon" alt="logo" src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' /> </Link>
        </div>

        <div className="header-center">
        <input className="search-input" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button className="search-btn">🔍</button>
        </div>

        <img className="user-icon" alt="user" src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' />
    </header>
  )
}

export default Header