import React from "react";
import { CommonButton, PayButton, FoodButton } from "../greenButton/Button";
import "./cartPayment.css";

const CashPayment = () => {
  return (
    <div className="paymentMethodsPage">
      <img className="paymentImg1" src="cartImages/payByCash.png" alt="" />
      <h2 className="paymentMethodsPageTitle">Cash</h2>
      <p className="paymentMethodsPageContent">
        Online payment recommended to reduce contact between you and delivery
        partner
      </p>
      <CommonButton>Pay ₹206</CommonButton>
    </div>
  );
};

export { CashPayment };

// food card

const FoodCardPayment = () => {
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

      <FoodButton>Pay ₹206</FoodButton>
    </div>
  );
};

export { FoodCardPayment };

// upi payment
const UPIPayment = () => {
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
      <PayButton>Pay ₹206</PayButton>
    </div>
  );
};

export { UPIPayment };

//upi credit
const CreditPayment = () => {
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
      <PayButton>Pay ₹206</PayButton>
    </div>
  );
};

export { CreditPayment };

//wallet payment
const WalletPayment = () => {
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
        <PayButton>Pay ₹206</PayButton>
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
        <PayButton>Pay ₹206</PayButton>
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
        <PayButton>Pay ₹206</PayButton>
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
        <PayButton>Pay ₹206</PayButton>
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
        <PayButton>Pay ₹206</PayButton>
      </div>
    </div>
  );
};

export { WalletPayment };
