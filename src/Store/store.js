import { configureStore } from "@reduxjs/toolkit";
import  allProductsReducr  from "./Slices/allProducts";
import  wishlistReducr  from "./Slices/wishlist";


const store = configureStore(
    {
        reducer:{
            allProducts : allProductsReducr,
            wishlist : wishlistReducr
        }
    }
)


export default store


