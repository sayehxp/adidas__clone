import React, { useState } from 'react'
import './ProductCard.css'
import Slickslide from '../Slickslide/Slickslide';
const ProductCard = ({ imgUrl, name, currPrice, prevPrice, pctDiscount , similars }) => {
const [ximg ,  setXimg] = useState('')
const [hoverON ,  setHoverON] = useState(false)
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'EGP'
  });
const showSecondImg = ()=> {
  setXimg(imgUrl[4]);
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
          <a href= {`details/${name}`} className='img-lnk'>
            <img src={ximg || imgUrl[0]} className='w-100' />
          </a>
        </div>
      
      
        <div className="pct-discount text-end">
          <span>{pctDiscount}</span>
        </div>

        <div className = {hoverON ? 'd-flex slick-slide-container' : 'd-none slick-slide-container'}>
          
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