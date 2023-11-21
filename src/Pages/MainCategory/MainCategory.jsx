// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { GETallProducts } from "../../Store/Slices/allProducts";
import './MainCategory.css'
import { useRef } from 'react';
import { addtocart } from '../../Store/Slices/cart';

export default function MainCategory() {

  const { catName } = useParams();
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const dispatch = useDispatch();
  const effRan = useRef(false);
  
  const Cartprd= useSelector((state) => state.Cart.Cartp);



  useEffect(() => {
    if (effRan.current) return;

    if (!allProducts.length) {
      dispatch(GETallProducts())
      console.log('request pai')
    }

    return () => {
      effRan.current = true;
    }

  }, [])

const addtocar=(p)=>{
  dispatch(addtocart(p))
}

console.log(Cartprd);
  return (


    <div className='main'>

      <h2> <i>MainCategory </i>{catName}</h2>

      <div className="row prd-row">


        {allProducts && allProducts.map(prd =>
          <div className="col-12 col-sm-4 col-md-3 p-0 prd-container" key={prd.id}>
            <ProductCard prd={prd} />
            {console.log(prd)}
      
            <button onClick={()=>{addtocar(prd)}}> cart</button>
          </div>

        )}


      </div>

    </div>



  )
}
