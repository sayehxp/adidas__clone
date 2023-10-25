// eslint-disable-next-line no-unused-vars
import React from 'react'

import Carousel from 'react-bootstrap/Carousel';

const Section = () => {
  return (
    <>
     <Carousel data-bs-theme="dark w-100" >
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://assets.adidas.com/images/w_450,f_auto,q_auto/b49646d8845242faa311af3c008243b2_9366/IL8296_HM3_hover.jpg"
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://assets.adidas.com/images/w_450,f_auto,q_auto/18fc7fd70f6844458bdbaf480007a3af_9366/HQ4447_00_plp_standard.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://assets.adidas.com/images/w_940,f_auto,q_auto/31e981edb14f4c63b5beaf9d00dfaf77_9366/HR8572_21_model.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Section
