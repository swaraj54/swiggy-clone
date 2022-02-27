import React, { useContext, useEffect, useState } from 'react';
import "./authentication.css";
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../AuthContext';
import axios from 'axios';


const Authentication = ({ whichDiv}) => {

    const [signUp, setSignUp] = useState(true);
    const [referral, setReferral] = useState(false);
    const [currentOtp, setCurrentOtp] = useState(0)

    const {auth, toggleAuthDiv, signupOtp,toggleSignupOtp,loginOtp,toggleLoginOtp} = useContext(AuthContext);
    

    useEffect(()=>{
      whichDiv === "signup" ? setSignUp(true) : setSignUp(false)
    },[whichDiv])


// signup data send 

const [signupUser, setSignupUser] = useState({
      phone:"",
      name:"",
      email:"",
      password:""
    })

   async function handleSignUpSubmit(e){
       e.preventDefault()
   console.log(signupUser)
   axios.post("https://swiggybackendclone.herokuapp.com/auth/newuser", signupUser)
   .then((res)=>{

       if(res.data === "userExist"){
           alert("User Exist Do login");
           window.location.href="/"
       }else{
       alert(res.data)   
       setCurrentOtp(res.data);
       console.log(res) 
       }

   })
   .catch((e)=>{
       console.log(e)
   })

    }

    function signupHandleChange(e) {
    const { name, value } = e.target;

    setSignupUser({ ...signupUser, [name]: value });
  }

  const { name, email, password , phone } = signupUser;


//sign up data verify

const [otpVerify, setOtpVerify] = useState(" ")

  async function handleVerifySignUpSubmit(e){
     e.preventDefault()

     if(currentOtp == otpVerify){
     axios.post("https://swiggybackendclone.herokuapp.com/users", {
         phone: signupUser.phone,
         name: signupUser.name,
         email: signupUser.email,
         password: signupUser.password
     })
   .then((res)=>{
       console.log(res.data)

       // redirect after authentication successful
       localStorage.setItem('currentUserId', JSON.stringify(res.data));
       window.location.href="/location/city=Chennai"
   })
   .catch((e)=>{
       alert(e.message)
   })
}
else{
    alert("Otp not matched");
}
  }




  // log in data & processing

  const [loginPhone, setLoginPhone] = useState("");
  const [loginDataOtp, setLoginDataOtp] = useState("");
  const [userOtp, setUserOtp] = useState("")

  async function loginSubmit(e){
      e.preventDefault()
        await axios.post("https://swiggybackendclone.herokuapp.com/auth/verifyuser",{phone:loginPhone})
        .then((res)=>{
           if(res.data == "notExist"){
               alert("User Not Exist")
              window.location.href = "/";
           }else{
               alert(res.data)
            setLoginDataOtp(res.data)
           }

        })
        .catch((e)=>{
            alert(e.message)
        })
  }


  // log in data verify

async function verifyExistingUser(e){
    e.preventDefault();

    if(userOtp == loginDataOtp){
     // redirect after authentication successful
    
     await axios.post("https://swiggybackendclone.herokuapp.com/auth/getverifyuser",{phone:loginPhone})
     .then((res)=>{
         console.log(res.data);


         localStorage.setItem('currentUserId', JSON.stringify(res.data));
         window.location.href="/location/city=delhi";
     })
     .catch((e)=>{
        alert(e.message)
    })
    }
    else{
        alert("Invalid OTP");
    }
}



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
                 or <span onClick={()=>{
                     setSignUp(false);
                     toggleSignupOtp(false);
                     toggleLoginOtp(false);
                     }}>login to your account</span>
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
                 or <span onClick={()=>{
                     setSignUp(true);
                     toggleSignupOtp(false);
                     toggleLoginOtp(false);
                     }}>Create an account</span>
                 <br />
                 <button className="emptyButton"></button>
                 </p>
                 
               </div>
               <img className="signUpRightImage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
           </div>


{/* sign up section  */}
       <form action="" onSubmit={(e)=>{
            handleSignUpSubmit(e);
            toggleSignupOtp(true);
       }}>
           <div id="signupInputDiv" style={{display:signUp && !signupOtp ? "flex" : "none"}}>
               <div className="inputItem">
                   <input type="text" name="phone" value={phone} onChange={signupHandleChange} placeholder='Phone number' required />
               </div>
               <div className="inputItem" >
                   <input type="text" name="name" value={name} onChange={signupHandleChange} placeholder='Name' required />
               </div>
               <div className="inputItem" >
                   <input type="text" name="email" value={email} onChange={signupHandleChange} placeholder='Email' required />
               </div>
               <div className="inputItem">
                   <input type="password" name="password" value={password} onChange={signupHandleChange} placeholder='Password' minLength="6" required />
               </div>
               <div className="inputItem referralInputBox" style={{display: referral && !signupOtp ? "block" : "none"}}>
                   <input type="text" placeholder='Referral code' />
               </div>

               <div id="referralButtonDiv" style={{display:signUp && !signupOtp ? "flex" : "none", marginTop: "0.3vw"}} onClick={()=>{
                   setReferral(!referral)
               }}>
               <a className="referralButton">Have a referral code?</a>
           </div>

           </div>

           <div id="continueButtonDiv" style={{display: signUp && !signupOtp ? "block" : "none"}}>
               <button type="submit" className='continueButton'>continue</button>
               <p className="termCondition" >
               By creating an account, I accept the <span> Terms & Conditions & Privacy Policy</span>
               </p>

           </div>

        </form>


{/* sign up verify otp */}
        <form action="" onSubmit={(e)=>{
            handleVerifySignUpSubmit(e)
       }}>
           <div id="signupInputDiv" style={{display: signUp && signupOtp ? "flex" : "none"}}>
               <div className="inputItem">
                   <input type="text" name="phone" value={phone} placeholder='Phone number' required />
               </div>

               <div className="inputItem">
                   <input type="text" name="otp" value={otpVerify} onChange={(e)=>{
                       setOtpVerify(e.target.value)
                   }} placeholder='Enter OTP' required />
               </div>
           </div>

           <div id="continueButtonDiv" style={{display: signUp && signupOtp ? "block" : "none"}}>
               <button type="submit" className='continueButton'>verify OTP</button>
           </div>

        </form>




{/* //login section */}
        <form action="" onSubmit={(e)=>{
            loginSubmit(e)
        }}>
           <div id="signupInputDiv" style={{display:!signUp && !loginOtp ? "block" : "none"}}  >
               <div className="inputItem">
                   <input type="text" placeholder='Phone number' value={loginPhone} onChange={(e)=>{
                       setLoginPhone(e.target.value);
                   }} required />
               </div>
           </div>

           <div id="continueButtonDiv" style={{display:!signUp && !loginOtp ?  "block" : "none"}}>
               <button type="submit" className='continueButton' onClick={()=>{
                   toggleLoginOtp(true)
               }}>continue</button>

               <p className="termCondition">
               By creating an account, I accept the <span> Terms & Conditions & Privacy Policy</span>
               </p>

           </div>
           </form>


{/* login otp verify */}
<form action="" onSubmit={(e)=>{
            verifyExistingUser(e)
        }}>
           <div id="signupInputDiv" style={{display:!signUp && loginOtp ?  "flex" : "none" }} >
               <div className="inputItem">
                   <input type="text" placeholder='Phone number' value={loginPhone} required  />
               </div>
               <div className="inputItem" required >
                   <input type="text" placeholder='Enter OTP' value={userOtp} onChange={(e)=>{
                       setUserOtp(e.target.value)
                   }} required  />
               </div>
           </div>

           <div id="continueButtonDiv" style={{display:!signUp && loginOtp ? "block" :  "none" }} >
                <button type="submit" className='continueButton'>verify OTP</button>
           </div>
           </form>


           </div>
        </div>
    );
};

export default Authentication;