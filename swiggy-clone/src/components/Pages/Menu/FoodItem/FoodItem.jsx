import React, { useEffect, useState } from 'react'
import './FoodItem.css'
import {useSelector} from 'react-redux'
import StarIcon from '@mui/icons-material/Star';


function FoodItem() {
  const foodItems = useSelector((state) => state.foodItemsReducer.foodItems);
  console.log('foodItems:', foodItems)
 
  return (
    <div className='food_items__container'>
    <div className="foot_items_main_container">
{foodItems.map((firstData)=>{
return <div className='foodItem_container' onClick={()=>{
  localStorage.setItem("selectedFood",JSON.stringify(firstData));
  window.location.href="/restaurantmenu"
}}>

      {/* Image Container */}
      <div className="img_container">
         <img src={firstData.image_url} alt="" style={{width:"254px",height:"160px",  marginLeft: "1.5vw"}}/> 
      </div>

      {/* Title Container */}
      <div className="title_container">
        <p id='title'>{firstData.title}</p>
      </div>
       

       {/* Categories Container */}
       <div className="categories_container">
         
          <span>{firstData.categories},</span>

       </div>


       {/* filter section */}
       <div className="filterSection">
         <div className="rating_container">
           
           <p style={
             {
               border:"1px solid #48C479n",
               backgroundColor:"#48C479",
               padding:"2px 5px",
               color:"#FFFFFF",
               display:"flex"
             }
           }><span>{<StarIcon sx={{ fontSize: 15 }}/>}</span>{firstData.rating}</p>
         </div>
         <div className="timming_container">
           <p>{firstData.delivery_time}</p>
         </div>
         <div className="price_container">
           <p>₹{firstData.price} for two</p>
         </div>
       </div>



       {/* Offer Section */}
       <div className="offerSection">
         <p><span><img src="offer.png" alt="" /></span> {firstData.offer} off | Use {firstData.coupon_code}</p>
       </div>

       {/* Quick View */}
       <div className="quickView">
         <p>QUICK VIEW</p>
         
       </div>

      
      {/* Food Menu description */}
      <div className="food_description">
        
      </div>


    </div>
    })}
    </div>
    </div>
  )
}

export default FoodItem
