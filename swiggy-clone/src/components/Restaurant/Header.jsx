import React, { useState } from "react";
import "./headerStyle.css";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Button from "@mui/material/Button";
import CircleIcon from "@mui/icons-material/Circle";
import RestoAddress from "./RestoAddress";
import { RestoShotAddress } from "./RestoShotAddress";
import { RestaurantFooter } from "./RestaurantFooter";
import { item } from "./data";

var arr = [
  "Recommended",
  "Burger",
  "French fries",
  "Garlic bread",
  "Patties",
  "Pizza",
  "Sandwich",
  "Shake",
];

const singleItem = (name, price, image) => {
  return (
    <div id="restoSingleItmeDiv">
      <div className="restoVegIconDiv">
        <div id="restocircleDiv">
          <CircleIcon id="restoVegIcon" />
        </div>
        <h4>{name}</h4>
        <div id="restoCatBodyItem1">
          <span>₹{price}</span>
          <span className="restoOffOrange">| 50% |</span>
          <span className="restoOffOrange">USE TRYNEW</span>
        </div>
      </div>
      <div id="restoCatBodyItem2">
        <img src={image} />

        <Button variant="contained" className="restoImageBtn">
          ADD
        </Button>
      </div>
    </div>
  );
};

const Header = () => {
  const [navSize, setNavSize] = useState(false);

 
  const scrto=(e)=>{
    console.log(e.target.textContent)
    var vi=document.getElementById(e.target.textContent)
    
    vi.scrollIntoView()
    // window.scrollTo(0, 100);
    window.scrollBy(0, -200);
    classChange(e.target.textContent)
  }

  
  const classChange=(clas)=>{
    // console.log(clas)
    for(var i=0;i<arr.length;i++)
    {
      var elm=document.getElementById(arr[i]+"add")
      // console.log(clas,arr[i])
      if(clas==arr[i])
      {
        
        elm.style.color="orange"
        elm.style.borderRight = "3px solid  orange";
        
        
        console.log(elm.style)
        
      }
      else{
        elm.style.color="black"
        elm.style.borderRight = "none";
       
      }
    }
  }
  const navChange = () => {
    if (window.scrollY >= 20) {
      setNavSize(true);
    } else {
      setNavSize(false);
    }
   
   
  };

  const scrollChange=()=>{
    var scroll=window.scrollY
    if(scroll>=0 && scroll<=2185 )
    {
      classChange("Recommended")
      
    }
    else if(scroll>=2185 && scroll<=4650 )
    {
    classChange("Burger")    
    }
    else if(scroll>=4650&& scroll<=5660 )
    {
      classChange("French fries")
    }
    else if(scroll>=5660 && scroll<=6660)
    {
      classChange("Garlic bread")
    }
    else if(scroll>=6660&& scroll<=8770 )
    {
      classChange("Patties")
    }
    else if(scroll>=8770  && scroll<=13700 )
    {
      classChange("Pizza")
    }
    else if(scroll>=13700 && scroll<=18036 )
    {
      classChange("Sandwich")
    }
    else if(scroll>=18030 && scroll<=18888 )
    {
      classChange("Shake")
    }

    console.log(scroll)
  }

  window.addEventListener("scroll", navChange);
  window.addEventListener("scroll", scrollChange);

  return (
    <>
    <div>
      <div id="restoHeader">
        <div id="restobanner">
          <img
            id={navSize ? "restobannerimgSmall" : "restobannerimg"}
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fgh8slhx9pbiuctxkysf"
          />
        </div>
        <div id="restomid">
          <div>
            <h1>INOX</h1>
          </div>

          {navSize ? <RestoShotAddress /> : null}
          {navSize ? null : <RestoAddress />}

          {/* header mid search div */}
          <div id={navSize ? "reatoMidSearchAfter" : "reatoMidSearch"}>
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
          <div id={navSize?"restoOfferDivAfter":"restoOfferDiv"}>
            <div className={navSize?"restoOfferTagAfter":"restoOfferTag"}>
              <b>OFFER</b>
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
        <div id="restoCat">
          {arr.map((e) => {
            
            return <p id={e+"add"} onClick={(event)=>{scrto(event)}}>{e}</p>;
          })}
        </div>
        <div id="restoCatBody">
          <div>
          {
            arr.map((e) => {
              // console.log(e);
              // console.log(item[e]);
              return (
                <>
                  <h1 className="mapSmallItemH1" id={e}>{e}</h1>
                  <div className="mapSmallItem" >{item[e].length} Items</div>
                  {item[e].map((x) => {
                    return singleItem(x.name, x.price, x.image);
                  })}
                </>
              );
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
      <div>
     
      </div>

       
      
    </div>

    <RestaurantFooter />

    </>
    
  );
};

export default Header;
