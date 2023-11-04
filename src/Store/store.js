import { configureStore } from "@reduxjs/toolkit";
import  allProductsReducr  from "./Slices/allProducts";


const store = configureStore(
    {
        reducer:{
            allProducts : allProductsReducr
        }
    }
)


export default store


