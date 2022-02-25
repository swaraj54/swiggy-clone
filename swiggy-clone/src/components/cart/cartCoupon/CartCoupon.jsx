import React, { useContext, useEffect, useState } from 'react';
import "./cartCoupon.css";
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../../landingPage/AuthContext';
import { CommonButton } from '../greenButton/Button';
import Button from '@mui/material/Button';
import CouponTerm from "../couponTerm/CouponTerm";


const CartCoupon = () => {

    const {coupon, toggleCoupon} = useContext(AuthContext);
    const [term, setTerm] = useState(-1)

    const couponArray = [{
        couponImg: "cartImages/paytm.png",
        couponName: "PAYTMSAVE",
        couponDetail:"Get assured cashback up to ₹100 using Paytm",
        applicableAbove: "Applicable on Paytm wallet transactions above ₹399",
    },
    {
        couponImg: "cartImages/freeCharge.png",
        couponName: "FREECHARGE",
        couponDetail:"Get 20% discount using RuPay",
        applicableAbove: "Maximum discount up to ₹100 on orders above ₹129",
    },
    {
        couponImg: "cartImages/razorpayLogo.png",
        couponName: "RAZORPAY",
        couponDetail:"Get 25% discount using Razorpay payment",
        applicableAbove: "Maximum discount up to ₹125 on orders above ₹299",
    },
    {
        couponImg: "cartImages/paytm.png",
        couponName: "PAYTMSAVE",
        couponDetail:"Get assured cashback up to ₹100 using Paytm",
        applicableAbove: "Applicable on Paytm wallet transactions above ₹399",
    },
    {
        couponImg: "cartImages/freeCharge.png",
        couponName: "FREECHARGE",
        couponDetail:"Get 20% discount using RuPay",
        applicableAbove: "Maximum discount up to ₹100 on orders above ₹129",
    },
    {
        couponImg: "cartImages/razorpayLogo.png",
        couponName: "RAZORPAY",
        couponDetail:"Get 25% discount using Razorpay payment",
        applicableAbove: "Maximum discount up to ₹125 on orders above ₹299",
    }
]


    return (
        <div className='couponApplyDiv' style={{right : coupon ? "0" : "-36vw"}}>
           <div className="couponApplyContentDiv">
           <CloseIcon className="closeIcon" onClick={()=>{
               toggleCoupon();
               setTerm(-1)
           }} />

           <div id="couponTopInputDiv">
                <input id="inputBox" type="text" placeholder='Enter coupon code' style={{ backgroundColor: "transparent"}} />
                   <CommonButton className="foodButton">Apply</CommonButton>
           </div>

           <div id="couponAvailableBox">
               <h3 id="couponAvailableBoxTitle">Available coupon</h3>
{/* mapping  */} 
                {
                    couponArray.map((item,index)=>{
                        return <div className="differentCouponDiv">
                   <div className="couponButtonShow">

                       <div className="couponButtonShowImgDiv">
                       <img className="couponButtonShowImg" src={item.couponImg} alt="" />
                       </div>
                       
                       <h2 className="couponButtonShowName">{item.couponName}</h2>
                   </div>
                   <h3 className="couponDetailsContent">{item.couponDetail}</h3>
                   <h4 className="couponApplyAbove">{item.applicableAbove}</h4>
                   <Button className="moreButton" onClick={()=>{
                       setTerm(index);
                   }}>+ More</Button> <br />
                   <div className="hiddenTermDiv" style={{display: index === term ? "block" : "none"}}>
                    <CouponTerm />
                   </div>
                   <Button variant="outlined" className="applyCouponOrangeButton">APPLY COUPON</Button>
               </div>
                    })
                }

           </div>    

           </div>
        </div>
    );
};

export default CartCoupon;