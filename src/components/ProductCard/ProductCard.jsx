import React, { useState } from 'react';
import './ProductCard.css';
import Slickslide from '../Slickslide/Slickslide';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToWishList, removeFromWishList } from '../../Store/Slices/fav';
import { heartIconPath } from '../../config/config';
import WishlistAlert from '../WishListAlert/WishListAlert';
import Loading from '../Loading/Loading';

const ProductCard = ({ prd }) => {
 
  const [ximg, setXimg] = useState('');
  const [hoverON, setHoverON] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });

  const Navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const showSecondImg = () => {
    setXimg(prd.imgurl[4]);
    setHoverON(true);
  };

  const hideSecondImg = () => {
    setXimg('');
    setHoverON(false);
  };

  const handleWishList = () => {
    const isProductInWishlist = favorites.some((item) => item === prd.id);

    if (isProductInWishlist) {
      dispatch(removeFromWishList(prd.id));
      setAlertMessage('لقد تم حذف المنتج من لائحة المنتجات التي تتمناها.');
    } else {
      dispatch(addToWishList(prd.id));
      setAlertMessage('تمت إضافة المنتج إلى قائمة الرغبات الخاصة بك.');
    }
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div>
     
        <div>
          {showAlert && <WishlistAlert message={alertMessage} onClose={closeAlert} />}
          <figure
            className={hoverON ? 'prd-card card-border' : 'prd-card'}
            onMouseEnter={showSecondImg}
            onMouseLeave={hideSecondImg}
          >
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
                  <a onClick={() => Navigate(`/details/${prd.name.slice(0, 10)}`, { state: prd })} className="img-lnk">
                    <img src={ximg || prd.imgurl[0]} className="w-100" />
                  </a>
                </div>
                <div className="pct-discount text-end">
                  <span>-25%</span>
                </div>
                <div className={hoverON ? 'd-flex slick-slide-container' : 'd-none slick-slide-container'}>
                  {prd.similars &&
                    prd.similars.map(({ img, id }) => (
                      <Slickslide imgurl={img} id={id} setXimg={setXimg} key={uuidv4()} />
                    ))}
                </div>
              </picture>
            </div>
            <figcaption className="prd-body">
              <div className="prd-name">
                <a href="">{prd.name} </a>
              </div>
              <div className="prd-price">
                <del className="prev-price">
                  <span content={prd.oldprice}>{currency.format(prd.oldprice)}</span>
                </del>
                <span className="curr-price" content={prd.price}>
                  {currency.format(prd.price)}
                </span>
              </div>
            </figcaption>
          </figure>
        </div>
     
    </div>
  );
};

export default ProductCard;
