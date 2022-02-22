import React from "react";
import "./headerStyle.css"

const Header = () => {
  return (
    <div>
      <div id="restoHeader">
        <div id="restobanner">
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fgh8slhx9pbiuctxkysf" />
        </div>
        <div id="restomid">
          <div>
            <h1>INOX</h1>
          </div>
          <div>
            <div>
              <p>Fast Food</p>
            </div>
            <div>
              <p>Reliance Mega Mall, Suzuki Colony | Change Outlet </p>
            </div>
            <div id="restoMidRating">
              <div className="restoMidRatingDiv">
                <p>p</p>
                <p className="restoMidRatingDivP">Too Few Ratings</p>
              </div>
              <div className="restoMidRatingDiv">
                <p>15 mins</p>
                <p className="restoMidRatingDivP">Delivery Time</p>
              </div>
              <div className="restoMidRatingDiv">
                <p>₹ 400</p>
                <p className="restoMidRatingDivP">Cost for two</p>
              </div>
            </div>
          </div>
          {/* header mid search div */}
          <div id="reatoMidSearch" >
              <div>
                  <span><i class="fa-solid fa-magnifying-glass"></i></span>
                  <span><input type="text" placeholder="Search for dishes..." /></span>
              </div>
              <div>
                  <span>p</span>
                  <span>Veg Only</span>
              </div>
              <div>
                  <span>p</span>
                  <span>Favourite</span>
              </div>
          </div>
        </div>
        <div>
            <div>
                <div>OFFER</div>
                <div>
                    <div>
                        <span>p</span>
                        <div>50% off up to ₹100 | Use code TRYNEW</div>
                    </div>
                    <div>
                    <span>p</span>
                        <div>15% off upto ₹100 | Use SBIC100 Above ₹400</div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
