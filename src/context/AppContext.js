import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [sideDrawer, setSideDrawer] = useState(true);
    const [cacheResult, setCacheResult] = useState({});
    const [liveMessages, setLiveMessages] = useState([])

    const handleSideDrawer = () =>  setSideDrawer(!sideDrawer) 
    const closeSideDrawer = () => setSideDrawer(false)

    const handleCacheResult = (cacheItem) => setCacheResult({...cacheResult, ...cacheItem})

    const handleLiveChat = (messages) => {
        
        setLiveMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages.unshift(messages); 
            updatedMessages.splice(25, 1)
            return updatedMessages; 
          });
    }

    return(
        <AppContext.Provider value={{ sideDrawer, closeSideDrawer, handleSideDrawer, handleCacheResult, cacheResult, handleLiveChat, liveMessages }}>
            {children}
        </AppContext.Provider>
    )
}