import React , {useContext, useState} from 'react';
import {Context} from '../Context';
import {Link ,useParams} from 'react-router-dom'


function Product() {
    const [hexIndex, setHexIndex] = useState([])
    const {productId} = useParams()
    const {product, addCartItem} = useContext(Context)
    const productElem = product.find(product => product.id === JSON.parse(productId))

    function hexColor() {
        let hexColors = []
        let index = []
        for(let i = 0; i < productElem.product_colors.length; i++) {
            hexColors.push(productElem.product_colors[i].hex_value)
            index.push(i)
        }
        return ([
           hexColors.map(item => <div className="hex-colors" style={{backgroundColor: item}} onClick={() => setHexIndex(hexColors.indexOf(item))}></div>)
        ])
    }

    function hexName() {
        let hexName = []
        for(let i = 0; i < productElem.product_colors.length; i++) {
            hexName.push(productElem.product_colors[i].colour_name)
        }
        return (
           <p className="hex-name">Color: {hexName[hexIndex]}</p>
        )
    }
    const date = new Date().toLocaleDateString('en-us', { weekday:"long", month:"short", day: "numeric"}) 
    return (
        <main className='products-page-wrapper'>
            <div className="products-page-wrapper-left">
            <Link to="/" className="router-link"><button className="products-home-btn">Back to Home</button></Link>
            <img className="products-page-img" src={productElem.api_featured_image} alt="product page display"/>
            <div className="hex-colors-wrapper">
                {hexColor()}
             </div>
            {hexName()}
             </div>
             <div className="products-page-wrapper-right">
                <p className="products-page-name">{productElem.name}</p>
                <p className="products-page-rating">rating: {productElem.rating || "N/A"}</p>
                <p className="products-page-price">${productElem.price}</p>
                <p className="products-page-description">{productElem.description}</p>
            </div>
            <div className="products-page-checkout">
                <p className="products-page-price">${productElem.price}</p>
                <p className="products-page-checkout-returns">Free Returns</p>
                <p className="products-page-checkout-delivery">FREE delivery on orders purchased before <span className="product-date">{date}.</span></p>
                <p className="products-page-checkout-stock">In Stock.</p>
                <select className="products-page-checkout-selection">
                    <option>Quantitiy: 1</option>
                    <option>Quantitiy: 2</option>
                    <option>Quantitiy: 3</option>
                    <option>Quantitiy: 4</option>
                    <option>Quantitiy: 5</option>
                </select>
                <button onClick={() => addCartItem(productElem)} className="products-cart-btn add-to-cart">Add to Cart</button>
                <button className="products-cart-btn buy-now">Buy Now</button>
                <p className="products-page-checkout-security"><i class="fa-solid fa-lock"></i> Secure transaction</p>
                <p className="products-page-checkout-shipping"><span className="grey-color">Ships from</span> BeautyCo</p>
                <p>Return policy: <span className="blue-color">Eligible for Return, Refund, or Replacement</span></p>
            </div>
        </main>
    )
}

export default Product;