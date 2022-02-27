import React, { useContext } from "react";
import { CommonButton, PayButton, FoodButton } from "../greenButton/Button";
import "./cartPayment.css";
import axios from "axios";
import { AuthContext } from "../../landingPage/AuthContext";

const currentUser = JSON.parse(localStorage.getItem("currentUserId")) || "not found";


 
const paymentHandler = async (totalPrice) => {
  console.log("got it")
  const orderUrl = "https://swiggybackendclone.herokuapp.com/payment";
  const response = await axios.post(orderUrl,{price:totalPrice+66});
  const { data } = response;
  const options = {
    key: "rzp_test_o2Ali4pzYWDsvw",
    name: "Swiggy clone",
    description: "masai unit5 project",
    "image": "landingImages/swiggyLogo.png",
    order_id: data.id,
    handler: async (response) => {
      try {
       const paymentId = response.razorpay_payment_id;
       console.log('paymentId:', paymentId)

      const cartItems = JSON.parse(localStorage.getItem("currentCart")) || [];
       // add order list

       let orderDetails = cartItems.map((item)=>{
         return {
          userId: item.userId,
          addressTitle: item.name,
          addressContent:"New Road, delhi",
          name: currentUser.name,
          price:item.price,
          imageUrl: item.imageUrl,
          currentDate: new Date().toLocaleDateString()
           }
      })
      console.log("order Details",orderDetails);
      
      await axios.post("https://swiggybackendclone.herokuapp.com/orders/",orderDetails)
      .then((res)=>{
        console.log(res.data)
      })



       // remove cart items
       axios.get(`https://swiggybackendclone.herokuapp.com/cart/delete/${currentUser._id}`)
       .then((res)=>{
         console.log(res.data)
         window.location.href="/ordersuccessful";
       })


      
      } catch (err) {
        console.log(err);
      }
    },
    theme: {
      color: "#686CFD",
    },
  };
  var rzp1 = window.Razorpay(options);

  rzp1.open();
  };







const CashPayment = () => {
  
 const { totalPrice} = useContext(AuthContext);
 return (
    <div className="paymentMethodsPage">
      <img className="paymentImg1" src="cartImages/payByCash.png" alt="" />
      <h2 className="paymentMethodsPageTitle">Cash</h2>
      <p className="paymentMethodsPageContent">
        Online payment recommended to reduce contact between you and delivery
        partner
      </p>
      <CommonButton>Pay ₹{totalPrice+66}</CommonButton>
    </div>
  );
};

export { CashPayment };

// food card

const FoodCardPayment = () => {
  
 const { totalPrice} = useContext(AuthContext);
 return (
    <div id="foodCardDiv" className="paymentMethodsPage differentWalletDiv" >
      <h2 className="foodCardTitle">Add new food card</h2>
      <p className="weAccept">
        WE ACCEPT{" "}
        <img className="foodCardImage" src="cartImages/foodCard.png" alt="" />
      </p>

      <div id="foodInputDiv">
        <div className="inputItem">
          <input type="text" placeholder="Card number" />
        </div>
        <div id="expiryOtp">
        <div className="inputItem" style={{flexBasis:"29vw"}}>
          <input type="number" placeholder="Valid through(MM/YY)" />
        </div>
        <div className="inputItem">
          <input type="text" placeholder="CVV" />
        </div>
        </div>

        <div className="inputItem">
          <input type="number" placeholder="Name on card" />
        </div>
      </div>

      <p className="saveFoodCard">
      <input className="checkBoxFood" type="checkbox" name="" id="" />
      Securely save this card for a faster checkout next time.</p>

      <FoodButton>Pay ₹{totalPrice+66}</FoodButton>
    </div>
  );
};

export { FoodCardPayment };




// upi payment

const UPIPayment = () => {
  const { totalPrice} = useContext(AuthContext); 
  console.log('totalPrice:', totalPrice)

 return (
    <div className="paymentMethodsPage differentWalletDiv">
      <img
        className="paymentImg1"
        style={{ height: "2vw" }}
        src="cartImages/razorpayLogo.png"
        alt=""
      />
      <h2 className="paymentMethodsPageTitle">Razorpay</h2>
      <p className="paymentMethodsPageContent">
        All in One- Payment gateway, links, invoices, subscription, payouts,
        payment pages & more.
      </p>
      <PayButton onClick={()=>{
        paymentHandler(totalPrice)
      }}>Pay ₹{totalPrice+66}</PayButton>
    </div>
  );
};

export { UPIPayment };

//upi credit
const CreditPayment = () => {
 const { totalPrice} = useContext(AuthContext); 
 return (
    <div className="paymentMethodsPage differentWalletDiv">
      <img
        className="paymentImg1"
        style={{ height: "2vw" }}
        src="cartImages/credit.png"
        alt=""
      />
      <h2 className="paymentMethodsPageTitle">LazyPay</h2>
      <p className="paymentMethodsPageContent">
        LazyPay lets you order now & pay later at no extra cost.
      </p>
      <PayButton>Pay ₹{totalPrice+66}</PayButton>
    </div>
  );
};

export { CreditPayment };

//wallet payment
const WalletPayment = () => {
  
 const { totalPrice} = useContext(AuthContext);
 return (
    <div className="paymentMethodsPage">
      {/* //amazon pay */}
      <div className="differentWalletDiv">
        <img
          className="wallletPaymentImage"
          src="cartImages/amazonPay.png"
          alt=""
        />
        <h2 className="paymentMethodsPageTitle">Amazon Pay</h2>
        <PayButton>Pay ₹{totalPrice+66}</PayButton>
      </div>

      {/* // phonepe */}
      <div className="differentWalletDiv">
        <img
          style={{ width: "2.2vw", height: "2.2vw" }}
          className="wallletPaymentImage"
          src="cartImages/phonepe.png"
          alt=""
        />
        <h2 className="paymentMethodsPageTitle">PhonePe</h2>
        <PayButton>Pay ₹{totalPrice+66}</PayButton>
      </div>

      {/* // paytm */}
      <div className="differentWalletDiv">
        <img
          style={{ width: "4.7vw" }}
          className="wallletPaymentImage"
          src="cartImages/paytm.png"
          alt=""
        />
        <h2 className="paymentMethodsPageTitle">Paytm</h2>
        <PayButton>Pay ₹{totalPrice+66}</PayButton>
      </div>

      {/* // Mobikwik */}
      <div className="differentWalletDiv">
        <img
          style={{ width: "5.2vw" }}
          className="wallletPaymentImage"
          src="cartImages/mobikwik.png"
          alt=""
        />
        <h2 className="paymentMethodsPageTitle">Mobikwik</h2>
        <PayButton>Pay ₹{totalPrice+66}</PayButton>
      </div>

      {/* // Free charge */}
      <div className="differentWalletDiv">
        <img
          style={{ width: "2.2vw" }}
          className="wallletPaymentImage"
          src="cartImages/freeCharge.png"
          alt=""
        />
        <h2 className="paymentMethodsPageTitle">Freecharge</h2>
        <PayButton>Pay ₹{totalPrice+66}</PayButton>
      </div>
    </div>
  );
};

export { WalletPayment };
