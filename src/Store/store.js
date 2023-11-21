import { configureStore} from "@reduxjs/toolkit";
import  allProductsReducr  from "./Slices/allProducts";
import CartReducer  from "./Slices/cart";

const store = configureStore(
    {
        reducer:{
            allProducts : allProductsReducr,
            Cart:CartReducer,
        }
    }
)


export default store


