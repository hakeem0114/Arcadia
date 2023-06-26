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
            //Filter & return items with exisiting in productData array
            const cartItem = state.productData.find((item)=> item._id === action.payload._id)
            
            //If redux payloads exits or has a duplicate, 
            if(cartItem){ //Exists so update .quantity property in producData array
                cartItem.quantity += action.payload.quantity            
            }else{ //Does not exist so push new product into array
                state.productData.push(action.payload) ;
            }
        },

        incrementQTY: (state, action)=>{
            //Filter & return items with exisiting in productData array
            const cartItem = state.productData.find((item)=> item._id === action.payload._id)
            
            if(cartItem){
                cartItem.quantity++
            }
        },

        decrementQTY: (state, action)=>{
            //Filter & return items with exisiting in productData array
            const cartItem = state.productData.find((item)=> item._id === action.payload._id)
            
            if(cartItem){
                cartItem.quantity--
            }
        },

        deleteFromCart:(state, action)=>{
            state.productData = state.productData.filter((item)=> item._id !== action.payload)
        },
        resetCart:(state)=>{
            state.productData = []
        }
    },
})


// Action creators are generated for each case reducer function
export const { 
    addToCart,
    deleteFromCart,
    resetCart,
    incrementQTY,
    decrementQTY
} = arcadiaSlice.actions

export default arcadiaSlice.reducer