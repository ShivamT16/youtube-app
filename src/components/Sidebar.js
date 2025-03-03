import './sidebar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const isSidebarOpen = useSelector(store => store.app.isSidebarOpen)

  if(!isSidebarOpen) return null;

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