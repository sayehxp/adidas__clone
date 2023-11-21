import { createSlice } from "@reduxjs/toolkit";

export const CartSlice= createSlice({

    name:"Cart",
    initialState:{Cartp:[
{
  id:"DXWXimRtinEqtRiwCUXj",
  qty:1,
  size:"22/4"
  
},
{
  id: "GQ1EzJCWLCePd1TNJuxd",
  qty:1,
  size:"24/4"
  
}



    ]},
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