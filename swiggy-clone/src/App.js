import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Pages/Menu/Menu";
import Search from "./components/Pages/Search/Search";
import PaymentOffers from "./components/Pages/Offers/PaymentOffers";
import RestaurantOffers from "./components/Pages/Offers/RestaurantOffers";
import LandingPage from "./components/landingPage/LandingPage";
import Cart from "./components/cart/Cart";
import ReadPolicy from "./components/cart/ReadPolicy";
import { RouteContext } from "./components/routeFolder/RouteContext";
import Navbar from "./components/Navbar/Navbar";
import { useContext, useState } from "react";
import Help from "./components/Help/Help";
import { LocationBased } from "./components/locationBased/LocationBased";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/cart/policy" element={<ReadPolicy />}></Route>
        {/* <Route path="/menu" element={<Menu />}></Route> */}
        {/* <Route path="/Menu" element={<Menu />}></Route> */}
        <Route path="/search" element={<Search />}></Route>
        <Route path="/offers/restaurant" element={<RestaurantOffers />}></Route>
        <Route path="/offers/payment" element={<PaymentOffers />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/:location" element={<LocationBased />} />
      </Routes>
    </div>
  );
}

export default App;

function CartComponent() {
  return (
    <div>
      <Navbar />
      <Cart />
    </div>
  );
}
