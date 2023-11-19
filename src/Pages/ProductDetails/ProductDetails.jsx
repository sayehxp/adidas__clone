//____________PRODUCTDETAILS________________
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';
import './ProductDetails.css';
import Slickslide from './../../components/Slickslide/Slickslide';
// import ImageZoom from "react-image-zooom";
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

//__________________________

const ProductDetails = () => {

  const { id } = useParams();
  const [prd, setPrd] = useState()
  const [showMore, setShowMore] = useState(false)
  const currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'EGP'});
  const [activeSize ,  setActiveSize] = useState('')
  const [bounceAnime ,  setBounceAnime] = useState(false)
  const filter_img = (arr) => {
    while (!arr[arr.length - 1].endsWith('detail.jpg')) {
      arr.pop()
    }
    return arr;
  }
  const allProducts = useSelector((state) => state.allProducts.allProducts)


  // console.log('myData', locationState);


  //get doc by id
  // useEffect(() => {
  //   const docRef = doc(db, "products", id);
  //   getDoc(docRef).then((sanp) => {
  //     const data = sanp.data()
  //     data.imgurl = filter_img(data.imgurl)
  //     setPrd(data)
  //   });

  // }, [])

  //print prd
  // useEffect(()=>{
  // console.log(prd)
  // },[prd])

  const location = useLocation();

  useEffect(()=>{
  location.state.imgurl = filter_img(location.state.imgurl)
  setPrd(location.state);

  },[])

  useEffect(()=>{
    console.log('prd is' , prd)
    console.log('all prds ' , allProducts)
  },[prd])



  return (
    <div className='details row' role='main'>

{prd && <>
  

      <aside className="col-4 bg- text-end pt-3">
      <p className='prd-name'>{prd.name}</p>
      <p className='prd-price'>{currency.format(prd.price)}</p>
      
      
      <div className="d-flex justify-content-between ps-3 pe-1">
        <a href=''>جدول المقاسات</a>
        <label className='fw-bold'> اختر مقاس</label>
      </div>


      <ul className={bounceAnime ? 'sizebox bounce-right' : 'sizebox'}>
        {prd.size.map((size) => 
        <li 
            key={uuidv4()}
            className= {!prd.availablesize.includes(size) ? 'frozen' : activeSize == size ? 'active' : ''}
            onClick={()=> prd.availablesize.includes(size) ? setActiveSize(size) : null}>
                {size}
        </li>
          )}
      </ul>
      
      <span className='text-warning'>{bounceAnime ? 'يرجى اختيار المقاس' : ''}</span>

      <div className="qty" style={{direction:'rtl'}}>
        <label className='fw-bold'> إمكانية التوفر: </label>
        <span className='px-2 text-muted'>{activeSize ? `only ${Math.floor(Math.random() * 6 + 1)} left`: ' اختر الطرازات المتوفرة'}</span>
      </div>
    
      

      <div className="d-flex flex-row-reverse mt-4">
    
  

    
  <div className='btn-add-to-cart col-8'
  onClick={()=> {
    
    setBounceAnime(!activeSize);

    setTimeout(() => setBounceAnime(false), 1000);
  }}
  >
      <button 
      className={`btn-adidas-dark w-100 ${!activeSize ? 'bg-secondary' : ''}`} 
      >
          <i className="arrow-front"/>
          <i className="arrow-back"/>
        اضف الى عربة التسوف
      </button>
      </div>



        <button className='wishlist-btn'>
          <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwaf3d05bb/images/wishlist-empty.svg" alt="wish list icon" />
        </button>

      </div>

      <div className="delivery-section">
        <ul className='mt-5 p-0 text-muted list-none'>
          
          <li>
            <img src="https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw000a0c97/images/adidas/icons/delivery.svg"/>
            <span>شحن مجاني على الطلبات التي تزيد عن 999 جنيه مصري</span>
          </li>
          
          <li>
              <img src="https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwf8866ff0/images/adidas/icons/delivery-same-day.svg"/>
              <span className="text">التوصيل خلال1-2 يوم عمل للمدن والمناطق الرئيسية</span>    
          </li>

          <li>
          <p>(داخل القاهرة الكبرى والإسكندرية والدلتا والصعيد والبحر الأحمر) المناطق الأبعد من الممكن ان تأخذ وقت اكثر من يومين</p>
          </li>

          
          <li>
            <img src="https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/ar_EG/dw80a4e210/COD.png"/>متاح الدفع عند الاستلام
          </li>

          <li>
            <img src="https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/ar_EG/dw69c97df7/LOCK.jpg"/>
            معاملات دفع آمنة
          </li>

          <li>
            <img src="https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw000a0c97/images/adidas/icons/delivery.svg"/>
            30 يوم إرجاع مجاني
          </li>

        </ul>
        </div>

      </aside>








        <main className="col-8 img_container">

          {prd.imgurl.map((value, index) =>
         
            <ImageZoom
            key={uuidv4()}
            src={value}
            width={"110%"}
            zoom = "200"
              className={
                index == 0 ? 'main_img' :
                index == prd.imgurl.length - 1 && prd.imgurl.length % 2 == 0 ? `main_img ${!showMore ? 'd-none' : ''}` :
                index >= 5 ? `sub_img ${!showMore ? 'd-none' : ''}` : 'sub_img'
              } />
        

          )}







          <button className='show_more_btn centerme' onClick={() => setShowMore(!showMore)}>
            <i className={`fa-solid fa-chevron-${!showMore ? 'down' : 'up'}`} />
            <span>{!showMore ? 'أظهر المزيد' : 'أظهر أقل'}</span>
          </button>
          
          <div className="similars text-end">
          {allProducts[prd.dx].similars.map(prd => <Slickslide similarPrd={prd} />)}
            
            <span className='pe-2'> {prd.color} </span>
          </div>



          <div className="prd-info text-end" dir='rtl'>

            <h1 className='py-4'>وصف المنتج</h1>
              <p className='prd-name' >{prd.name}</p>
              <p className='prd-headline'>{prd.headline}</p>
              <p className='prd-description'>{prd.description}</p>

            <h2 className='mt-5'>تفاصيل المُنتج</h2>
              <ul className='prd-detail'>
                {prd.details.map(detail => <li key={uuidv4()}>{detail}</li>)}
              </ul>

          </div>





        </main>

</>}
      

    </div>  
  )
}

export default ProductDetails