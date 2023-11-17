//____________PRODUCTDETAILS________________
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom';

//__________________________
const ProductDetails = () => {
  const {id} = useParams();

  return (
    <div> {id}</div>
  )
}

export default ProductDetails