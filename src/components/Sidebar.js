import { useContext } from 'react'
import './sidebar.css'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const {sideDrawer} = useContext(AppContext);

  if(!sideDrawer) return null;

  return (
    <div className='sidebar-main'>
        <Link to="/" className='link-item'>Home</Link>
        <Link className='link-item'>Shorts</Link>
        <Link className='link-item'>Playlists</Link>
        <Link className='link-item'>Subscriptions</Link>
    </div>
  )
}

export default Sidebar