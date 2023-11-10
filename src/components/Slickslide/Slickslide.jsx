//____________SLICKSLIDE________________
import React from 'react'
import './Slickslide.css'
import { useNavigate } from 'react-router-dom'
//__________________________
const Slickslide = ({ setXimg , similarPrd}) => {
  let navigate = useNavigate();
  const showImage = (imgurl) => setXimg(imgurl.replace('w_50','w_250'));
  const hideImage = () => setXimg('');
  console.log("similarPrd" , similarPrd)





  
  return (
    <div className='slick-slide' 
    onMouseEnter={()=> showImage(similarPrd.imgurl[0])}
    onMouseLeave={hideImage}>
           
        <a 
                      
        onClick={()=> navigate(`/details/${similarPrd.name.slice(0,10)}}`, { state: similarPrd })}
        >
        <img src={similarPrd.imgurl[0]} height={45} width={45}/>
        </a>


    </div>
  )
}

export default Slickslide