import React, { useState } from 'react'
import './ProductCard.css'
import Slickslide from '../Slickslide/Slickslide';
import { v4 as uuidv4 } from 'uuid';

const ProductCard = ({prd}) => {
const [ximg ,  setXimg] = useState('')
const [hoverON ,  setHoverON] = useState(false) 
const currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'EGP'});

const showSecondImg = ()=> {
  setXimg(prd.imgurl[4]);
  setHoverON(true)
}
const hideSecondImg = ()=> {
  setXimg('');
  setHoverON(false)
}


  return (
    
    <figure 
    className= {hoverON ? 'prd-card card-border' : 'prd-card'} 
    onMouseEnter={showSecondImg} 
    onMouseLeave={hideSecondImg}
    >

    
    <picture>
        
        <div className="prd-img">
          <a href= {`details/${prd.id}`} className='img-lnk'>
            <img src={ximg || prd.imgurl[0]} className='w-100' />
          </a>
        </div>
      
      
        <div className="pct-discount text-end">
          <span>-25%</span>
        </div>

        <div className = {hoverON ? 'd-flex slick-slide-container' : 'd-none slick-slide-container'}>
          
          {prd.similars && prd.similars.map(({img , id}) => 
          <Slickslide 
          imgurl = {img}
          id = {id}
          setXimg = {setXimg} 
          key={uuidv4()}/>)}

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
            <span class="curr-price" content={prd.price}>{currency.format(prd.price)}</span>
        </div>
      </figcaption>


    </figure>
  )
}

export default ProductCard