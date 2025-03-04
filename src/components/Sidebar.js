import './sidebar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const isSidebarOpen = useSelector(store => store.app.isSidebarOpen)

  if(!isSidebarOpen) return null;

  return (
    <>
    <div className='sidebar-main'>
        <Link to="/" className='link-item'> <img className='sidebar-icon' alt='home' src='https://cdn-icons-png.flaticon.com/128/20/20176.png' /> Home</Link>
        <Link className='link-item'> <img className='sidebar-icon' alt='shorts' src='https://cdn-icons-png.flaticon.com/128/1101/1101793.png' /> Shorts</Link>
        <Link className='link-item'> <img className='sidebar-icon' alt='playlist' src='https://cdn-icons-png.flaticon.com/128/9297/9297069.png' /> Playlists</Link>
        <Link className='link-item'> <img className='sidebar-icon' alt='subscription' src='https://cdn-icons-png.flaticon.com/128/5048/5048251.png' /> Subscriptions</Link>
        <Link className='link-item'> <img className='sidebar-icon' alt='account' src='https://cdn-icons-png.flaticon.com/128/1144/1144760.png' /> You</Link>
        <Link className='link-item' to='https://github.com/ShivamT16/youtube-app' target='_blank' > <img className='sidebar-icon' alt='account' src='https://cdn-icons-png.flaticon.com/128/2111/2111432.png' /> GitHub</Link>
    </div>
    <div className='second-sidebar-main'>
        <Link to="/" className='link-items'> <img className='sidebar-icons' alt='home' src='https://cdn-icons-png.flaticon.com/128/20/20176.png' /> <p>Home</p> </Link>
        <Link className='link-items'> <img className='sidebar-icons' alt='shorts' src='https://cdn-icons-png.flaticon.com/128/1101/1101793.png' /> <p>Shorts</p> </Link>
        <Link className='link-items'> <img className='sidebar-icons' alt='playlist' src='https://cdn-icons-png.flaticon.com/128/9297/9297069.png' /> <p>Playlists</p> </Link>
        <Link className='link-items'> <img className='sidebar-icons' alt='subscription' src='https://cdn-icons-png.flaticon.com/128/5048/5048251.png' /> <p>Subscriptions</p> </Link>
        <Link className='link-items'> <img className='sidebar-icons' alt='account' src='https://cdn-icons-png.flaticon.com/128/1144/1144760.png' /> <p>You</p> </Link>
        <Link className='link-items' to='https://github.com/ShivamT16/youtube-app' target='_blank'> <img className='sidebar-icons' alt='account' src='https://cdn-icons-png.flaticon.com/128/2111/2111432.png' /> <p>You</p> </Link>
    </div>
    </>
  )
}

export default Sidebar