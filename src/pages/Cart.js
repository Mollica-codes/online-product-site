import React, {useState, useContext} from 'react';
import {Context} from '../Context'
import CartItem from '../components/CartItem'

export default function Cart() {
    const [buttonText, setButtonText] = useState('Place Order')
    const {cartItem, emptyCart} = useContext(Context);
    const cartItemElements = cartItem.map(item => (
        <CartItem key={item.id} item={item}/>
    ))

    function getTotalCost() {
        let totalCostValue = 0
        let prices = cartItem.map(item => item.price)
        for (let i = 0; i < cartItem.length; i++) {
            totalCostValue += parseFloat(prices[i])
        }
        return totalCostValue.toLocaleString("en-US", {style: "currency", currency: "USD"})  
    }

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (
        <div className="cart-page-wrapper">
            <h1>Cart Check Out</h1>
            {cartItemElements}
            {cartItem.length > 0 && <p className="cart-total">Total: {getTotalCost()}</p>}
            {
                cartItem.length > 0 ?
                <div className="place-order">
                    <button className='place-order-btn' onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>Your Cart is Empty :(</p>
            }
        </div>
    )
}
