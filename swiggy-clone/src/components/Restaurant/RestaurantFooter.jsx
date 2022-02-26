import "./footerStyle.css"

export const RestaurantFooter=()=>{

    const currentRestaurant = JSON.parse(localStorage.getItem("selectedFood"));

    return(
        <div id="restofooterDiv">
        <div className="restofooterFlex">
            <div  className="restofooterFlexChild">
                <h3>ADDRESS</h3>
                <hr />
              
                <p>{currentRestaurant.address}, </p> <p> Bhilwara - 311001, Opposite Mahavir Park, </p> <p> Bhilwara Locality, Bhilwara</p>
            </div>
            <div className="restofooterFlexChild">
                <h3>CUISINES</h3>
                <hr />
                <p>North Indian</p>
            </div>
        </div>
        <div className="fssaiFooter">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_162,h_80/fssai_final_edss9i" alt="" />
            <h5>License No. 12216016000100</h5>
       </div>
        </div>
    )
}