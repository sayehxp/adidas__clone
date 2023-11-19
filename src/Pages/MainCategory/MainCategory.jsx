import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { GETallProducts } from "../../Store/Slices/allProducts";
import './MainCategory.css'
import { getWishListFirestore } from '../../Store/Slices/fav';
import { getWishlistByEmail } from './../WishList/firebasewishList';
import Loading from '../../components/Loading/Loading';
export default function MainCategory() {
  const isLoading = useSelector((state) => state.allProducts.isLoading);
  const { catName } = useParams();
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const effRan = useRef(false);

  useEffect(() => {
    if (effRan.current) return;

    dispatch(GETallProducts());

    getWishlistByEmail()
      .then((data) => dispatch(getWishListFirestore(data)))
      .catch((err) => console.log(err));

    effRan.current = true;
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='main'>
          <h2>
            <i>MainCategory</i> {catName}
          </h2>
          <div className='row prd-row'>
            {allProducts &&
              allProducts.map((prd) => (
                <div className='col-12 col-sm-4 col-md-3 p-0 prd-container' key={prd.id}>
                  <ProductCard prd={prd} />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
