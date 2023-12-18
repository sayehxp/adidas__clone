import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';

export const GETallProducts = createAsyncThunk('GETallProducts', async () => {

    try {

        const prdArr = [], prdAlternative = [], productsKeys = [];

        const getDocument = async (gender, category) => {


            if (gender) {
                var productDB = await getDocs(
                    query(
                        collection(db, 'products'),
                        where('gender', '==', gender),
                        where('category', '==', category),
                    )
                );
            } else {

                var productDB = await getDocs(
                    query(
                        collection(db, 'products'),
                        where('arcategory', '==', category),
                    )
                );
            }

            console.log('response ', category);

            productDB.docs.forEach(doc => {
                const prd = { ...doc.data(), id: doc.id, };
                const prdKey = prd.name + prd.gender + prd.category;
                if (!productsKeys.includes(prdKey)) {
                    productsKeys.push(prdKey);
                    prdArr.push(prd);
                } else {
                    prdAlternative.push(prd);
                }
            }

            )



        }
        await getDocument(false, 'الأهلى');
        await getDocument('الأطفال', 'أحذية');
        await getDocument('الأطفال', 'ملابس');
        await getDocument('النساء', 'جاكيت');
        await getDocument('النساء', 'تي شيرت');
        await getDocument('النساء', 'أحذية');
        await getDocument('النساء', 'بنطال');
        await getDocument('الرجال', 'شورت');
        await getDocument('الرجال', 'تي شيرت');
        await getDocument('الرجال', 'هودي');
        await getDocument('الرجال', 'أحذية');





        return { filterProducts: prdArr, alternative: prdAlternative };



    } catch (err) {
        console.error('err', err);
    }


})













const allProducts = createSlice({
    name: 'allProducts',
    initialState: { allProducts: [], alternative: [], isLoading: false, },
    extraReducers: (builder) => {
        builder
            .addCase(GETallProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GETallProducts.fulfilled, (state, action) => {
                state.allProducts = action.payload['filterProducts'];
                state.alternative = action.payload['alternative'];
                state.isLoading = false;
                console.log('firebase request', 'getallprd')

            })
            .addCase(GETallProducts.rejected, (state) => {
                state.isLoading = false;
            });



    }


})



export default allProducts.reducer
