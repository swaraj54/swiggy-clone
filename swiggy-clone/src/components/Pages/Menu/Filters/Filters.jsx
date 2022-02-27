import React from 'react'
import './Filters.css';
import { sortByPriceAsc } from '../../../../Redux/Actions/action';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Filters() {
  const dispatch = useDispatch();

  const [data, setData] = React.useState([])
  axios.get("https://swiggybackendclone.herokuapp.com/restaurantmenu")
  .then((res)=>{
    setData(res.data.length)
  })


  return (
    <div className="filter_container">
      <div className="filter_main_container">
          <div className="totalResturant">
              <h2>{data} restaurants</h2>
          </div>
          <div className="filterOptions">
              <ul className='options'>
                  <li>Relevance</li>
                  <li>Delivery Time</li>
                  <li>Rating</li>
                  <li>Cost: Low To High</li>
                  <li onClick={()=>{
                    alert("clicked")
                    dispatch(sortByPriceAsc())
                  }}>Cost: High to Low</li>
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
