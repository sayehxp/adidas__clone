import React, { useState } from 'react'

export const CartViewItem = ({prd,totalPrisce,setTotalPrice}) => {


const RemovPrd=()=>{
    //sayeh
}

    const [qty,setqty]=useState(1)
  return (
    <div
    className="ditales border border-black p-0 mt-5"
    style={{ width: "90%", height: "310px" }}

  >
    <div className="content row ">
      <div className="text-order col-8 ">
        <div className="row text-end pt-2 ">
          <div className="col-8 text-start">
            <i onClick={RemovPrd} className="fa-solid fa-xmark mx-3"></i>
             Egp{qty*prd.price}
             
          </div>
          <p className="col-4" style={{ fontWeight: 700 }}>
            {prd.name}
          </p>
          <p>Core Black / Core Black / Cloud White</p>
          <p>مقاس: {prd.cartSize}</p>
          <p>Only 1 Left</p>
          <a href=""> عدل</a>
          <p>Only 1 Left</p>
          <div className="slect-qty   
           row justify-content-end 
          
          ">
          
            
            <select
              className="slec"
              style={{ width: "15%", height: "50px" ,border:"2px solid black"}}
              onChange={ 
                
                (e)=>{
                    
                    setqty(e.target.value);

                let total = parseInt(qty*prd.price)   ;
                setTotalPrice(total+totalPrisce)
                }}


              >
            
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
      </div>
      <div className="im-order col-4 p-0">
        <img
          src={prd.imgurl[1]}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  </div>
  )
}
