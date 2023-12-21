import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../assets/Firebase/Firebase";

export const GETallProducts = createAsyncThunk("GETallProducts", async (args) => {
    try {
        const mainProducts = [],
            alternative = [],
            productsNames = [];

        const gender = args.gender;
        const category = args.category.replace("تيشيرت", "تي شيرت");

        const categoryField = category == "الأهلى" ? "arcategory" : "category";
        const genderField = "gender";

     
        const filterProducts = (products) => {
            products.docs.forEach((doc) => {
                const prd = { ...doc.data(), id: doc.id };

                if (!productsNames.includes(prd.name)) {
                    productsNames.push(prd.name);
                    mainProducts.push(prd);
                } else {
                    alternative.push(prd);
                }
            });
        };




        if (gender && category) {

            var productDB = await getDocs(
                query(
                    collection(db, "products"),
                    where(genderField, "==", gender),
                    where(categoryField, "==", category)
                )
            );
        }

        else if (gender && !category) {
            var productDB = await getDocs(
                query(collection(db, "products"), where(genderField, "==", gender))
            );
        }

        else if (!gender && category) {
            var productDB = await getDocs(
                query(
                    collection(db, "products"),
                    where(categoryField, "==", category)
                )
            );
        }

        console.log("response ", category);

        filterProducts(productDB);

        console.log('category', category, 'gender', gender, 'main products', mainProducts);




        return {
            mainProducts: mainProducts,
            alternative: alternative,
        };



    } catch (err) {
        console.error("err", err);
    }
}
);

const allProducts = createSlice({
    name: "allProducts",
    initialState: { allProducts: [], alternative: [], isLoading: false },
    extraReducers: (builder) => {
        builder
            .addCase(GETallProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GETallProducts.fulfilled, (state, action) => {
                state.allProducts = [
                    ...state.allProducts,
                    ...action.payload["mainProducts"],
                ];
                state.alternative = [
                    ...state.alternative,
                    ...action.payload["alternative"],
                ];
                state.isLoading = false;
            })
            .addCase(GETallProducts.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default allProducts.reducer;
