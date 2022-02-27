import React, {useContext} from 'react';
import {Context} from '../Context'

export default function FilterPriceElements() {
    const {product, isPriceChecked, filterPrice} = useContext(Context);

    const priceElements = product.map(price => price.price)
    function displayPrice() {
        if(isPriceChecked && filterPrice) {
            if(priceElements <= '20') {
                return <p>Less than $20.00</p>
            } else if (priceElements <= '40') {
                return <p>Less than $40.00</p>
            } else if (priceElements > '40') {
                return <p>Greater than $40.00</p>
            }
    }
}
    return (
        <>
        {displayPrice()}
        {!isPriceChecked &&
        <div className="filter-type-checkboxes">
           <input 
                className="filter-type-checkboxes-item"
                type="checkbox" 
                id="price" 
                checked={product.price}
                onChange={filterPrice}
                name='price'
                value='20' />
            <label 
                className="filter-type-checkboxes-label" 
                htmlFor="price">Less than $20.00</label>
            <input 
                className="filter-type-checkboxes-item"
                type="checkbox" 
                id="price" 
                checked={product.price}
                onChange={filterPrice}
                name='price'
                value='40' />
            <label 
                className="filter-type-checkboxes-label"
                htmlFor="price">$20.00 to $40.00</label>
            <input 
                className="filter-type-checkboxes-item"
                type="checkbox" 
                id="price" 
                checked={product.price}
                onChange={filterPrice}
                name='price'
                value='40.01' />
            <label 
                className="filter-type-checkboxes-label" 
                htmlFor="price">Greater than $40.00</label>
        </div>
        }
        </>
    )
}