//____________SLICKSLIDE________________
import React from 'react'
import './Slickslide.css'
//__________________________
const Slickslide = ({imgurl , setXimg}) => {
const showImage = (imgurl) => {
  setXimg(imgurl.replace('w_50','w_250'))
}
const hideImage = () => {
  setXimg('')
}

  return (
    <div className='slick-slide' 
    onMouseEnter={()=> showImage(imgurl)}
    onMouseLeave={hideImage}
    >
       <img src={imgurl} height={45} width={45}/>
    </div>
  )
}

export default Slickslide