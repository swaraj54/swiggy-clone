import React, { useContext } from 'react';
import "./cartRight.css";
import { AuthContext } from '../../landingPage/AuthContext';

const CartRight = () => {

    const [checked, setChecked] = React.useState(false)
    const {coupon, toggleCoupon} = useContext(AuthContext);

    const cartItems = [
        {
            itemName : "Margherita Pizza 8''",
            itemQuantity : 1,
            itemPrice : 199
        },
        {
            itemName : "King Pizza 8''",
            itemQuantity : 1,
            itemPrice : 99
        },
        {
            itemName : "Pappy Paneer Pizza 8''",
            itemQuantity : 1,
            itemPrice : 199
        },
    ]


    return (
        <div>
        <div id="cartRightContainer">
          <div id="cartRightTopFixedDiv">
              <img className='topFoodImage' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/vlazqq1pxzcvwlgiwxv5" alt="" />
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
                  <p className="eachItemName">{item.itemName}</p>
                  </div>
                  

                  <div id="quantityUpdateDiv">
                  <p className="eachItemQuantity">-</p>
                  <p className="eachItemQuantity">{item.itemQuantity}</p>
                  <p className="eachItemQuantity">+</p>
                  </div>
                  
                  <div id="itemPriceDiv">
                  <p className="eachItemPrice">₹{item.itemPrice}</p>
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
                         <p className="billDetailRowContent">₹497</p>
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
                         <p className="billDetailRowContentLast">₹400</p>
               </div>
        </div>
        <div id="cartRightBottom">
          <h2 className="cartRightBottomTitle">
          Review your order and address details to avoid cancellations
          </h2>
          <p className="cartRightBottomContent"><b>Note:</b> Please ensure your address and order details are correct. This order, if cancelled, is non-refundable.</p>
          <button id="readPolicy"> Read Policy</button>
        </div>
     </div>
    );
};

export default CartRight;