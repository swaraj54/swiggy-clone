const initialState = {
  foodItems: [],
};

export const foodItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_DATA":
      // console.log("payload",data);
      return {
        ...state,
        foodItems: [...state.foodItems, payload],
      }

      case "PRICE_HIGH_TO_LOW":return{
      ...state,
      foodItems: priceHighToLow(state)
      }

      case "PRICE_LOW_TO_HIGH":return{
      ...state,
      foodItems: priceLowToHigh(state)
      }

      case "SORTBYRATING":return{
      ...state,
      foodItems: sortByRatingItem(state)
      }
      case "TIME_LOW_TO_HIGH":return{
      ...state,
      foodItems: sortByTime(state)
      }
      case "relevance": return {
        ...state,
      foodItems: sortByName(state)
      }

    default:
      return state;
  }
};



function priceHighToLow(state){
let arr = state.foodItems;
let newData = arr.sort((a, b) =>  a.price - b.price  );
console.log(newData)
return newData;
}

function priceLowToHigh(state){

}
function sortByRatingItem(state){

}
function sortByTime(state){

}
function sortByName(state){

}