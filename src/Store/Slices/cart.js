import { createSlice } from "@reduxjs/toolkit";

export const CartSlice= createSlice({

    name:"Cart",
    initialState:{Cartp:[]},
    reducers:{

        addtocart:function(state,action){
           state.Cartp.push(action.payload)  
         },
   
         removFormCart:function(state,action){
           state.Cartp.splice(action.payload,1)  
         }
   }
   
   })
   export const {addtocart,removFormCart}=CartSlice.actions
   export default CartSlice.reducer