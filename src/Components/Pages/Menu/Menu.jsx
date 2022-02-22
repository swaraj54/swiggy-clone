import React from 'react'
import Banner from '../../Banner/Banner'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import FoodItems from './FoodItems/FoodItems'
import './Menu.css'

function Menu() {
  return (
    <div className='menu__container'>
      {/* 
          1. First require Navbar
          2. Second require Banner
          3. Food Items 
          4. Footer
      */}
      
      {/* Navbar Section */}
      <Navbar/>



      {/* Banner Section */}
      <Banner />


      {/* Food ITEMS */}
      <FoodItems />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Menu
