import React from 'react'
import './Banner.css'



function Banner({heading,desc,color,flag}) {
  return (
    <div className='banner__container' style={{backgroundColor:`${color}`}}>
      {/* <h1>hELLO I am Banner</h1> */}
      <div className="banner_main_container">
        <div className="location_heading">
          <h1>{heading}</h1>
        </div>
        <div className="select_location">
          <p>{desc}</p>
          {
            flag ? <div></div> : <div className="inputField">
            <input type="text"  placeholder='Enter street name, area etc...'/>
            <button>FIND FOOD</button>
          </div>
          }
          
        </div>
      </div>
    </div>
  )
}

export default Banner
