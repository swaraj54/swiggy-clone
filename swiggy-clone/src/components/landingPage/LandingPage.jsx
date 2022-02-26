import TopSection from "./topSection/TopSection";
import Facility from "./facilitySection/Facility";
import FindOn from "./findOn/FindOn";
import Footer from "./footer/Footer";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { RouteContext } from "../routeFolder/RouteContext";


const LandingPage = () => {

  const {auth, toggleAuthDiv} = useContext(AuthContext)
  console.log('auth:', auth);

  const {routeControl, toggleRouteControl} = useContext(RouteContext);
 toggleRouteControl(false);
  
  return (
    <div className="landingPage" style={{position: auth ? "fixed":"inherit"}}>
      <TopSection />
      <Facility />
      <FindOn />
      <Footer />
    </div>

    );
};

export default LandingPage;