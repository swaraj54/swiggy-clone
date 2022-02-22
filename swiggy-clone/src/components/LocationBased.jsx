import "./LocationBased.css";

export const LocationBased = () => {
  const location = "Delhi";
  return (
    <div className="locationBasedMainDiv">
      <div className="locationBasedMainDiv1">
        <div className="locationBasedMainDiv11">
          <h1>Great restaurants in {location}, delivering to you</h1>
          <div className="locationBasedMainDiv111">
            Set exact location to find the right restaurants near you.
          </div>
          <div className="locationBasedMainSearchDiv">
            Enter street name, area etc...
            <div className="locationBasedMainSearchDiv2">Find Food</div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f7f7f7" }}>
        <div className="locationBasedMainDiv2">
          <span>
            Home / <span>{location}</span>
          </span>
        </div>
      </div>

      <div className="locationBasedMainAbout">
        <div className="locationBasedMainAboutHeading">About the food culture in Delhi</div>
        <div className="locationBasedMainAboutDesc">
          Order food & beverages online from restaurants near & around you. We deliver food from
          your neighborhood local joints, your favorite cafes, luxurious & elite restaurants in your
          area. Exciting bit? We place no minimum order restrictions! Order in as little (or as
          much) as you?d like. We?ll Swiggy it to you!
        </div>
      </div>

      <div className="locationBasedMainPicks">
        <div className="locationBasedMainPicksHeading">Our picks for you</div>
        <div className="locationBasedMainPicksCards">
          <div className="locationBasedMainPicksCardRow">
            <a href="" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Offers_yqoiuk"
                alt="Offers near you"
              />
              <div className="PicksCardHeading">Offers near you</div>
            </a>
            <a href="" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/TopRated_kyu7dk"
                alt="top rated"
              />
              <div className="PicksCardHeading">top rated</div>
            </a>
            <a href="" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SuperFastDelivery_lmh0wh"
                alt="super fast delivery"
              />
              <div className="PicksCardHeading">super fast delivery</div>
            </a>
          </div>

          <div className="locationBasedMainPicksCardRow" style={{ marginTop: "30px" }}>
            <a href="" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Biriyani_bohvze"
                alt="biryani"
              />
              <div className="PicksCardHeading">biryani</div>
            </a>
            <a href="" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NorthIndian_u554zm"
                alt="North Indian"
              />
              <div className="PicksCardHeading">North Indian</div>
            </a>
            <a href="" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SouthIndian_a5ivgy"
                alt="South Indian"
              />
              <div className="PicksCardHeading">South Indian</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
