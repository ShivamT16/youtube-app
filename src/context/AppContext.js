import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [sideDrawer, setSideDrawer] = useState(true);
    const [cacheResult, setCacheResult] = useState({});
    const [liveMessages, setLiveMessages] = useState([{name: "adam", message: "youtube"}])

    const handleSideDrawer = () =>  setSideDrawer(!sideDrawer) 
    const closeSideDrawer = () => setSideDrawer(false)

    const handleCacheResult = (cacheItem) => setCacheResult({...cacheResult, ...cacheItem})

    const handleLiveChat = (messages) => {
        setLiveMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages.unshift(messages); 
            return updatedMessages; 
          });
    }

//    console.log(fetch('https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=RouIzAuPGGU&key=AIzaSyDUWIOYFuKpWJ1oMPgUXC8NxVbmwPMmEiU'))
//  console.log(fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=RouIzAuPGGU&key=AIzaSyDUWIOYFuKpWJ1oMPgUXC8NxVbmwPMmEiU'))

    return(
        <AppContext.Provider value={{ sideDrawer, closeSideDrawer, handleSideDrawer, handleCacheResult, cacheResult, handleLiveChat, liveMessages }}>
            {children}
        </AppContext.Provider>
    )
}