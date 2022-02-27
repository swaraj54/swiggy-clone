import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [auth, setAuth] = useState(false);
    const [coupon, setCoupon] = useState(false);
    const [signupOtp, setSignupOtp] = useState(false);
    const [loginOtp, setLoginOtp] = useState(false);
    const [change, setChange] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    const toggleChange = ()=>{
        var randomNum = Math.random(100)
        setChange(randomNum)
     }
    
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


    return <AuthContext.Provider value={{auth,coupon,signupOtp,loginOtp,change,totalPrice, setTotalPrice,toggleChange,toggleLoginOtp, toggleAuthDiv,toggleCoupon,toggleSignupOtp}}>{children}</AuthContext.Provider>
} 