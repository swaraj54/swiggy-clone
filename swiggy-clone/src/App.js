import "./App.css";
import {Routes,Route} from 'react-router-dom';
// import Menu from './components/Pages/Menu/Menu';
// import Navbar from './components/Navbar/Navbar';
// import Search from './components/Pages/Search/Search'
// import PaymentOffers from './components/Pages/Offers/PaymentOffers';
// import RestaurantOffers from './components/Pages/Offers/RestaurantOffers';
import LandingPage from './components/landingPage/LandingPage';
import Cart from "./components/cart/Cart";
import ReadPolicy from "./components/cart/ReadPolicy";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}

      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
<<<<<<< Updated upstream
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/cart/policy" element={<ReadPolicy />}></Route>
=======
        {/* <Route path="/cart" element={<Cart />}></Route> */}
>>>>>>> Stashed changes
        {/* <Route path="/Menu" element={<Menu />}></Route> */}
        {/* <Route path='/search' element={<Search/>}></Route>
        <Route path='/offers/restaurant' element={<RestaurantOffers/>}></Route>
        <Route path='/offers/payment' element={<PaymentOffers/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
