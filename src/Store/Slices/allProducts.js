import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { collection, getDocs , getDoc , doc } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';

export const GETallProducts = createAsyncThunk('GETallProducts',async()=> {
   
    let prdArr  = [];
    const prdNames = [];
    let prdIndex = {};
   
    const  res = await getDocs(collection(db, `products`))


   
   

    const handlePrd = (doc)=>{
        
        const prd = { 
            ...doc.data(), id: doc.id ,
            similars : [ { ...doc.data(), id: doc.id }],
            dx : prdArr.length
            };
        

        if(prdNames.includes(prd.name)){

            let x = prdIndex[prd.name];
            prdArr[x].similars.push(prd);


        }else{
            prdArr.push(prd);
            prdIndex[prd.name] = prdArr.length - 1
            prdNames.push(prd.name)
          
        }
        
        

    }


    res.docs.forEach(doc => handlePrd(doc))

    return prdArr
    
     // console.log(prdArr)
    // console.log(prdIndex)
    
})

const allProducts = createSlice({
    name : 'allProducts',
    initialState : {allProducts: [] ,
        isLoading: false, },
        extraReducers: (builder) => {
            builder
              .addCase(GETallProducts.pending, (state) => {
                state.isLoading = true; // Set isLoading to true when fetching starts
              })
              .addCase(GETallProducts.fulfilled, (state, action) => {
                state.allProducts = action.payload;
                state.isLoading = false; // Set isLoading to false when fetching is complete
              })
              .addCase(GETallProducts.rejected, (state) => {
                state.isLoading = false; // Set isLoading to false if there's an error
              });
          },
    } 


)



export default allProducts.reducer

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import { collection, getDocs , getDoc , doc } from "firebase/firestore";
// import { db } from '../../assets/Firebase/Firebase';

// export const GETallProducts = createAsyncThunk('GETallProducts',async()=> {
//     let prdArr  = [];
//     const prdNames = [];
//     let prdIndex = {};
//     const  res = await getDocs(collection(db, `products`))

   

//     const handlePrd = (doc)=>{

//         const prd = { ...doc.data(), id: doc.id , similars : []};


//         if(prdNames.includes(prd.name)){

//              let x = prdIndex[prd.name];
//              prdArr[x].similars.push({img: prd.imgurl[0] , id : prd.id});


//         }else{
//             prdArr.push(prd);
//             prdIndex[prd.name] = prdArr.length - 1
//             prdNames.push(prd.name)
//         }
        
        

//     }


//     res.docs.forEach(doc => handlePrd(doc))

//     return prdArr
    
//     // console.log(prdArr)
//     // console.log(prdIndex)
    
// })

// const allProducts = createSlice({
//     name : 'allProducts',
//     initialState : {allProducts: []},
//     extraReducers : (builder) => {
//         builder.addCase(GETallProducts.fulfilled , (state,action) => {
//             state.allProducts = action.payload
//         })
//     } 


// })



// export default allProducts.reducer
