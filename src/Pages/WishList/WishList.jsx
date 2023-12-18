import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import WishlistEmpty from "../../Components/WishListEmpty/WishListEmpty";
import { GETallProducts } from "../../Store/Slices/allProducts";
import "./Wishlist.css";
import ProductCard from "../../components/ProductCard/ProductCard";


/////////////////////////////////////////////////////////////////////
export default function WishList() {

  const favorites = useSelector((state) => state.favorites.favorites);
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const alternative = useSelector((state) => state.allProducts.alternative);

  const dispatch = useDispatch();
  const Navigate = useNavigate();


  const findPrdById = (id) => [...allProducts, ...alternative].find(prd => prd.id == id);
  const email = localStorage.getItem('email');


  useEffect(() => {
    if (!allProducts.length) {
      dispatch(GETallProducts())

    }
  }, [favorites]);





  return (
    <>

      {favorites.length === 0 ? <WishlistEmpty />
        :
        <>

          <div className="wishlist-start m-5">
            <div className="wishlist-second">
              <h1 className="wishlist-title">
                قائمة الرغبات
                <span className="wishlist-count1 js-wishlist-count d-md-none">
                  ({favorites.length})
                </span>
              </h1>
              <div className="wishlist-count hidden-sm-down">
                <h3 className="js-wishlist-count">{favorites.length}</h3>منتجات
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className={`col-md-6 col-sm-6 col-12 wishlist-grid-login ${email ? 'd-none' : ''}`}>
                <div className="wishlist-login-section">
                  <h2>لا تفقد قائمة المنتجات التي تتمناها</h2>
                  <p>
                    قم بالتسجيل أو تسجيل الدخول لحفظ المنتج (المنتجات) حتى لا
                    تفقدها.
                  </p>
                  <div className="wishlist-Login-btn"
                    onClick={() => Navigate("/Login")}>

                    <button className="btn-adidas-dark">
                      <span>تسجيل الدخول / التسجيل</span>
                      <i className="arrow-front" />
                      <i className="arrow-back" />

                    </button>
                  </div>
                </div>
              </div>



              <div className="wishlist-items-container px-3 d-flex justify-content-end">
                
                {allProducts.length > 0 && favorites.map(id => 
                  <div className="col-12 col-sm-4 col-md-3 p-0 prd-container" >
                    <ProductCard prd={findPrdById(id)} defaultHover={false} defaultXimg={false} />
                  </div>

                )}

              </div>




            </div>



          </div>



        </>
      }
    </>
  );
}
