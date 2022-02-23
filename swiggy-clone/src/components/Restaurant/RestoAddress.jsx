import React, { PureComponent } from 'react'
import StarIcon from "@mui/icons-material/Star";

export class RestoAddress extends PureComponent {
  render() {
    return (
        <div id="restoMidRatingMainDiv">
        <div>
          <p>Fast Food</p>
        </div>
        <div>
          <p>Reliance Mega Mall, Suzuki Colony | Change Outlet </p>
        </div>
        <div id="restoMidRating">
          <div className="restoMidRatingDiv1">
            <StarIcon />
            --
            <p className="restoMidRatingDivP">Too Few Ratings</p>
          </div>
          <div className="restoMidRatingDiv2">
            <p>15 mins</p>
            <p className="restoMidRatingDivP">Delivery Time</p>
          </div>
          <div className="restoMidRatingDiv3">
            <p>₹ 400</p>
            <p className="restoMidRatingDivP">Cost for two</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RestoAddress