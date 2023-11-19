import React from 'react'
import { useParams } from 'react-router-dom';
export default function SubCategory() {
  const {sub,catName} = useParams();
  return (
    <div> {catName} SubCategory {sub} </div>
  )
}
