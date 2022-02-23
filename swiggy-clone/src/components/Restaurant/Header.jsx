import React, { useState } from "react";
import "./headerStyle.css";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Button from '@mui/material/Button';
import CircleIcon from '@mui/icons-material/Circle';
import RestoAddress from "./RestoAddress";
import {RestoShotAddress} from "./RestoShotAddress";
import { RestaurantFooter } from "./RestaurantFooter";


var arr=[1,2,3,4,5]


const singleItem=()=>{
  return(
    <div id="restoSingleItmeDiv">
                <div className="restoVegIconDiv">
                  <div id="restocircleDiv"><CircleIcon id="restoVegIcon"/></div>
                  <h3>Salted</h3>
                  <div id="restoCatBodyItem1">
                    <span>₹200</span>
                    <span className="restoOffOrange">| 50% |</span>
                    <span className="restoOffOrange">USE TRYNEW</span>
                  </div>
                </div>
                <div id="restoCatBodyItem2">
                  <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ydxbhua4siqyh3jtxudd"  />
                  
                  <Button variant="contained"  className="restoImageBtn">ADD</Button>

                </div>
              </div>
  )
    
  
}




const Header = () => {


  const [navSize,setNavSize]=useState(false)

  const navChange=()=>{
    if(window.scrollY>=20)
    {
      setNavSize(true)
    }
    else{
      setNavSize(false)
    }
    console.log(navSize)
  }
  
  window.addEventListener('scroll',navChange)

 
  return (
    <div>
      <div id="restoHeader">
        <div id="restobanner">
          <img id={navSize?"restobannerimgSmall":"restobannerimg"} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fgh8slhx9pbiuctxkysf" />
        </div>
        <div id="restomid">
          <div>
            <h1>INOX</h1>
          </div>

          {navSize? <RestoShotAddress />:null}
          {navSize?null:<RestoAddress/>}
          
          {/* header mid search div */}
          <div id={navSize?"reatoMidSearchAfter":"reatoMidSearch"}>
            <div id="reatoMidSearchDiv1">
              <p>
                <SearchIcon />
              </p>
              <p>
                <input type="text" placeholder="Search for dishes..." />
              </p>
            </div>
            <div id="reatoMidSearchDiv2">
              <Checkbox color="success" className="reatoMidCheck" />
              <p>Veg Only</p>
            </div>
            <div id="reatoMidSearchDiv3">
              <FavoriteBorderIcon />
              <p>Favourite</p>
            </div>
          </div>
        </div>
        <div>
          <div id="restoOfferDiv">
            <div className="restoOfferTag">
              <b>OFFER</b>{" "}
            </div>
            <div>
              <div className="restoOfferFlex">
                <LocalOfferIcon />
                <div>50% off up to ₹100 | Use code TRYNEW</div>
              </div>
              <div className="restoOfferFlex">
                <LocalOfferIcon />
                <div>15% off upto ₹100 | Use SBIC100 Above ₹400</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="restoItemBody">
        <div id="restoCat" >
          <p>Recommended</p>
          <p>Popcorn</p>
          <p>Beverages</p>
        </div>
        <div id="restoCatBody">
          <h1>Recommended</h1>
          <div>5 ITEMS</div>
          <div>
          {
            arr.map((e)=>{
              return singleItem()
            })
          }
          </div>
        </div>
        <div id="restoCart">
          <h1>Cart Empty</h1>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"/>
          <p>Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
        </div>
      </div>
      <RestaurantFooter/>
    </div>
  );
};

export default Header;
