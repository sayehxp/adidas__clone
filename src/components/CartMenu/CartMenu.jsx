import React from 'react'
import './CartMenu.css'
import CartItem from '../CartItem/CartItem';
export default function CartMenu({ prd, setCartMenuActive, activeSize }) {
    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });



    return (

        <div className="shadow-container">
            <div className="cart-menu" dir='rtl'>


                <div className="close-btn" onClick={() => setCartMenuActive(false)}>
                    <i className="fa-solid fa-xmark fs-4" />
                </div>


                <div className="cart-header">
                    <span className='h5 fw-bolder ms-2'>تمت اضافى الننتج الى حقيبة التسوق</span>
                    <span>(4 منتجات)</span>
                </div>

                <div className="cart-prd-list">
                    <CartItem prd={prd} activeSize={activeSize} />
                </div>

                <div className="cart-reciet">

                    <div className="cart-reciet-total d-flex justify-content-between">
                        <span>المجموع : </span>
                        <span>{currency.format(66666)}</span>
                    </div>


                    <div className="cart-reciet-delivery d-flex justify-content-between">
                        <span>التوصيل : </span>
                        <span>مجاناً</span>
                    </div>

                    <label className='fw-bold my-3'>لقد حصلت على خدمة شحن مجانية!</label>
                    <div className="cart-total-price d-flex justify-content-between pt-2 fw-bold border-top border-dark">
                        <small><span>المجموع : </span></small>
                        <small><span>{currency.format(66666)}</span></small>

                    </div>




                    <button className='btn-adidas-dark w-100 mt-3'>
                        <span>استعراض الحقيبة</span>
                        <i className="arrow-back me-auto" />
                        <i className="arrow-front me-auto" />
                    </button>


                    <button className='btn-adidas-light w-100 mt-3 border border-dark'>
                        <span style={{ "fontSize": "18px" }}>عملية الدفع</span>
                        <i className="arrow-back me-auto" />
                        <i className="arrow-front me-auto" />
                    </button>


                </div>


            </div>
        </div>

    )
}
