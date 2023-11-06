//____________PRODUCTDETAILS________________
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';
//__________________________

const ProductDetails = () => {
  const {id} = useParams();


  useEffect(()=>{
    const docRef = doc(db, "products", "0TfJKFyOmh58zrKmC7Lp");
    getDoc(docRef).then((sanp)=> console.log(sanp.data()));  
  }
  
  ,[])




  return (
    <div> {id}</div>
  )
}

export default ProductDetails