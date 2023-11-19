import { createSlice } from "@reduxjs/toolkit";
import {addProductToFirebase} from "../../Pages/WishList/firebasewishList"
import {removeProductFromFirebase} from "../../Pages/WishList/firebasewishList"


const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] , isLoaded : false },
  reducers: {
    addToWishList: (state, action) => {

    
      let isProductAlreadyAdded = state.favorites.find(item => item === action.payload);

      if (isProductAlreadyAdded) {
        state.favorites = state.favorites.filter(x => x != action.payload)

        removeProductFromFirebase( action.payload)
        // alert("remove product from firebase")

      } else {
        state.favorites.push(action.payload)
        addProductToFirebase(action.payload); 
      
      }
    },

    removeFromWishList: (state, action) => {
      state.favorites = state.favorites.filter(x => x != action.payload)
    
      removeProductFromFirebase( action.payload)
    },
     getWishListFirestore : (state, action) => {
      // alert('connect db wishlist')
      state.favorites = (action.payload)
      
      state.isLoaded = true;

     } 
  }
});

export const { addToWishList, removeFromWishList,getWishListFirestore } = favoriteSlice.actions;

export default favoriteSlice.reducer;
