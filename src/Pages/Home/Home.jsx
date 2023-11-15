
import './Home.css'
import './AdidasBtn.css'
import './HomeRWD.css'
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '../../Components/ProductCard/ProductCard'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { GETallProducts } from "../../Store/Slices/allProducts";

export default function Home() {

//   const [whatsNew, setWhatsNew] = useState([])
//   const [whatMostSold, setWhatMostSold] = useState([])


//   async function handleGetDoc(coll) {
//     const res = await getDocs(collection(db, coll))
//     return res.docs.map(doc => ({ ...doc.data(), id: doc.id }))

//   }

  
//   const allProducts = useSelector((state)=> state.allProducts.allProducts)
//   const dispatch = useDispatch()
  
//   useEffect(() => {

//     handleGetDoc("what's new").then(data => setWhatsNew(data));
//     handleGetDoc("what's most sold").then(data => setWhatMostSold(data));

//     dispatch(GETallProducts()) 

  
//   }, [])

//   useEffect(()=>{

//   },[allProducts])

// function handleSwiperNav(num) {
//     return {
//       nextEl: `.swiper${num}-btn-next`,
//       prevEl: `.swiper${num}-btn-prev`,
//       disabledClass: `.swiper${num}-button-disabled`
//     }

// }



// const swiperBreakPoints1 = {

//     0: {
//       slidesPerView: 2,
//       speed: 400,
//       slidesPerGroup: 2
//     },

//     768: {
//       slidesPerView: 4,
//       speed: 500,
//       slidesPerGroup: 3
//     }

// }
// const swiperBreakPoints2 = {
  
//   0: {
//     slidesPerView: 1,
//     speed: 400,
//     slidesPerGroup: 1
//   },

//   768: {
//     slidesPerView: 4,
//     speed: 500,
//     slidesPerGroup: 3
//   }


// }
// const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return `<span class="${className}"></span>`;
//     },
// };




  return (
  //  
  <div> home</div>



  )
}
