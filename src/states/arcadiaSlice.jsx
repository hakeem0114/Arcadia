import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
  }

  
export const arcadiaSlice = createSlice({
    name: 'arcadia',
    initialState,
    reducers: {
        addToCart:(state, action)=>{
            //Store 
            const cartItem = state.productData.find((item)=> item._id === action.payload._id)
            
            //If redux payloads exits or have a duplicate, 
            if(cartItem){ //Exists so update
                cartItem.quantity += action.payload.quantity 
            }else{ //Does not exist so push new product into array
                state.productData.push(action.payload) ;
            }

            
        },
    },
})


// Action creators are generated for each case reducer function
export const { addToCart } = arcadiaSlice.actions

export default arcadiaSlice.reducer