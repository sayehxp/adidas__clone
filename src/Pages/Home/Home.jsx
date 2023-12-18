
import './AdidasBtn.css';
import './Home.css';
import './HomeRWD.css';
import React, { useMemo } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Local_Images, handleSwiperNav, pagination, swiperBreakPoints1, swiperBreakPoints2, swiperBreakPoints3 } from '../../config/config';






export default function Home() {

  const cover = useSelector((state) => state.setting.cover);
  const allProducts = useSelector((state) => state.allProducts.allProducts)
  const alternative = useSelector((state) => state.allProducts.alternative)
  const Navigate = useNavigate();





  const hotProducts = useMemo(() => {
    const randomArr = (length, diff) => Array.from({ length }, () => Math.floor(Math.random() * diff));

    return randomArr(10, allProducts.length - 1).map(number =>
      <SwiperSlide key={uuidv4()}>
        <ProductCard prd={allProducts[number]} defaultHover={false} defaultXimg={false} />
      </SwiperSlide>
    )
  }
    , [allProducts])




  return (
    <div className='Home' role='main'>


      <div className="homepage-cover position-relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={cover.ad_desktop || Local_Images.ad_desktop} />
          <img src={cover.ad_mobile || Local_Images.ad_mobile} alt="sponser image" className='w-100' />
        </picture>

        <div className="homepage-cover-text position-absolute">
          <p className='homepage-cover-text--title'>تشكيلة خاصة </p>
          <p className='homepage-cover-text--descr'>
            تسوق تشكيلة النادى الأهلى
          </p>
          <div className='homepage-cover-text--button mt-4' onClick={() => Navigate('/srch/al-ahly/all')}>

            <button className='btn-adidas-light'
            >
              <i className="arrow-front" />
              <i className="arrow-back" />
              استعراض التشكيلة
            </button>
          </div>
        </div>

      </div>

      <div className="homepage-cover position-relative">

        <picture>
          <source media="(min-width: 768px)" srcSet={cover.home_desktop || Local_Images.home_desktop} />
          <img src={cover.home_mobile || Local_Images.home_mobile} alt="cover image" className='w-100' />
        </picture>

        <div className="homepage-cover-text position-absolute">
          <p className='homepage-cover-text--title'>متجر الشتاء</p>
          <p className='homepage-cover-text--descr'>حان وقـت الدفء مع مجموعاتنا الشتوية</p>

          <div className='homepage-cover-text--button mt-4' onClick={() => Navigate('/srch/winter/all')}>
            <button className='btn-adidas-light'>
              <i className="arrow-front" />
              <i className="arrow-back" />
              استعراض التشكيلة
            </button>
          </div>

        </div>


      </div>

      <div className="experience-component text-center mt-5">
        <h2 className='title'>الأكثر رواجاً</h2>
        <div className="experience-region my-4">
          <div className="box">stan smith</div>
          <div className="box">superstar</div>
          <div className="box">gazelle</div>
          <div className="box">samba</div>
          <div className="box">part sale</div>
        </div>
      </div>

      <div className="cat-container row justify-content-center m-0" >

        <div className="main-cat-box col-12 col-md-4 position-relative" onClick={() => Navigate('/srch/kids/all')}>
          <a className='position-absolute main-cat-btn d-flex'>
            <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg'></img>
            <span>Kids</span>
          </a>
        </div>

        <div className="main-cat-box col-12 col-md-4 position-relative" onClick={() => Navigate('/srch/women/all')}>


          <a className='position-absolute main-cat-btn d-flex'>
            <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg'></img>
            <span>Women</span>
          </a>

        </div>

        <div className="main-cat-box col-12 col-md-4 position-relative" onClick={() => Navigate('/srch/men/all')}>

          <a className='position-absolute main-cat-btn d-flex'>
            <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg'></img>
            <span>Men</span>
          </a>

        </div>

      </div>



      {allProducts.length > 0 &&

        <div className="experience-component product-list my-5">

          <button className="swiper1-btn-next swiper-btn-next" />
          <button className="swiper1-btn-prev swiper-btn-prev" />


          <h3 className='text-end pe-2 mt-5 mb-4'>وصل حديثاً</h3>

          <Swiper className='swiper swiper1'
            spaceBetween={10}
            navigation={handleSwiperNav(1)}
            pagination={{ pagination }}
            breakpoints={swiperBreakPoints1}
          >

            {hotProducts}


          </Swiper>


        </div>}


      {allProducts.length > 0 && <div className="experience-component product-list my-5">

        <button className="swiper2-btn-next swiper-btn-next" />
        <button className="swiper2-btn-prev swiper-btn-prev" />

        <h3 className='text-end pe-2 mt-5 mb-4'>الأفضل مبيعاً</h3>


        <Swiper className='swiper swiper2'
          spaceBetween={10}
          navigation={handleSwiperNav(2)}
          pagination={{ pagination }}
          breakpoints={swiperBreakPoints2}>

          {[...allProducts, ...alternative].sort((a, b) => b.price - a.price).slice(0, 10).map(prd =>
            <SwiperSlide key = {uuidv4()}>
              <ProductCard prd={prd} defaultHover={false} />
            </SwiperSlide>
          )}
        </Swiper>


      </div>}


      <div className="experience-component my-5 position-relative">


        <h3 className='text-end pe-2 mt-5 mb-4'> السائد والمنتشر</h3>



        <Swiper className='swiper swiper3'
          spaceBetween={15}
          navigation={handleSwiperNav(2)}
          pagination={pagination}
          slidesPerView={4}
          speed={400}
          breakpoints={swiperBreakPoints3}
        >




          <SwiperSlide>
            <figure>

              <picture>
                <img src='https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw748734db/++++++++++++++++++_____aaaaaa____BBBBB__YOGA_TC.jpg'
                  className='w-100' width={50} />
              </picture>


              <figcaption className='text-end' style={{ "fontSize": "12px" }}>
                <strong className='my-2 d-block'>وسع حدودك مع اليوغا</strong>
                <p className='opacity-75'>ناعم ، لين ، مجموعة يوغا مريحة لدعمك غى كل الوضعيات </p>
                <strong><a href='' className='text-dark mt-2'>تسوق الان</a></strong>
              </figcaption>

            </figure>
          </SwiperSlide>





          <SwiperSlide>
            <figure>
              <picture>
                <img src='https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwe0db3718/++++++++_+_+_+_+_+_+_MENA_CITYESCAPE+XPLRBOOST_SS23_TC.jpg'
                  className='w-100' />
              </picture>


              <figcaption className='text-end' style={{ "fontSize": "12px" }}>
                <strong className='my-2 d-block'>كل ما يحتاج إليه الشباب</strong>
                <p className='opacity-75'>تخطى كل الحدود بأسلوب يتميز بالراحة والأناقة. تشكيلة جديدة ولدت في قلب المدينة وانطلقت إلى </p>
                <strong><a href='' className='text-dark mt-2'>تسوق الان</a></strong>
              </figcaption>


            </figure>
          </SwiperSlide>





          <SwiperSlide >
            <figure>
              <picture>
                <img src='https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw59596362/+++++++++_aaaaaa_000000_Samba&Gazelle_TC.jpg'
                  className='w-100' />
              </picture>
            </figure>

            <figcaption className='text-end' style={{ "fontSize": "12px" }}>
              <strong className='my-2 d-block'>و تعيش الأسطورة</strong>
              <p className='opacity-75'>جلد ناعم ، خياطة ممتازة وألوان ترابية. هذا هو تراثنا</p>
              <strong><a href='' className='text-dark mt-2'>تسوق الان</a></strong>
            </figcaption>
          </SwiperSlide>







        </Swiper>

      </div>




    </div>




  )
}
