import React from 'react'
import './CartMenu.css'
import CartItem from '../CartItem/CartItem';
export default function CartMenu({ prd }) {




    return (
    
            <div className="cart-menu" dir='rtl'>

                <div className="cart-header">
                    <span className='h4 fw-bolder'>تمت اضافى الننتج الى حقيبة التسوق</span>
                    <span>(4 منتجات)</span>
                </div>

                <div className="cart-prd-list">
                 <CartItem/>
                 <CartItem/>
                 <CartItem/>
                 <CartItem/>
                 <CartItem/>
                 <CartItem/>
                </div>


            </div>
    
    )
}
