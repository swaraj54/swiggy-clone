/*==================
====================
Get Data From API
====================
====================
*/



export const GET_DATA = (payload) => {
    // console.log("data",data);
    return {
        type : "GET_DATA",
        payload 
    }
   
}


export const sortByPriceAsc = ()=>{
    return {
        type: "PRICE_HIGH_TO_LOW"
    }
} 

export const sortByPriceDes = ()=>{
    return {
        type: "PRICE_LOW_TO_HIGH"
    }
}

export const sortByTimeDes = ()=>{
    return {
        type: "TIME_LOW_TO_HIGH"
    }
}

export const sortByRating = ()=>{
    return {
        type: "SORTBYRATING"
    }
}

export const relevance = () =>{
    return {
        type: "RELEVANCE"
    }
}
