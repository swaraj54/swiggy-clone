import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Pages/Menu/Menu";
import Search from "./components/Pages/Search/Search";
import PaymentOffers from "./components/Pages/Offers/PaymentOffers";
import RestaurantOffers from "./components/Pages/Offers/RestaurantOffers";
import LandingPage from "./components/landingPage/LandingPage";
import Cart from "./components/cart/Cart";
import ReadPolicy from "./components/cart/ReadPolicy";
import Help from "./components/Help/Help";
import { LocationBased } from "./components/locationBased/LocationBased";
import Header from "./components/Restaurant/Header";
import OrderSuccessful from "./components/orderSuccessful/OrderSuccessful";
import EmptyCart from "./components/cart/emptyCart/EmptyCart";
import PagenotFound from "./components/landingPage/pagenotfound/PagenotFound";
import {MyAccountsOrders} from "./components/Accounts/MyAccountsOrders";
import Navbar from "./components/Navbar/Navbar";


function App() { 
  return (
    <div className="App">
   

      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>

        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/cart/policy" element={<ReadPolicy />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/offers/restaurant" element={<RestaurantOffers />}></Route>
        <Route path="/offers/payment" element={<PaymentOffers />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/location/:city" element={<LocationBased />} />
        <Route path="/restaurantmenu" element={<Header />}></Route>
        <Route path="//ordersuccessful" element={<OrderSuccessful />}></Route>
        <Route path="/emptycart" element={<EmptyCart />}></Route>
        <Route path="/my-account/:comp" element={<MyAccountsOrders />} />
        <Route path="*" element={<PagenotFound />}></Route>
   
      </Routes>
    </div>
  );
}

export default App;
