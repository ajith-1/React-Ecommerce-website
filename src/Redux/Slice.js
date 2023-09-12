import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cart:[],
};

export const cartSlice=createSlice ({
    name:'cart',
    initialState,
    reducers:{
        addCart:(state,action)=>{
            const existingProduct=state.cart.find((item)=>item.id === action.payload.id)
            if(!existingProduct){
                state.cart=[...state.cart,{...action.payload,quantity:1}];
            } 
        },
        removeCart:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id !== action.payload);
        },
        incrementItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cart.find(item => item.id === itemId);
      
            if (existingItem) {
              existingItem.quantity += 1;
            }
          },
          decrementItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cart.find(item => item.id === itemId);
      
            if (existingItem && existingItem.quantity > 1) {
              existingItem.quantity -= 1;
            }
          }
    },
})

export const {addCart,removeCart,incrementItem,decrementItem}=cartSlice.actions;
export default cartSlice.reducer;