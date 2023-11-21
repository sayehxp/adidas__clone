import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';

export const GETallProducts = createAsyncThunk('GETallProducts', async () => {

    try {

        const prdArr = [], prdAlternative = [], productsKeys = [];
        const productDB = await getDocs(collection(db, 'products'))
        console.log('connect DB')
        console.log('CONNECETD SUCCESSFULLY', productDB.docs.length)

        const filterImgs = (arr , id) => {
            const temp = [...arr];
            while (arr.length > 0 && !arr[arr.length - 1].endsWith('detail.jpg')) {
                arr.pop();
            }
    
          
            return arr.length == 0 ? temp : arr;
        }


        productDB.docs.forEach(doc => {
            const prd = { ...doc.data(), id: doc.id, };
            prd.imgurl = filterImgs(prd.imgurl , prd.id);

            const prdKey = prd.name + prd.gender + prd.category;
            if (!productsKeys.includes(prdKey)) {
                productsKeys.push(prdKey);
                prdArr.push(prd);
            } else {
                prdAlternative.push(prd);
            }
        }

        )


        return { filterProducts: prdArr, alternative: prdAlternative };



    } catch (err) {
        console.error('err', err);
    }


})

const allProducts = createSlice({
    name: 'allProducts',
    initialState: { allProducts: [], alternative: ["123"] },
    extraReducers: (builder) => {
        builder.addCase(GETallProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload['filterProducts'];
            state.alternative = action.payload['alternative'];

        })
    }


})



export default allProducts.reducer
