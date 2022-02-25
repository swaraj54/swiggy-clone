const initialState = {
    foodItems : [
        {
            id: 1,
            image_url: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n3ac37m4yd4z8ktwi5bb',
            title: "Maalgaadi by Dhaba Estd 1986 Delhi",
            categories : ['North Indian', 'Indian, Biryani', 'Punjabi', 'Kebabs', 'Grill', 'Mughlai', 'Dessert'],
            rating:4.2,
            delivery_time: "27 MINS",
            price: "₹300 FOR TWO ",
            offer_status:true,
            offer : '60%',
            coupon_code: "STEALDEAL"
        }
    ]
}


export const foodItemsReducer = (state = initialState , action) => {
    switch(action.type)
    {
        case "GET_DATA" : 
                        const data = {...action.payload};
                        // console.log("payload",data);
                        return {
                            ...state,
                            foodItems : [
                                ...state.foodItems,
                                data
                            ]

                        }


        default : return state;
    }
}