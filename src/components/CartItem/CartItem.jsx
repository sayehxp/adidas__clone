//____________CARTITEM________________
import React from 'react'
import './CartItem.css'
//__________________________
const CartItem = () => {
    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });


    return (
        <div className="prd-item my-4 d-flex">

            <div className="prd-img">
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    width={180} height={170}
                    className='ms-3'
                />
            </div>


            <div className="prd-descr">
                <span className='fw-bold'>Product Name</span>

                <div className='prd-price'>

                    <del className='prev-price'>
                        {currency.format(99999)}
                    </del>
                    <span className="cur-price">
                        {currency.format(5555)}
                    </span>

                </div>

                <span> مقاس : <small>24</small>  </span>

                <select className='prd-qty'>
                    <option value={1}>1</option>
                </select>


                <div className='prd-stock mt-3'>
                    <span className='text-secondary'>
                        <small>only 2 left</small>
                    </span>
                </div>
            </div>





        </div>
    )
}

export default CartItem