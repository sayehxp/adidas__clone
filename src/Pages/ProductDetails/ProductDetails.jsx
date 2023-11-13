//____________PRODUCTDETAILS________________
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import { doc, getDoc } from "firebase/firestore";
// import { db } from '../../assets/Firebase/Firebase';
import ImageZoom from "react-image-zooom";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { GETallProducts } from "../../Store/Slices/allProducts";
import Slickslide from './../../Components/Slickslide/Slickslide';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ProductDetails.css';
//__________________________

const ProductDetails = () => {

  const { id } = useParams();
  const { sim } = useParams();

  const [prd, setPrd] = useState()
  const [showMore, setShowMore] = useState(false)
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
  const [activeSize, setActiveSize] = useState('')
  const [bounceAnime, setBounceAnime] = useState(false)
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span className="${className}"></span>`;
    },
  };

  const swiperBreakPoints1 = {

    0: {
      slidesPerView: 1,
      speed: 400,
      slidesPerGroup: 1
    },

    768: {
      slidesPerView: 1,
      speed: 500,
      slidesPerGroup: 1
    }

  }
  const [innerWinWidth ,  setInnerWinWidth] = useState(window.innerWidth)
  let allProducts = useSelector((state) => state.allProducts.allProducts)
  const dispatch = useDispatch()

  const location = useLocation();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth', });

  useEffect(() => {

    if (allProducts.length) {
      setPrd(allProducts[id].similars?.[sim] || allProducts[id]);
      scrollToTop();
    } else {
      dispatch(GETallProducts());
    }


  }, [location, allProducts]);


  function handleSwiperNav(num) {
    return {
      nextEl: `.swiper${num}-btn-next`,
      prevEl: `.swiper${num}-btn-prev`,
      disabledClass: `.swiper${num}-button-disabled`
    }

  }


const prdImages =  prd?.imgurl.map((value, index) =>

  <ImageZoom
    key={uuidv4()} src={value} width={"110%"} zoom="200"

    />
)




  return (
    <div className='details row' role='main'>

      {prd && <>


        <aside className="col-4 bg- text-end pt-3">
          <p className='prd-name'>{prd.name}</p>
          <p className='prd-price'>{currency.format(prd.price)}</p>


          <div className="d-flex justify-content-between ps-3 pe-1">
            <a className='ms-4'>جدول المقاسات</a>
            <label className='fw-bold'> اختر مقاس</label>
          </div>


          <ul className={bounceAnime ? 'sizebox bounce-right' : 'sizebox'}>
            {prd.size.map((size) =>
              <li
                key={uuidv4()}
                className={!prd.availablesize.includes(size) ? 'frozen' : activeSize == size ? 'active' : ''}
                onClick={() => prd.availablesize.includes(size) ? setActiveSize(size) : null}>
                {size}
              </li>
            )}
          </ul>

          <span className='text-warning'>{bounceAnime ? 'يرجى اختيار المقاس' : ''}</span>

          <div className="qty" style={{ direction: 'rtl' }}>
            <label className='fw-bold'> إمكانية التوفر: </label>
            <span className='px-2 text-muted'>{activeSize ? `only ${Math.floor(Math.random() * 6 + 1)} left` : ' اختر الطرازات المتوفرة'}</span>
          </div>



          <div className="d-flex flex-row-reverse mt-4">




            <div className='btn-add-to-cart col-8'
              onClick={() => {
                setBounceAnime(!activeSize);

                setTimeout(() => setBounceAnime(false), 1000);
              }}
            >
              <button
                className={`btn-adidas-dark w-100 ${!activeSize ? 'bg-secondary' : ''}`}
              >
                <i className="arrow-front" />
                <i className="arrow-back" />
                <span>اضف الى عربة التسوف</span>
              </button>
            </div>



            <button className='wishlist-btn'>
              <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwaf3d05bb/images/wishlist-empty.svg" alt="wish list icon" />
            </button>

          </div>

          <div className="delivery-section">
            <ul className='mt-5 p-0 text-muted list-none'>

              <li>
                <img src="https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw000a0c97/images/adidas/icons/delivery.svg" />
                <span>شحن مجاني على الطلبات التي تزيد عن 999 جنيه مصري</span>
              </li>

              <li>
                <img src="https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwf8866ff0/images/adidas/icons/delivery-same-day.svg" />
                <span className="text">التوصيل خلال1-2 يوم عمل للمدن والمناطق الرئيسية</span>
              </li>

              <li>
                <p>(داخل القاهرة الكبرى والإسكندرية والدلتا والصعيد والبحر الأحمر) المناطق الأبعد من الممكن ان تأخذ وقت اكثر من يومين</p>
              </li>


              <li>
                <img src="https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/ar_EG/dw80a4e210/COD.png" />متاح الدفع عند الاستلام
              </li>

              <li>
                <img src="https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/ar_EG/dw69c97df7/LOCK.jpg" />
                معاملات دفع آمنة
              </li>

              <li>
                <img src="https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw000a0c97/images/adidas/icons/delivery.svg" />
                30 يوم إرجاع مجاني
              </li>

            </ul>
          </div>

        </aside>








        <main className="col-8 img_container">

              {/* {prdImages.map((image,index) => 
              <div     className={
                index == 0 ? 'main_img' :
                index == prdImages.length - 1 && prdImages.length % 2 == 0 ? `main_img ${!showMore ? 'd-none' : ''}` :
                index >= 5 ? `sub_img ${!showMore ? 'd-none' : ''}` : 'sub_img'}
                
                >{image}</div>
              )} */}

{/* 
[1] first image full width ♥
[2] next images half width ♥
[3] last image if it's odd = full width ♥
[4] any image after index 5 take display none and if 
*/}


{prd?.imgurl.map((value, index) =>

<div

 style={{
  width:index == 0 || index == prdImages.length - 1 && !(prdImages.length % 2) ? '100%': '50%',
  display : !showMore && index >= 5 ? 'none' : 'inline-flex'
}}> 
<ImageZoom key={uuidv4()} src={value} zoom="200" className={''}/>
</div>


)}


          {/* <button className="swiper1-btn-next swiper-btn-next" />
          <button className="swiper1-btn-prev swiper-btn-prev" />
          <Swiper className='swiper swiper1' 
          navigation={handleSwiperNav(1)}
          breakpoints={swiperBreakPoints1} 
          
          >
            {prdImages.map(image => <SwiperSlide className='imgslider'>{image}</SwiperSlide>)}
          </Swiper> */}





          <button className='show_more_btn centerme' onClick={() => setShowMore(!showMore)}>
            <i className={`fa-solid fa-chevron-${!showMore ? 'down' : 'up'}`} />
            <span>{!showMore ? 'أظهر المزيد' : 'أظهر أقل'}</span>
          </button>


          <div className="colors-availability text-center  pt-5" dir='rtl'>
            <span className=' fw-bolder h6'>
              {`${allProducts[prd.index].similars.length + 1} ألوان متوفرة - انظر أدناه`}
            </span>
          </div>


          {/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Slickslide▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  */}
          <div className="details-similars">

            <Slickslide prd={allProducts[prd.index]} /> {/* itself */}

            {allProducts[prd.index].similars.map((similarPrd, idx) => <Slickslide prd={similarPrd} similarIdx={idx} key={uuidv4()} />)}

          </div>
          {/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  */}



          <span className='pe-2'> {prd.color} </span>

          <div className="prd-info text-end" dir='rtl'>

            <h1 className='py-4'>وصف المنتج</h1>
            <p className='prd-name' >{prd.name}</p>
            <p className='prd-headline'>{prd.headline}</p>
            <p className='prd-description'>{prd.description}</p>

            <h2 className='mt-5'>تفاصيل المُنتج</h2>
            <ul className='prd-detail  border border-1'>
              {prd.details.map(detail => <li key={uuidv4()}>{detail}</li>)}
            </ul>

          </div>





        </main>

      </>}


    </div>
  )
}

export default ProductDetails