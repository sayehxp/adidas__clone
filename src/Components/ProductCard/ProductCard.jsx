import React, { useContext, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addToWishList } from '../../Store/Slices/wishlistSlice';
import { heartIconPath } from '../../config/config';
import Slickslide from '../Slickslide/Slickslide';

import './ProductCard.css';
import appContext from '../../Context/appContext';


const ProductCard = ({ prd, defaultHover = true , defaultXimg = true }) => {


  const [ximg, setXimg] = useState('');

  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const [hoverON, setHoverON] = useState(false)
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
  const navigate = useNavigate();
  const { setActiveWishlistAlert, setMsgWishListAlert } = useContext(appContext)


  const handleWishList = () => {
    const isProductInWishlist = favorites.some((item) => item === prd.id);

    if (isProductInWishlist) {
      dispatch(addToWishList(prd.id));
      setMsgWishListAlert('تم الحذف من قائمة الرغبات.');
      setActiveWishlistAlert(true);
    } else {
      dispatch(addToWishList(prd.id));
      setMsgWishListAlert('تم الإضافة لقائمة الرغبات');
      setActiveWishlistAlert(true);

    }
    setShowAlert(true);
  };

  const percentage = () => {
    if(prd.oldprice >= prd.price){
      return 0;
    }
    let percentage = Math.floor((prd.price / prd.oldprice) * 100);
    percentage = Math.round(percentage / 5) * 5;
    return prd.oldprice ? percentage : 0;

  }

  const SlickSlideMemo = useMemo(
    () =>
      <>
        <Slickslide prdId={prd.id} setXimg={setXimg} key={uuidv4()} />
        {prd.alternative && prd.alternative.map(id => <Slickslide prdId={id} setXimg={setXimg} key={uuidv4()} />)}
      </>
    , [])




  const showSecondImg = () => {
    if(defaultXimg){
      setXimg(prd.imgurl[2]);
      setHoverON(true)
    }
  
  }
  const hideSecondImg = () => {
    setXimg('');
    setHoverON(false);
  }




  return (
    <>

      <figure
        className={hoverON && defaultHover ? 'prd-card card-border position-absolute bg-light pb-3' : 'prd-card'}
        style={{ 'zIndex': 9 }}
        onMouseEnter={showSecondImg}
        onMouseLeave={hideSecondImg}>


        <div className="position-relative">
          <img
            className="Love-card"
            style={{ width: 50, height: 20 }}
            src={favorites.some((item) => item === prd.id) ? heartIconPath.filled : heartIconPath.empty}
            onClick={handleWishList}
            title="wishlist"
          />

          <picture>

            <div className="prd-img">

              <a onClick={() => navigate(`/details/${prd.id}`)}
                className='img-lnk'>
                <img src={ximg || prd.imgurl[0]} className='w-100' />
              </a>
            </div>

            {percentage() > 0 &&
              <div className="pct-discount text-end">
                <span>-{percentage()}%</span>
              </div>}





            {/* ____________________________________________Slickslide ___________________________________________________*/}

            <div className={`slick-slide-container ${hoverON && defaultHover ? 'd-flex' : 'd-none'} flex-row-reverse justify-content-start`}>

              {SlickSlideMemo}

            </div>




          </picture>
        </div>



        <figcaption className="prd-body">
          <div className="prd-name">
            <a href="">{prd.name}</a>
          </div>
          <div className="prd-price">
            <del className={percentage() ? 'prev-price' : 'd-none'}>
              <span content={prd.oldprice}>{currency.format(prd.oldprice)}</span>
            </del>
            <span className="curr-price" content={prd.price}>{currency.format(prd.price)}</span>
          </div>
        </figcaption>


      </figure>
    </>
  )

}


export default ProductCard;