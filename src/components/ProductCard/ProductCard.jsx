import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Slickslide from '../Slickslide/Slickslide';
import './ProductCard.css';


const ProductCard = ({ prd }) => {


  const [ximg, setXimg] = useState('');

  const [hoverON, setHoverON] = useState(false)
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
  const navigate = useNavigate();

  const SlickSlideMemo = useMemo(
    () => 
    <>
      <Slickslide prdId = {prd.id} setXimg = {setXimg} key={uuidv4()}/>
      {prd.alternative && prd.alternative.map(id => <Slickslide prdId = {id} setXimg = {setXimg} key={uuidv4()}/>)}
    </> 
    , [])




  const showSecondImg = () => {
    setXimg(prd.imgurl[4]);
    setHoverON(true)
  }
  const hideSecondImg = () => {
    setXimg('');
    setHoverON(false);
  }




  return (

    <figure
    className= {hoverON ? 'prd-card card-border' : 'prd-card'} 
      onMouseEnter={showSecondImg}
      onMouseLeave={hideSecondImg}>


      <picture>

        <div className="prd-img">

          <a onClick={() => navigate(`/details/${prd.id}`)}
            className='img-lnk'>
            <img src={ximg || prd.imgurl[0]} className='w-100' />
          </a>
        </div>

        <img style={{ width: 50, height: 20 }} src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/ar_EG/v1697860680345/images/wishlist.svg" title="wishlist" />
        <div className="pct-discount text-end">
          <span>-25%</span>
        </div>





        {/* ____________________________________________Slickslide ___________________________________________________*/}

        <div className={`slick-slide-container ${'d-flex flex-row-reverse justify-content-start'} `}>
          {SlickSlideMemo}
  
        </div>




      </picture>



      <figcaption className="prd-body">
        <div className="prd-name">
          <a href="">{prd.name}</a>
        </div>
        <div className="prd-price">
          <del className='prev-price'>
            <span content={prd.oldprice}>{currency.format(prd.oldprice)}</span>
          </del>
          <span className="curr-price" content={prd.price}>{currency.format(prd.price)}</span>
        </div>
      </figcaption>


    </figure>
  )
}

export default ProductCard