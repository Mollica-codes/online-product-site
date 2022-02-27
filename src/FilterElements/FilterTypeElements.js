import React, {useContext} from 'react';
import {Context} from '../Context';


export default function FilterTypeElements() {
    const {product, isProductChecked, filterType} = useContext(Context);
    const typeElements = product.map(product => product.product_type)

    function displayType() {
        if(isProductChecked && filterType) {
            return <p className="filter-type-display">{typeElements.slice(0, 1)}</p>
        }
    }
    return (
     <>
     {displayType()}
    {!isProductChecked &&
     <div className="filter-type-checkboxes">
        <input 
            className="filter-type-checkboxes-item"
            type="checkbox" 
            id="product_type" 
            checked={product.product_type}
            onChange={filterType}
            name='product_type'
            value='blush' />
        <label  
            className="filter-type-checkboxes-label" 
            htmlFor="product_type">
                Blush
        </label>
        <input 
            className="filter-type-checkboxes-item"
            type="checkbox" 
            id="product_type" 
            checked={product.product_type}
            onChange={filterType}
            name='product_type' 
            value='bronzer'/>
        <label 
            className="filter-type-checkboxes-label" 
            htmlFor="product_type">
                Bronzer
        </label>
        <input 
            className="filter-type-checkboxes-item"
            type="checkbox" 
            id="product_type" 
            checked={product.product_type}
            onChange={filterType}
            name='product_type' 
            value='eyebrow'/>
        <label 
            className="filter-type-checkboxes-label" 
            htmlFor="product_type">
                Eyebrow
        </label>
        <input 
            className="filter-type-checkboxes-item"
            type="checkbox" 
            id="product_type" 
            checked={product.product_type}
            onChange={filterType}
            name='product_type' 
            value='eyeliner'/>
        <label 
            className="filter-type-checkboxes-label" 
            htmlFor="product_type">
                Eyeliner
        </label>
        <input 
            className="filter-type-checkboxes-item"
            type="checkbox" 
            id="product_type" 
            checked={product.product_type}
            onChange={filterType}
            name='product_type' 
            value='eyeshadow'/>
        <label 
            className="filter-type-checkboxes-label" 
            htmlFor="product_type">
                Eyeshadow
        </label>
        <input 
            className="filter-type-checkboxes-item"
            type="checkbox" 
            id="product_type" 
            checked={product.product_type}
            onChange={filterType}
            name='product_type' 
            value='foundation'/>
        <label 
            className="filter-type-checkboxes-label" 
            htmlFor="product_type">
                Foundation
        </label>
        <input
            className="filter-type-checkboxes-item" 
            type="checkbox" 
            id="product_type" 
            checked={product.product_type}
            onChange={filterType}
            name='product_type' 
            value='lip_liner'/>
        <label 
            className="filter-type-checkboxes-label" 
            htmlFor="product_type">
                Lip Liner
        </label>
        <input 
            className="filter-type-checkboxes-item"
            type="checkbox" 
            id="product_type" 
            checked={product.product_type}
            onChange={filterType}
            name='product_type' 
            value='lipstick'/>
        <label 
            className="filter-type-checkboxes-label" 
            htmlFor="product_type">
                Lipstick
        </label>
        <input 
            className="filter-type-checkboxes-item"
            type="checkbox" 
            id="product_type" 
            checked={product.product_type}
            onChange={filterType}
            name='product_type' 
            value='mascara'/>
        <label 
            className="filter-type-checkboxes-label" 
            htmlFor="product_type">
                Mascara
        </label>
        <input 
            className="filter-type-checkboxes-item"
            type="checkbox" 
            id="product_type" 
            checked={product.product_type}
            onChange={filterType}
            name='product_type' 
            value='nail_polish'/>
        <label 
            className="filter-type-checkboxes-label" 
            htmlFor="product_type">
                Nail Polish
        </label>
     </div>
    }
    </>
    )
}