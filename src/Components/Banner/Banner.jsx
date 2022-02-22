import React from 'react'
import './Banner.css'



function Banner() {
  return (
    <div className='banner__container'>
      {/* <h1>hELLO I am Banner</h1> */}
      <div className="banner_main_container">
        <div className="location_heading">
          <h1>Best North Indian restaurants in Delhi</h1>
        </div>
        <div className="select_location">
          <p>Set exact location to find the right restaurants near you.</p>
          <div className="inputField">
            <input type="text"  placeholder='Enter street name, area etc...'/>
            <button>FIND FOOD</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
