//____________SLICKSLIDE________________

import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './Slickslide.css';

//__________________________
const Slickslide = ({setXimg = ()=>{} , prdId}) => {


const navigate = useNavigate();
const showImage = (imgurl) => setXimg(imgurl.replace('w_50','w_250'));
const hideImage = () => setXimg('');
const [prd ,  setPrd] = useState();
const alternative = useSelector((state) => state.allProducts.alternative)
const allProducts = useSelector((state) => state.allProducts.allProducts)
const effRan = useRef(false);

 useEffect(()=>{

if(effRan.current) return


const _prd = alternative.find((prd)=> prd.id == prdId) || allProducts.find((prd)=> prd.id == prdId) ;
setPrd(_prd);

return ()=>{effRan.current = true}



 },[])

  
  return (
  <>
   {prd && <div className='slick-slide' onMouseEnter={()=> showImage(prd.imgurl[0])} onMouseLeave={hideImage}>
         
      <a onClick={()=> navigate(`/details/${prd.id}`)}>
        <img src={prd.imgurl[0]} height={45} width={45}/>
        {/* <h1>{prd.id}</h1> */}
      </a>


    </div>
  }
  </>
  )
}

export default Slickslide