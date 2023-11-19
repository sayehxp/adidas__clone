

import { register } from 'swiper/element/bundle';
import { useEffect, useRef, useState } from 'react';



register();
export default function Offers() {


const swiperRef = useRef(null);

useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
        disabledClass: "swiper-button-disabled"
      },
     


    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();


  }, []);






const [activeColor ,  setActiveColor] = useState(0)
const [activeSize ,  setActiveSize] = useState(1)
const isActiveColor = (color) => color == activeColor ? 'active' : ''
const isActiveSize = (size) => size == activeSize ? 'active' : ''


return (

<>



</>
)
}
