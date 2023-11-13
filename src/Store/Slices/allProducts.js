import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';

export const GETallProducts = createAsyncThunk('GETallProducts',async()=> {
try {
    const prdArr  = [] , prdNames = [] , prdIndex = {};
    const  res = await getDocs(collection(db, `products`))

    const filterImgs = (arr) => {
        const temp = [...arr];
        while (arr.length > 0 && !arr[arr.length - 1].endsWith('detail.jpg')) {
          arr.pop()
        }

        if(arr.length == 0){return temp}
        return arr;
      }

    const handlePrd = (doc)=>{
        
        const prd = { ...doc.data(),
                     id: doc.id ,
                     index : prdArr.length,
                     similars : [],
                    };
        
        prd.imgurl =  filterImgs(prd.imgurl)

        if(prdNames.includes(prd.name+prd.category)){

            let x = prdIndex[prd.name+prd.category];
            prd.index = prdArr[x].index
            prdArr[x].similars.push(prd);


        }else{
            
            prdArr.push(prd);
            prdIndex[prd.name+prd.category] = prdArr.length - 1
            prdNames.push(prd.name+prd.category)
        }
        
        

    }

    res.docs.forEach(doc => handlePrd(doc))
   
    return prdArr;



} catch (err) {
    console.error('err' , err)
}
    
    
})

const allProducts = createSlice({
    name : 'allProducts',
    initialState : {allProducts: []},
    extraReducers : (builder) => {
        builder.addCase(GETallProducts.fulfilled , (state,action) => {
            state.allProducts = action.payload
            console.log('fired REDUX ' , state.allProducts)
        })
    } 


})



export default allProducts.reducer
