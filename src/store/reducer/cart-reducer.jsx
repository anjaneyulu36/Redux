import products from "../../pro";

const initialstate = {
    cartitem: [],
    allproducts:products,
}
const cartReducer = (state = initialstate, action) => {
    if (action.type === "ADDCART") {
        // let temp = [...state.cartitem, action.payload ]
        // temp[action.index].count = 1
        console.log(action.index);
        return {
            ...state, cartitem: [...state.cartitem,{...state.allproducts[action.index],count:1}]
        }
    }
    if (action.type === "INC") {
        let temp = [...state.cartitem]
        temp[action.index].count += 1
        return {
            ...state, cartitem: [...temp]
        }
    }
    if (action.type === "DEC") {
        let temp = [...state.cartitem]
       if( temp[action.index].count > 1){
        temp[action.index].count -= 1
        return {
            ...state, cartitem: [...temp]
        }
       }
    }
    if(action.type==="REMOVE"){
        let temp=[...state.cartitem]
        temp.splice(action.index,1)
        return{
            ...state, cartitem:[...temp]
        }
    }
    return state

}

export default cartReducer;