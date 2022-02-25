import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [auth, setAuth] = useState(false);
    const [coupon, setCoupon] = useState(false);
    const [signupOtp, setSignupOtp] = useState(false);
    const [loginOtp, setLoginOtp] = useState(false);
    
    const toggleAuthDiv = ()=>{
       setAuth(!auth)
    }

    const toggleCoupon = () =>{
        setCoupon(!coupon)
    }

    const toggleSignupOtp = (value) =>{
        setSignupOtp(value)
    }

    const toggleLoginOtp = (value) =>{
        setLoginOtp(value)
    }


    return <AuthContext.Provider value={{auth,coupon,signupOtp,loginOtp,toggleLoginOtp, toggleAuthDiv,toggleCoupon,toggleSignupOtp}}>{children}</AuthContext.Provider>
} 