import React, { useState, useEffect, useContext } from "react";
import "./TopSection.css";
import Button from "@material-ui/core/Button";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Authentication from "../authentication/Authentication";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";

const TopSection = () => {
  let names = [
    "Movie marathon?",
    "Game night?",
    "Late night at office?",
    "Hungry?",
    "Unexpected guest?",
    "Cooking gone wrong?",
  ];

  const [count, setCount] = useState(0);
  const [authDiv, setAuthDiv] = useState(false);
  const [authOption, setAuthOption] = useState("signup");
  const {
    auth,
    signupOtp,
    toggleAuthDiv,
    toggleSignupOtp,
    loginOtp,
    toggleLoginOtp,
  } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);

    if (count === 4) {
      setCount(0);
    }
  }, [count]);

  function setIsVisible() {
    setAuthDiv(false);
  }

  return (
    <div className="App">
      <Authentication
        isVisible={authDiv}
        whichDiv={authOption}
        closeThisDiv={setIsVisible}
      />
      <div
        id="landingTopSection"
        onClick={() => {
          if (auth) {
            toggleAuthDiv();
          }
          if (signupOtp) {
            toggleSignupOtp(false);
          }
          if (loginOtp) {
            toggleLoginOtp(false);
          }
        }}
        style={{
          opacity: auth ? "0.9" : "1",
          backgroundColor: auth ? "rgb(190, 190, 190)" : "transparent",
        }}
      >
        <div id="landingTopLeftSide" className="landingTopSectionPart1">
          <div id="landingTopLeftContent">
            <div id="logoDiv">
              <img
                id="landingPageLogoImg"
                src="landingImages/swiggyLogo.png"
                alt=""
              />
              <div id="landingPageTopButtons">
                <Button
                  className="logInButton"
                  onClick={() => {
                    // setAuthDiv(true);
                    setAuthOption("login");
                    toggleAuthDiv();
                  }}
                >
                  Log in
                </Button>
                <Button
                  className="signUpButton"
                  onClick={() => {
                    // setAuthDiv(true)
                    setAuthOption("signup");
                    toggleAuthDiv();
                  }}
                >
                  Sign up
                </Button>
              </div>
            </div>

            <div id="chooseWhyDiv">
              <div className="movingNameDiv">
                <h1 className="movingName"> {names[count]}</h1>
              </div>
              <h1 className="orderFoodFrom">
                Order food from favourite restaurants near you
              </h1>
            </div>

            <div id="inputBoxDiv">
              <div id="locationButtonDiv">
                <input
                  id="inputBox"
                  type="text"
                  placeholder="Enter your dellivery location"
                  style={{
                    backgroundColor: auth
                      ? "rgb(190, 190, 190)"
                      : "transparent",
                  }}
                />
                <Button
                  endIcon={<MyLocationIcon className="locationLogo" />}
                  className="locationButton"
                >
                  Locate me
                </Button>
              </div>

              <Button className="foodButton" onClick={()=>{
                setAuthOption("signup");
                 toggleAuthDiv();
              }}>Find food</Button>
            </div>

            <div id="popularCitiesDiv">
              <h2 id="popularCityText">POPULAR CITIES IN INDIA</h2>
              <p id="popularCityNames">
                <span>
                  <Link to="/location/city=Ahmedabad" className="lightGreyCity">
                    Ahmedabad{" "}
                  </Link>{" "}
                </span>
                &nbsp;
                <span>
                  <Link
                    to="/location/city=Bangalore"
                    style={{
                      color: "#838a91",
                      padding: "0.5vw",
                      textDecoration: "none",
                    }}
                  >
                    Bangalore
                  </Link>
                </span>
                &nbsp;
                <span>
                  <Link to="/location/city=Chennai" className="lightGreyCity">
                    Chennai
                  </Link>
                </span>
                &nbsp;
                <span>
                  <Link
                    to="/location/city=Delhi"
                    style={{
                      color: "#838a91",
                      padding: "0.5vw",
                      textDecoration: "none",
                    }}
                  >
                    Delhi
                  </Link>
                </span>
                &nbsp;
                <span>
                  <Link to="/location/city=Gurgaon" className="lightGreyCity">
                    Gurgaon
                  </Link>
                </span>
                &nbsp;
                <span>
                  <Link
                    to="/location/city=Hyderabad"
                    style={{
                      color: "#838a91",
                      padding: "0.5vw",
                      textDecoration: "none",
                    }}
                  >
                    Hyderabad
                  </Link>
                </span>
                &nbsp;
                <span>
                  <Link to="/location/city=Kolkata" className="lightGreyCity">
                    Kolkata
                  </Link>
                </span>
                &nbsp;
                <br />
                <span>
                  <Link
                    to="/location/city=Mumbai"
                    style={{
                      color: "#838a91",
                      padding: "0.5vw",
                      textDecoration: "none",
                    }}
                  >
                    Mumbai
                  </Link>
                </span>
                &nbsp;
            
                <span>
                  <Link to="Pune" className="lightGreyCity">
                    Pune
                  </Link>
                </span>
                &nbsp;
                <span
                  style={{
                    color: "#838a91",
                    padding: "0.5vw",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  & &nbsp; more.
                </span>
              </p>
            </div>
          </div>
        </div>
        <img
          className="landingTopSectionPart2"
          src="landingImages/Lunch1-new_douhad.jfif"
          alt=""
        />
      </div>
    </div>
  );
};

export default TopSection;
