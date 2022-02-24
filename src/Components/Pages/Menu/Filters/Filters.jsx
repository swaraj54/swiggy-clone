import React from 'react'
import './Filters.css'

function Filters() {
  return (
    <div className="filter_container">
      <div className="filter_main_container">
          <div className="totalResturant">
              <h2>1056 restaurants</h2>
          </div>
          <div className="filterOptions">
              <ul className='options'>
                  <li>Relevance</li>
                  <li>Delivery Time</li>
                  <li>Rating</li>
                  <li>Cost: Low To High</li>
                  <li>Cost: High to Low</li>
                  <li>
                      <div className="filterLogo">
                          <stronge>Filters</stronge>
                          <img src="filters.png" alt="" />
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Filters
