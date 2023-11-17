import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { collection, getDocs , getDoc , doc } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';

export const GETallProducts = createAsyncThunk('GETallProducts',async()=> {
    let prdArr  = [];
    const prdNames = [];
    let prdIndex = {};
    const  res = await getDocs(collection(db, `products`))

    const handlePrd = (doc)=>{

        const prd = { ...doc.data(), id: doc.id , similars : []};


        if(prdNames.includes(prd.name)){

             let x = prdIndex[prd.name];
             prdArr[x].similars.push({img: prd.imgurl[0] , id : prd.id});


        }else{
            prdArr.push(prd);
            prdIndex[prd.name] = prdArr.length - 1
            prdNames.push(prd.name)
        }
        
        

    }


 
    return prdArr
    
    // console.log(prdArr)
    // console.log(prdIndex)
    
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
