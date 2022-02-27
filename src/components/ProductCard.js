import React from "react"

function ProductCard({img, brand}) {
    return (
        <div className="product-container">
            <img src={img.api_featured_image} className="image-grid" alt="makeup by dior"/>
            <p className="product-colors">+{brand.product_colors.length} colors/patterns</p>
            <h2 className="product-brand">{brand.brand}</h2>
            <p className="product-name">{brand.name}</p>
            <p className="product-rating">rating: {brand.rating || 'N/A'}</p>
            <p className="product-price">${brand.price}</p>
        </div>
    )
}

export default ProductCard;

      