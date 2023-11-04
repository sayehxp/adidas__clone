import React, { useState } from 'react'
import './ProductCard.css'
import Slickslide from '../../Components/Slickslide/Slickslide';
const ProductCard = ({ imgUrl, name, currPrice, prevPrice, pctDiscount , similars }) => {
const [ximg ,  setXimg] = useState('')

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'EGP'
  });
const ss = ()=>
{
 
}


  return (
    
    <figure className='prd-card' onMouseEnter={ss}>

      <picture>
        
        <div className="prd-img">
          <a href="" className='img-lnk'>
            <img src={ximg || imgUrl} className='w-100' />
          </a>
        </div>
      
      
        <div className="pct-discount text-end">
          <span>{pctDiscount}</span>
        </div>

        <div className="d-flex slick-slide-container">
          
          {similars && similars.map(s => <Slickslide imgurl={s} setXimg = {setXimg}/>)}

        </div>

      </picture>

      

      <figcaption className="prd-body">
        <div className="prd-name">
          <a href="">{name}</a>
        </div>
        <div className="prd-price">
            <del className='prev-price'>
              <span content={prevPrice}>{currency.format(prevPrice)}</span>
            </del>
            <span class="curr-price" content={currPrice}>{currency.format(currPrice)}</span>
        </div>
      </figcaption>


    </figure>
  )
}

export default ProductCard