import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [sideDrawer, setSideDrawer] = useState(true);
    const [cacheResult, setCacheResult] = useState({})

    const handleSideDrawer = () =>  setSideDrawer(!sideDrawer) 
    const closeSideDrawer = () => setSideDrawer(false)

    const handleCacheResult = (cacheItem) => setCacheResult({...cacheResult, ...cacheItem})

    return(
        <AppContext.Provider value={{ sideDrawer, closeSideDrawer, handleSideDrawer, handleCacheResult, cacheResult }}>
            {children}
        </AppContext.Provider>
    )
}