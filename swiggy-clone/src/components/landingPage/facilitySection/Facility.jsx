import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import "./facility.css";


const Facility = () => {

    const {auth,signupOtp, toggleAuthDiv,toggleSignupOtp,loginOtp,toggleLoginOtp} = useContext(AuthContext);

    return (
        <div className='landingPageFacilityDiv' onClick={()=>{
           if(auth){
            toggleAuthDiv()
           } 
           if(signupOtp){
           toggleSignupOtp(false)
           }
            if(loginOtp){
                toggleLoginOtp(false)
            }


        }} style={{opacity: auth ? "0.9" : "1", backgroundColor: auth ? "rgb(112, 112, 112)" : "#2b1e16"}}>
           <div id="flexContentDiv">
            <div className="facilityDivItems">
                <img src="landingImages/noMinOrder.png" alt="" />
                <p className="facilityTitle">No minimum order</p>
                <p className="facilityContent">Order in for yourself or for the group, with no restrictions on order value</p>
            </div>
            <div className="facilityDivItems">
                <img src="landingImages/liveOrder.png" alt="" />
                <p className="facilityTitle">Live Order Tracking</p>
                <p className="facilityContent">Know where your order is at all times, from the restaurant to your doorstep</p>
            </div>
            <div className="facilityDivItems">
                <img src="landingImages/superFastDelivery.png" alt="" />
                <p className="facilityTitle">Lightning-Fast Delivery</p>
                <p className="facilityContent">Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
            </div>
            </div>
        </div>
    );
};

export default Facility;