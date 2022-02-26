import { createContext, useState } from "react";

export const RouteContext = createContext();

export const RouteContextProvider =({children}) =>{
    const [routeControl, setRouteControl] = useState(true);
    const [cityName, setCityName] = useState("kolkata")

    const toggleRouteControl = (values)=>{
        setRouteControl(values)
    }

    const addCityName = (city)=>{
        setCityName(city)
    }


    return <RouteContext.Provider value={{routeControl, toggleRouteControl, cityName, addCityName}}>{children}</RouteContext.Provider>
}