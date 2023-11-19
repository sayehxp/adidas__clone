//____________CARTITEM________________
import React from 'react'
import './CartItem.css'
//__________________________
const CartItem = ({ prd, activeSize }) => {
    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });


    return (

        <div className="prd-item my-2 d-flex">

            <div className="prd-img">
                <img src={prd.imgurl[0]}
                    width={180} height={170}
                    className='ms-3'
                />
            </div>


            <div className="prd-descr">
                <span className='fw-bold'>{prd.name}</span>

                <div className='prd-price'>

                    <del className='prev-price'>
                        {currency.format(prd.oldprice)}
                    </del>
                    <span className="cur-price">
                        {currency.format(prd.price)}
                    </span>

                </div>

                <span> مقاس : <small>{activeSize}</small>  </span>

                <select className='prd-qty'>
                    {
                        Array(prd.stock).fill().map((_, i) =>
                            <option value={i + 1} key={i}>
                                {i + 1}
                            </option>
                        )
                    }
                </select>


                <div className='prd-stock mt-3'>
                    <span className='text-secondary'>
                        <small>only {prd.stock} left</small>
                    </span>
                </div>
            </div>





        </div>
    )
}

export default CartItem