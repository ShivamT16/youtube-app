import { useContext } from "react";
import "./header.css"
import { AppContext } from "../context/AppContext";

const Header = () => {
    const {handleSideDrawer} = useContext(AppContext);

  return (
    <header className='header-main'>

        <div className="header-left">
        <img className="sideBar-icon" onClick={() => handleSideDrawer()} alt="icon" src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png' />

        <img className="youtube-icon" alt="logo" src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' />
        </div>

        <div className="header-center">
        <input className="search-input" type="text" />
        <button className="search-btn">🔍</button>
        </div>

        <img className="user-icon" alt="user" src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' />
    </header>
  )
}

export default Header