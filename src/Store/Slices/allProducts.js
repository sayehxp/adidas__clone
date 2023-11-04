import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';

export const GETallProducts = createAsyncThunk('GETallProducts',async()=> {
    
    const res = await getDocs(collection(db, `products`))
    let prdArr  = [];
    const prdNames = new Set();

    const handlePrd = (doc)=>{

        const obj = { ...doc.data(), id: doc.id , similars : []};
        if(prdNames.has(obj.name)){
             prdArr[prdArr.length - 1].similars.push(obj.imgurl[0]);
        }else{
            prdArr.push(obj);
            prdNames.add(obj.name)
        }
        
        

    }


    res.docs.forEach(doc => handlePrd(doc))
// console.log(prdNames)
// console.log(prdArr)

    return prdArr

    
})

const allProducts = createSlice({
    name : 'allProducts',
    initialState : {allProducts: []},
    extraReducers : (builder) => {
        builder.addCase(GETallProducts.fulfilled , (state,action) => {
            state.allProducts = action.payload
        })
    } 


})



export default allProducts.reducer
