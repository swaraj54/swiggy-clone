import { createContext, useState } from "react";

export const RouteContext = createContext();

export const RouteContextProvider =({children}) =>{
    const [routeControl, setRouteControl] = useState(true);
    const toggleRouteControl = (values)=>{
        setRouteControl(values)
    }
    return <RouteContext.Provider value={{routeControl, toggleRouteControl}}>{children}</RouteContext.Provider>
}