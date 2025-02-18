import { useContext } from 'react'
import './sidebar.css'
import { AppContext } from '../context/AppContext'

const Sidebar = () => {

  const {sideDrawer} = useContext(AppContext);

  if(!sideDrawer) return null;

  return (
    <div className='sidebar-main'>
        <ul>Home</ul>
        <ul>Shorts</ul>
        <ul>Playlists</ul>
        <ul>Subscriptions</ul>
    </div>
  )
}

export default Sidebar