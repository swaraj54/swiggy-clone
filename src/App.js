import './App.css';
import {Routes,Route} from 'react-router-dom';
import Menu from './Components/Pages/Menu/Menu';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Pages/Search/Search'
import PaymentOffers from './Components/Pages/Offers/PaymentOffers';
import RestaurantOffers from './Components/Pages/Offers/RestaurantOffers';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Menu/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/offers/restaurant' element={<RestaurantOffers/>}></Route>
        <Route path='/offers/payment' element={<PaymentOffers/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
