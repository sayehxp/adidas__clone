//____________SLICKSLIDE________________
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Slickslide.css';
import { useSelector } from "react-redux";
import { useRef } from "react";

//__________________________
const Slickslide = ({setXimg = ()=>{} , prdId}) => {

const firestore = getFirestore();
const navigate = useNavigate();
const showImage = (imgurl) => setXimg(imgurl.replace('w_50','w_250'));
const hideImage = () => setXimg('');
const [prd ,  setPrd] = useState();
const alternative = useSelector((state) => state.allProducts.alternative)
const allProducts = useSelector((state) => state.allProducts.allProducts)
const effRan = useRef(false);

 useEffect(()=>{

//   const readDoc = async()=>{

//     try {

//       const docRef = doc(firestore, 'products', prdId);
//       const docSnapshot = await getDoc(docRef);
//       setPrd(docSnapshot.data())
  
//     } catch (error) {
      
//     }
    
  
//   }
 
// readDoc()
if(effRan.current) return

// console.log("_____________________________________________________________________")
// console.log("prd is in alternative " , alternative.find((prd)=> prd.id == prdId)?.id)
// console.log("prd is in allproducts " , allProducts.find((prd)=> prd.id == prdId)?.id)
// console.log("_____________________________________________________________________")
const _prd = alternative.find((prd)=> prd.id == prdId) || allProducts.find((prd)=> prd.id == prdId) ;
setPrd(_prd);

return ()=>{effRan.current = true}



 },[])






// console.log('slickslid render')


  
  return (
  <>
   {prd && <div className='slick-slide' onMouseEnter={()=> showImage(prd.imgurl[0])} onMouseLeave={hideImage}>
         
      <a onClick={()=> navigate(`/details/${prd.id}`)}>
        <img src={prd.imgurl[0]} height={45} width={45}/>
        {/* <h1>{prd.id}</h1> */}
      </a>


    </div>
  }
  </>
  )
}

export default Slickslide