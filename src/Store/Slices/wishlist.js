import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: { wishlist: [] },

    reducers: {
      addtoWishList: (state, action) => {
        // let productId = action.payload.id;
        
        state.wishlist.push(action.payload);
        // let isProductAlreadyAdded = state.wishlist.some(item => item.id === productId);
  
        // if (isProductAlreadyAdded) {
        //     showAlert( "لقد تم حذف المنتج من لائحة المنتجات التي تتمناها" ,"dark")
        //   state.wishlist = state.wishlist.filter(item => item.id !== productId);
      
    
          
         
        // } else {
        //     showAlert(  "تمت إضافة المنتج إلى قائمة الرغبات الخاصة بك." ,"dark")
        //   state.wishlist.push(action.payload);
        
         
     
          
        // }
      },
    }
  })
    
    export const { addtoWishList } = wishlistSlice.actions;


    export default wishlistSlice.reducer;


    // function showAlert(message, type) {
    // const alertDiv = document.createElement("div");
    // alertDiv.classList.add(`alert-${type}` );
    // alertDiv.style.zIndex = "9999 !important";
    // alertDiv.style.position = "fixed !important";
    // alertDiv.style.top = "15% !important";
    // alertDiv.style.left = "50% !important";
    // alertDiv.style.transform=" translate(-50%, -50%)!important";
    // alertDiv.style.animation= "fade 5s linear forwards";
    // alertDiv.style.boxShadow= "1px 1px 5px grey";
    // alertDiv.style.padding="1em";

    //     alertDiv.textContent = message;
    //     document.body.appendChild(alertDiv);
    //     document.body.insertBefore(alertDiv, document.body.firstChild);
    //     setTimeout(() => { 
    //       alertDiv.remove();
    //     }, 3000);
    //   }
    