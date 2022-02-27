import  Filter  from './Filters/Filters'
import React from 'react'
import Banner from '../../Banner/Banner'
import Footer from "../../landingPage/footer/Footer";
import FoodItems from './FoodItems/FoodItems'
import './Menu.css';
import Navbar from "../../Navbar/Navbar";

function Menu() {
  return (
    <div>
    <Navbar />
    <div className='menu__container'>
      {/* 
          1. First require Navbar
          2. Second require Banner
          3. Food Items 
          4. Footer
      */}
        
      {/* Navbar Section */} 
      {/* <Navbar/> */}

      {/* Banner Section heading='Offers for you' desc='Explore top deals and offers exclusively for you!' color='#005062' flag='true'*/}
      <Banner heading='Great restaurants in Kolkata, delivering to you' desc='Set exact location to find the right restaurants near you.' color='#494D60' />

      {/* Filters */}
      <Filter/>

      {/* Food ITEMS */}
      <FoodItems />

      {/* Footer */}
      <Footer />
    </div>
    </div>
  )
}

export default Menu
