import React from "react";
import "./footer.css";

const Footer = () => {
  const column1 = [
    "About us",
    "Team",
    "Careers",
    "Swiggy Blog",
    "Bug Bounty",
    "Swiggy One",
    "Swiggy Corporate",
    "Swiggy Instamart",
  ];
  const column2 = ["Help & Support", "Partner with us", "Ride with us"];
  const column3 = [
    "Terms & Conditions",
    "Refund & Cancellation",
    "Privacy Policy",
    "Cookie Policy",
    "Offer Terms",
    "Phishing & Fraud",
  ];

  const bottomColumn1 = [
    "Abohar",
    "Adilabad",
    "Adityapur",
    "Adoni",
    "Agartala",
    "Agra",
    "Ahmedabad",
    "Ahmednagar",
    "Aizawl",
    "Ajmer",
    "Akola",
    "Alappuzha",
    "Aligarh",
    "Alipurduar",
    "Allahabad",
    "Almora",
    "Alwar",
    "Ambala",
    "Ambikapur",
    "Ambur",
    "Amravati",
    "Amreli",
    "Amritsar",
    "Amroha",
    "Anand",
    "Anantapur",
    "Angul",
    "Ankleshwar",
    "Arambagh",
    "Arrah",
    "Asansol",
    "Ashoknagar",
    "Aurangabad",
    "Aurangabad_bihar",
    "Azamgarh",
    "Baddi",
    "Bagalkot",
    "Bagdogra",
    "Bagula",
    "Bahadurgarh",
    "Bahraich",
    "Bajpe",
    "Balaghat",
    "Balangir",
    "Balasore",
    "Ballari",
    "Balrampur",
    "Balurghat",
    "Banda",
    "Bangalore",
    "Bankura",
    "Banswara",
    "Bantwal",
    "Bapatlachirala",
    "Baran",
    "Baraut",
    "Bardhaman",
    "Bardoli",
    "Bareilly",
    "Barmer",
    "Barnala",
    "Barshi",
    "Barwani",
    "Basirhat",
    "Basti",
    "Batala",
    "Bathinda",
    "Beawar",
    "Beed",
    "Begusarai",
    "Bela-Pratapgarh",
    "Belgaum",
    "Berhampore",
    "Berhampur",
    "Bettiah",
    "Betul",
    "Bhadohi",
    "Bhadrachalam",
    "Bhadrak",
    "Bhadravati",
    "Bhagalpur",
    "Bhandara",
    "Bharabanki",
    "Bharatpur",
    "Bharuch",
    "Bhatapara",
    "Bhatkal",
    "Bhavnagar",
    "Bhawanipatna",
    "Bhilai",
    "Bhilwara",
    "Bhimavaram",
    "Bhind",
    "Bhiwadi",
    "Bhiwani",
    "Bhopal",
    "Bhubaneswar",
    "Bhuj",
    "Bidar",
    "Biharsharif",
    "Bijapur",
    "Bijnor",
    "Bikaner",
    "Bilaspur",
    "Bilaspur-Hp",
    "Bilimora",
    "Bina",
    "Bodhan-Rural",
    "Bodinayakanur",
    "Boisar",
    "Bokaro",
    "Bolpur",
    "Bongaigaon",
    "Bongaon",
    "Botad",
    "Budaun",
    "Budhwal",
    "Bulandshahr",
    "Bundi",
    "Burhanpur",
    "Buxar",
    "Central-Goa",
    "Chakdaha",
    "Chalakkudy",
    "Chalisgaon",
    "Chandausi",
    "Chandigarh",
    "Chandrapur",
    "Changanassery",
    "Charkhi-Dadri",
    "Chengannur",
    "Chennai",
    "Cherthala",
    "Chhapra",
    "Chhatarpur",
    "Chhindwara",
    "Chidambaram",
    "Chikhli",
    "Chikkaballapur",
    "Chikmagalur",
    "Chilakaluripet",
    "Chiplun",
    "Chitradurga",
    "Chittoor",
    "Chittorgarh",
    "Chopda",
    "Churu",
    "Coimbatore",
    "Cooch-Behar",
    "Cuddalore",
    "Cuttack",
    "Dabhoi",
    "Dabra",
    "Dahanu",
    "Dahod",
    "Daltonganj",
    "Daman",
    "Damoh",
    "Darbhanga",
  ];

  return (
    <div id="footer">
      <div id="footerTop">
        <div className="footerTopItems footerTopItems1">
          <h2 className="columnTitle">COMPANY</h2>
          <div className="columnElement">
            {column1.map((item) => {
              return <h3 className="columnContent">{item}</h3>;
            })}
          </div>
        </div>
        <div className="footerTopItems footerTopItems2">
          <h2 className="columnTitle">CONTACT</h2>
          <div className="columnElement">
            {column2.map((item) => {
              return <h3 className="columnContent">{item}</h3>;
            })}
          </div>
        </div>
        <div className="footerTopItems footerTopItems3">
          <h2 className="columnTitle">LEGAL</h2>
          <div className="columnElement">
            {column3.map((item) => {
              return <h3 className="columnContent">{item}</h3>;
            })}
          </div>
        </div>
        <div className="footerTopItems footerTopItems4">
          <img
            className="storeImg"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            alt=""
          />
          <img
            className="storeImg"
            style={{ marginTop: "2vw" }}
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            alt=""
          />
        </div>
      </div>

      <div id="footerBottom">
        <h2 className="columnTitle">WE DELIVER TO</h2>

        <div id="footerBottomFlexBox">
          <div className="footerBottomColumn footerBottomColumn1">
            <div className="columnElement">
              {bottomColumn1.map((item) => {
                return <h3 className="columnContent">{item}</h3>;
              })}
            </div>
          </div>
          <div className="footerBottomColumn footerBottomColumn2">
            <div className="columnElement">
              {bottomColumn1.map((item) => {
                return <h3 className="columnContent">{item}</h3>;
              })}
            </div>
          </div>
          <div className="footerBottomColumn footerBottomColumn3">
            <div className="columnElement">
              {bottomColumn1.map((item) => {
                return <h3 className="columnContent">{item}</h3>;
              })}
            </div>
          </div>
          <div className="footerBottomColumn footerBottomColumn4">
            <div className="columnElement">
              {bottomColumn1.map((item) => {
                return <h3 className="columnContent">{item}</h3>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="footerContact"> 
          <img className="bottomSwiggyLogo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" alt="" />
          <h2 id="copyRight">© 2022 Swiggy</h2>
          <div id="contactSocialLogo">
              <img src="landingImages/whiteFacebook.png" alt="" className="footerSocialLogoImg" />
              <img src="landingImages/pinInterest.png" alt="" className="footerSocialLogoImg" />
              <img src="landingImages/whiteInstagram.png" alt="" className="footerSocialLogoImg" />
              <img src="landingImages/whiteTwitter.png" alt="" className="footerSocialLogoImg" />
          </div>
      </div>
    </div>
  );
};

export default Footer;
