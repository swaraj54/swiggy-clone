import React, { useContext, useEffect, useState } from 'react';
import "./authentication.css";
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../AuthContext';


const Authentication = ({ whichDiv}) => {

    const [signUp, setSignUp] = useState(true);
    const {auth, toggleAuthDiv} = useContext(AuthContext);

    useEffect(()=>{
      whichDiv === "signup" ? setSignUp(true) : setSignUp(false)
    },[whichDiv])


    return (
        <div className='authenticationDiv'   style={{right : auth ? "0" : "-37vw"}}>
           <div className="authenticationContentDiv">
           <CloseIcon className="closeIcon" onClick={()=>{
               toggleAuthDiv()
           }} />

           <div id="signUpButtonDiv" style={{display:signUp ? "flex" : "none"}}>
               <div id="signupLeftContent">
                 <h2 className="authenticationTitle">
                     Sign up
                 </h2>
                 <p className="otherAuthicationOption">
                 or <span onClick={()=>{setSignUp(false)}}>login to your account</span>
                 <br />
                 <button className="emptyButton"></button>
                 </p>
                 
               </div>
               <img className="signUpRightImage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
           </div>

           <div id="signUpButtonDiv" style={{display:signUp ? "none" : "flex"}}>
               <div id="signupLeftContent">
                 <h2 className="authenticationTitle">
                     Login
                 </h2>
                 <p className="otherAuthicationOption">
                 or <span onClick={()=>{setSignUp(true)}}>Create an account</span>
                 <br />
                 <button className="emptyButton"></button>
                 </p>
                 
               </div>
               <img className="signUpRightImage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
           </div>

           <div id="signupInputDiv" style={{display:signUp ? "flex" : "none"}}>
               <div className="inputItem">
                   <input type="text" placeholder='Phone number' />
               </div>
               <div className="inputItem">
                   <input type="text" placeholder='Name' />
               </div>
               <div className="inputItem">
                   <input type="text" placeholder='Email' />
               </div>
               <div className="inputItem">
                   <input type="text" placeholder='Password' />
               </div>
               <div className="inputItem referralInputBox">
                   <input type="text" placeholder='Referral code' />
               </div>
           </div>

           <div id="signupInputDiv" style={{display:signUp ? "none" : "flex"}}>
               <div className="inputItem">
                   <input type="text" placeholder='Phone number' />
               </div>
           </div>

           <div id="referralButtonDiv" style={{display:signUp ? "block" : "none"}}>
               <a className="referralButton">Have a referral code?</a>
           </div>

           <div id="continueButtonDiv">
               <button className='continueButton'>continue</button>

               <p className="termCondition">
               By creating an account, I accept the <span> Terms & Conditions & Privacy Policy</span>
               </p>
           </div>

           </div>
        </div>
    );
};

export default Authentication;