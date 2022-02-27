import React, { useContext, useEffect, useState } from 'react';
import "./cartRight.css";
import { AuthContext } from '../../landingPage/AuthContext';
import {Link} from "react-router-dom";
import axios from 'axios';
 
const CartRight = () => {

    const [checked, setChecked] = React.useState(false)
    const {coupon, toggleCoupon, totalPrice, setTotalPrice} = useContext(AuthContext); 

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] =  useState(0);

    const currentUser = JSON.parse(localStorage.getItem("currentUserId")) || "not found";
    console.log('currentUser:', currentUser)

    useEffect(()=>{
      getData()
     },[]);

     function getData(){
        var productTotal = 0;
        axios.get(`https://swiggybackendclone.herokuapp.com/cart/${currentUser._id}`)
        .then((res)=>{
          setCartItems(res.data)
          localStorage.setItem("currentCart",JSON.stringify(res.data))
          console.log(res.data,"from cart mongodb");
          res.data.forEach((item)=>{
            productTotal += item.price * item.quantity;
          })

          setTotal(productTotal);
          setTotalPrice(productTotal)
        })
     }



    return (
        <div>
        <div id="cartRightContainer">
          <div id="cartRightTopFixedDiv">
              <img className='topFoodImage' src={cartItems.length == 0 ? "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/vlazqq1pxzcvwlgiwxv5" : cartItems[0].restaurantImage } alt="" />
              <span className="topFoodName">
                <div className="topFoodNameTitle">Pizzas Pastas</div>
                <div className="topFoodNameContent">Marol Sakinaka</div>
              </span>
          </div>

          <div id="middleFooodDiv">
          {cartItems.map((item)=>{
        
        return <div className="FoodEachItemContainer">
            <img src="cartImages/dotSquare.png" alt="" className="vegSymbol" />

            <div id="itemNameDiv">
            <p className="eachItemName">{item.name}</p>
            </div>
            

            <div id="quantityUpdateDiv">
            <p className="eachItemQuantity" onClick={async()=>{
                console.log(`https://swiggybackendclone.herokuapp.com/cart/${item._id}`)
                if(item.quantity == 1){
                  await axios.delete(`https://swiggybackendclone.herokuapp.com/cart/${item._id}`)
                  .then((res)=>{
                      console.log(res.data);
                      getData()
                  })
                }else{
                 await axios.patch(`https://swiggybackendclone.herokuapp.com/cart/${item._id}`,{
                    quantity: item.quantity-1
                })
                .then((res)=>{
                  console.log(res.data)
                    getData()
                })
              }
            }}>-</p>
            <p className="eachItemQuantity">{item.quantity}</p>
            <p className="eachItemQuantity" onClick={async()=>{
               await axios.patch(`https://swiggybackendclone.herokuapp.com/cart/${item._id}`,{
                    quantity: item.quantity+1
                })
                .then((res)=>{
                    console.log(res.data)
                  getData()
                })
            }}>+</p>
            </div>
            
            <div id="itemPriceDiv">
            <p className="eachItemPrice">₹{item.price}</p>
            </div>
        </div>
    })}
     

         <span style={{display:"flex",marginTop:"1vw"}}> <svg className="suggestionSymbol" viewBox="0 0 32 32"><path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"></path></svg>
          <p className="anySuggestion">Any suggestions? We will pass it on...</p></span>
          
          <div id="contactDelivery">
             <div id="contactDeliveryTitleDiv">
             <input className="checkBoxContact" type="checkbox" name="" id="" onClick={()=>{
                 setChecked(!checked)
             }} />
             <p className="contactDeliveryTitle">Opt in for No-contact Delivery</p>
             </div>
             
             <div className="contactDeliveryContent">
             {!checked ? <p>
             Unwell, or avoiding contact? Please select no-contact delivery. 
             Partner will safely place the order outside your door (not for COD)
             </p> : 
             <p>
             Our delivery partner will call to confirm. Please ensure that your address has all the required details.
             </p> }
             </div>

         </div>
         <div id="applyDiv" onClick={()=>{
             toggleCoupon()
         }}>
                 <img className="discountIcon" src="https://w7.pngwing.com/pngs/363/333/png-transparent-computer-icons-percentage-percent-sign-discounts-sign-business-line-thumbnail.png" alt="" />
                 <p className="discountContent">Apply coupon</p>
             </div>

             <div id="billDetailDiv">
                 <p className="billDetailTitle">
                     Bill Details
                 </p>
                 <div id="billDetailContent">
                     <div className="billDetailRow">
                         <p className="billDetailRowContent">Item total</p>
                         <p className="billDetailRowContent">₹{total}</p>
                     </div>
                     <div className="billDetailRow" style={{borderBottom:"1px solid darkgray"}}>
                         <p className="billDetailRowContent">Delivery Fee | 3.9 kms</p>
                         <p className="billDetailRowContent">₹42</p>
                     </div>
                     <div className="billDetailRow" style={{borderBottom:"2px solid #262626",marginTop:"1vw"}}>
                         <p className="billDetailRowContent">Taxes & Charges</p>
                         <p className="billDetailRowContent">₹24</p>
                     </div>
                 </div>

             </div>
          </div>

          <div className="billDetailRow" style={{marginTop:"1vw",marginLeft:"2vw"}}>
                         <p className="billDetailRowContentLast">To pay</p>
                         <p className="billDetailRowContentLast">₹{total + 66}</p>
               </div>
        </div>
        <div id="cartRightBottom">
          <h2 className="cartRightBottomTitle">
          Review your order and address details to avoid cancellations
          </h2>
          <p className="cartRightBottomContent"><b>Note:</b> Please ensure your address and order details are correct. This order, if cancelled, is non-refundable.</p>
          <button id="readPolicy"><Link to="policy" style={{color:"#ec6148", textDecoration:"none"}}>Read Policy</Link></button>
        </div>
     </div>
    );
};

export default CartRight;