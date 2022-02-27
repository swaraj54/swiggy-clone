import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Findus from "./findus/Findus";
import "./LocationBased.css";
import FoodItems from "../Pages/Menu/FoodItems/FoodItems"
import { useContext, useEffect } from "react";
import { RouteContext } from "../routeFolder/RouteContext";
import SelectLocationSlider from "../selectLocationSlider/SelectLocationSlider";
import Navbar from "../Navbar/Navbar";

export const LocationBased = () => {

  const {cityName, addCityName } = useContext(RouteContext);

  const { city } = useParams();
  const currentCity = city.split("=")

  useEffect(()=>{
    addCityName(currentCity[1])
  },[])



  return (
    <div>
    <Navbar />
    <div className="locationBasedMainDiv">
      <div className="locationBasedMainDiv1">
        <div className="locationBasedMainDiv11">
          <h1 style={{marginTop:"3vw"}}>Great restaurants in {cityName}, delivering to you</h1>
          <div className="locationBasedMainDiv111">
            Set exact location to find the right restaurants near you.
          </div>
          <div className="locationBasedMainSearchDiv">
            Enter street name, area etc...
            <div className="locationBasedMainSearchDiv2">Find Food</div>
          </div>
        </div>
      </div>
      {/* <SelectLocationSlider /> */}
      <div style={{ backgroundColor: "#f7f7f7" }}>
        <div className="locationBasedMainDiv2">
          <span>
            Home / <span>{cityName}</span>
          </span>
        </div>
      </div>

      <div className="locationBasedMainAbout">
        <div className="locationBasedMainAboutHeading" >About the food culture in {cityName}</div>
        <div className="locationBasedMainAboutDesc">
          Order food & beverages online from restaurants near & around you. We deliver food from
          your neighborhood local joints, your favorite cafes, luxurious & elite restaurants in your
          area. Exciting bit? We place no minimum order restrictions! Order in as little (or as
          much) as you?d like. We?ll Swiggy it to you!
        </div>
      </div>

      <div className="locationBasedMainPicks" style={{marginTop:"47px"}}>
        <div className="locationBasedMainPicksHeading">Our picks for you</div>
        <div className="locationBasedMainPicksCards">
          <div className="locationBasedMainPicksCardRow">
            <Link to="/menu" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Offers_yqoiuk"
                alt="Offers near you"
              />
              <div className="PicksCardHeading">Offers near you</div>
            </Link>
            <Link to="/" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/TopRated_kyu7dk"
                alt="top rated"
              />
              <div className="PicksCardHeading">top rated</div>
            </Link>
            <Link to="/menu" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SuperFastDelivery_lmh0wh"
                alt="super fast delivery"
              />
              <div className="PicksCardHeading">super fast delivery</div>
            </Link>
          </div>

          <div className="locationBasedMainPicksCardRow" style={{ marginTop: "30px" }}>
            <Link to="/menu" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Biriyani_bohvze"
                alt="biryani"
              />
              <div className="PicksCardHeading">biryani</div>
            </Link>
            <Link to="/" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NorthIndian_u554zm"
                alt="North Indian"
              />
              <div className="PicksCardHeading">North Indian</div>
            </Link>
            <Link to="/" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SouthIndian_a5ivgy"
                alt="South Indian"
              />
              <div className="PicksCardHeading">South Indian</div>
            </Link>
          </div>
        </div>

        <div className="locationBasedMainLocation">
          <Findus />
        </div>
        <div className="locationBasedMainRestaurants">
          <div className="locationBasedMainRestaurantsHeading">
            Popular restaurants in and around {cityName}
          </div>


{/* fooditems imported */}
         <div>
         <FoodItems />
         </div>
         








          {/* <div className="restaurantsCards">
            <div className="restaurantsCard">
              <Link to="/" className="restaurantsCardLink">
                <div className="restaurantsCardLinkDiv">
                  <div className="restaurantsCardLinkDivImg">
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gbbky4jdkrshfpvghbwu"
                      alt="img"
                    />
                  </div>
                  <div style={{ marginTop: "14px" }}>
                    <div style={{ fontSize: "170%", fontWeight: "500", wordBreak: "break-word" }}>
                      Subway
                    </div>
                    <div style={{ color: "#686b78", fontSize: "130%", marginTop: "4px" }}>
                      Salads, Snacks, Desserts, Beverages
                    </div>
                  </div>
                  <div className="cardDetailsDiv"></div>
                </div>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </div>
  );
};
