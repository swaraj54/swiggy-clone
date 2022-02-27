import React from 'react'
import Banner from '../../Banner/Banner'
import FoodItems from '../Menu/FoodItems/FoodItems';
import { Link} from 'react-router-dom';
import './Offers.css';
import Navbar from '../../Navbar/Navbar';

function RestaurantOffers() {
  return (
    <div>
           <Navbar />
   
    <div className='restaurant_offer_container'>
      {/* <h1>Hello I am offer page</h1> */}
      <Banner heading='Offers for you' desc='Explore top deals and offers exclusively for you!' color='#005062' flag='true'/>


       {/* Offer Navbar */}
       <div className="offer_nav_container">
          <div className="offer_nav_main_container">
              <ul className='nav_links'>
                  <li><Link to="/offers/restaurant" className='offers_link active'>Restaurant offers</Link></li>
                  <li><Link to="/offers/payment" className='offers_link'>Payment offers/Coupons</Link></li>
                  <div className="uderline"></div>
              </ul>
          </div>
      </div>

      {/* Show Data */}
      <div className="offers_result_section">
          {/* Food ITEMS */}
          <div className="offersHeading">
            <h1>All offers (769)</h1>
            <p>All offers and deals, from restaurants near you</p>
          </div>
          <FoodItems />
      </div>
    </div>
    </div>
  )
}

export default RestaurantOffers
