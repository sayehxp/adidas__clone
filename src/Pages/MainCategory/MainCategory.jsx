import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { GETallProducts } from "../../Store/Slices/allProducts";
import './MainCategory.css'
export default function MainCategory() {

  const {catName} = useParams();
  const allProducts = useSelector((state)=> state.allProducts.allProducts)
  const dispatch = useDispatch()

  useEffect(() => {
 
    dispatch(GETallProducts()) 

  
  }, [])





  return (


<div className='main'>

<h2> <i>MainCategory</i>    {catName} </h2>
<div className="row prd-row">


{allProducts && allProducts.map(prd => 
<div className="col-12 col-sm-4 col-md-3 p-0 prd-container">
<ProductCard pctDiscount={"-25%"} name={prd.name} prevPrice={prd.oldprice} currPrice={prd.price} imgUrl={prd.imgurl[0]} similars = {prd.similars}/>
</div>
  )}
</div>

</div>

     
  
  )
}
