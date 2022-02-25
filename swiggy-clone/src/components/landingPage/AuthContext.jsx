import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [auth, setAuth] = useState(false);
    const [coupon, setCoupon] = useState(false);
    
    const toggleAuthDiv = ()=>{
       setAuth(!auth)
    }

    const toggleCoupon = () =>{
        setCoupon(!coupon)
    }


    return <AuthContext.Provider value={{auth,coupon, toggleAuthDiv,toggleCoupon}}>{children}</AuthContext.Provider>
} 