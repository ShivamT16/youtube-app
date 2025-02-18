import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [sideDrawer, setSideDrawer] = useState(true);

    const handleSideDrawer = () => { 
        setSideDrawer(!sideDrawer); }

    return(
        <AppContext.Provider value={{ sideDrawer, setSideDrawer, handleSideDrawer }}>
            {children}
        </AppContext.Provider>
    )
}