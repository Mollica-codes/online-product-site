import React, {useContext} from 'react';
import {Context} from '../Context'

function CartItem({item}) {
    const {removeCartItem} = useContext(Context)
    

    return (
        <div className="checkout-cart-item">
            <div className="checkout-cart-item-left">
                <button className="checkout-cart-item-remove-btn" onClick={() => removeCartItem(item.id)}><i class="fa-solid fa-trash"></i></button>
                <img className="checkout-cart-item-img" src={item.api_featured_image} alt="makeup cart item" />
                <p className="checkout-cart-item-name">{item.name}</p>
            </div>
            <div className="checkout-cart-item-right">
                <p className="checkout-cart-item-price">${item.price}</p>   
            </div>
        </div>
    )
}

export default CartItem