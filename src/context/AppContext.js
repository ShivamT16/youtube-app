import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [sideDrawer, setSideDrawer] = useState(true);

    const handleSideDrawer = () =>  setSideDrawer(!sideDrawer) 
    const closeSideDrawer = () => setSideDrawer(false)

    return(
        <AppContext.Provider value={{ sideDrawer, closeSideDrawer, handleSideDrawer }}>
            {children}
        </AppContext.Provider>
    )
}