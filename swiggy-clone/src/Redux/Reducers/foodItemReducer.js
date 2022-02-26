const initialState = {
    foodItems : []
}


export const foodItemsReducer = (state = initialState , {type, payload}) => {
    switch(type)
    {
        case "GET_DATA" : 
                        // console.log("payload",data);
                        return {
                            ...state,
                            foodItems : [
                                ...state.foodItems,payload   
                            ]

                        }


        default : return state;
    }
}