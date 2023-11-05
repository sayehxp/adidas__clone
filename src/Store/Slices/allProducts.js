import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';

export const GETallProducts = createAsyncThunk('GETallProducts',async()=> {
    let prdArr  = [];
    const prdNames = [];
    let prdIndex = {}
    const  res = await getDocs(collection(db, `products`))


    const handlePrd = (doc)=>{

        const prd = { ...doc.data(), id: doc.id , similars : []};


        if(prdNames.includes(prd.name)){

         
             let x = prdIndex[prd.name];
             prdArr[x].similars.push(prd.imgurl[0]);


        }else{
            prdArr.push(prd);
            prdIndex[prd.name] = prdArr.length - 1
            prdNames.push(prd.name)
        }
        
        

    }


    res.docs.forEach(doc => handlePrd(doc))

    // console.log(prdArr)
    // console.log(prdIndex)
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
