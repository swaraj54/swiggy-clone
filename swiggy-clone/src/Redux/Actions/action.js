/*==================
====================
Get Data From API
====================
====================
*/



export const GET_DATA = ({...data}) => {
    // console.log("data",data);
    return {
        type : "GET_DATA",
        payload : data
    }
   
}