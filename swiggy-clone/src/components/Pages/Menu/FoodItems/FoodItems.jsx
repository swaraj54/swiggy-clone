import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./FoodItems.css";
import { GET_DATA } from "../../../../Redux/Actions/action.js";
import FoodItem from "../FoodItem/FoodItem";

function FoodItems() {
  /*
       ==============================
       ==============================
       Fetch data from Redux Storage
       =============================
       =============================       
    */
  const foodItems = useSelector((state) => state.foodItemsReducer.foodItems);
  //   console.log("store",foodItems);

  /*
      ==================================================
       =================================================
       Fetch data from API and Store in the Redux store
       ================================================
       ================================================
    */
  const dispatch = useDispatch(); 

  useEffect(() => {
    const getData = () => {
      axios.get("https://swiggybackendclone.herokuapp.com/restaurantmenu").then((resp) => {
        // console.log("resp.data.categories");
        const data = resp.data;

        for (let item of data) {
          //store data in redux store
          dispatch(GET_DATA(item));
        }
      });
    };

    getData();
  }, []);

  /*

    */

  /*

    */

  /*

    */

  /*

    */
  return (
    <>
      {/* <h1>Hello I am food item container</h1> */}

      {/* <FoodItem/> */}

      <>
        <FoodItem />
      </>
    </>
  );
}

export default FoodItems;

/*

    */

/*

    */

/*

    */

/*

    */

/*

    */

/*

    */
