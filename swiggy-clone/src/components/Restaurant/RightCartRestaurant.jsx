import React, { useContext, useEffect, useState } from 'react';
import "../cart/cartRightContainer/cartRight.css";
import { CommonButton } from "../cart/greenButton/Button";
import axios from 'axios';
import { AuthContext } from '../landingPage/AuthContext'; 

const RightCartRestaurant = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const {change,toggleChange} = useContext(AuthContext)

    const currentUser = JSON.parse(localStorage.getItem("currentUserId")) || "not found";
    console.log('currentUser:', currentUser)
 
    useEffect(()=>{
      getData()
     },[change]); 

     function getData(){
        var productTotal = 0;
        axios.get(`https://swiggybackendclone.herokuapp.com/cart/${currentUser._id}`)
        .then((res)=>{
          setCartItems(res.data)
          console.log(res.data,"from cart mongodb");
          res.data.forEach((item)=>{
            productTotal += item.price * item.quantity;
          })

          setTotal(productTotal)
        })
     }


    return (
        <div>
             <div id="middleFooodDiv" style={{
                 width:"23vw",
                 height:"10vw",
                 overflowY: "scroll"
                 }}>
          {cartItems.map((item)=>{
        
              return <div className="FoodEachItemContainer">
                  <img src="cartImages/dotSquare.png" alt="" className="vegSymbol" />

                  <div id="itemNameDiv">
                  <p className="eachItemName">{item.name}</p>
                  </div>
                  

                  <div id="quantityUpdateDiv">
                  <p className="eachItemQuantity" onClick={async()=>{
                      console.log(`https://swiggybackendclone.herokuapp.com/cart/deleteitem/${item._id}`)
                      if(item.quantity == 1){
                        await axios.delete(`https://swiggybackendclone.herokuapp.com/cart/deleteitem/${item._id}`)
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
     


        </div>

        <div className="billDetailRow" style={{
              marginTop:"1vw",
              marginLeft:"2vw",
              display:"flex",
              fontSize: "0.8vw",
    color: "#262626",
    textTransform: "uppercase",
    fontWeight: "bold",
    justifyContent:"space-between",
    width:"19vw"
              }}>
                         <p className="billDetailRowContentLast">To pay</p>
                         <p className="billDetailRowContentLast">₹{total}</p>
                          
               </div>
               <div className="checkoutButton" style={{marginTop:"2vw"}}>
               <CommonButton onClick={()=>{
                   window.location.href="/cart"
               }}>CHECKOUT</CommonButton>
               </div>



        </div>
    );
};

export default RightCartRestaurant;