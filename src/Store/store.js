import { configureStore } from "@reduxjs/toolkit";
import  allProductsReducr  from "./Slices/allProducts";
import favoritesReducer from "./Slices/fav";

const store = configureStore(
    {
        reducer:{
            allProducts : allProductsReducr ,
            favorites: favoritesReducer,
        }
    }
)


export default store


