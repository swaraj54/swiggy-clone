import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export const ManageAddressCard = () => {
  let userData = {
    addresses: [
      {
        type: "",
        body: "House No-30,Flat No-505, Abhay Guha Rd, Belur Math, Howrah, West Bengal 711202, India",
      },
      {
        type: "Other",
        body: "Flat No-505 Building No-30, Siddheshwar apartment, Abhay Guha Rd, Belur Math, Liluah, Howrah, West Bengal 711204, India",
      },
      {
        type: "Other",
        body: "Flat No-505 Building No-30, Siddheshwar apartment, Abhay Guha Rd, Belur Math, Liluah, Howrah, West Bengal 711204, India",
      },
      {
        type: "",
        body: "House No-30,Flat No-505, Abhay Guha Rd, Belur Math, Howrah, West Bengal 711202, India",
      },
    ],
  };
  return (
    <div>
      <div className="manageAddressCardDiv">Manage Addresses</div>
      <div className="manageAddressCardDivCards">
        {userData.addresses.map((el) => {
          return (
            <div className="manageAddressCardDivCard">
              <div className="manageAddressCardDivCardIcon">
                <LocationOnOutlinedIcon />
              </div>
              <div>
                <div className="manageAddressCardDivCardIconType">{el.type}</div>
                <div className="manageAddressCardDivCardIconBody">{el.body}</div>
                <div style={{ marginTop: "11px" }}>
                  <span className="editDeleteButton">EDIT</span>
                  <span className="editDeleteButton">DELETE</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
