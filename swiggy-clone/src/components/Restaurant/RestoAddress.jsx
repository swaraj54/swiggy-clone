import React, { PureComponent } from 'react'
import StarIcon from "@mui/icons-material/Star";

const currentRestaurant = JSON.parse(localStorage.getItem("selectedFood"));

export class RestoAddress extends PureComponent {
  render() {
    return (
        <div id="restoMidRatingMainDiv">
        <div>
          <p>Fast Food</p>
        </div>
        <div>
          <p>{currentRestaurant.address}</p>
        </div>
        <div id="restoMidRating">
          <div className="restoMidRatingDiv1">
            <StarIcon />
           
            <p className="restoMidRatingDivP">{currentRestaurant.rating}</p>
          </div>
          <div className="restoMidRatingDiv2">
            <p>{currentRestaurant.delivery_time} mins</p>
            <p className="restoMidRatingDivP">Delivery Time</p>
          </div>
          <div className="restoMidRatingDiv3">
            <p>₹ {currentRestaurant.price}</p>
            <p className="restoMidRatingDivP">Cost for two</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RestoAddress