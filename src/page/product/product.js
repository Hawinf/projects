import React from "react";
import './product.css'

const Product = () => {
    return (
        <>
            <div className="product">
                <div className="container">
                    <div className="product-header">
                        <h1 className="product-tittle">TOP 12 OF OUR PRODUCTS</h1>
                        <p className="product-desc">Sourced from a wide array of public reviews, we’ve narrowed down this list of the top 10 of our products available now. The top contenders were judged on a variety of factors, but the main categories were boiled down to sheer heat, a balance of sweet, and overall flavor.</p>
                    </div>
                </div>
                
            </div>
            <div className="marquee-container">
                <p className="marquee-text">This is a scrolling text. This is a scrolling text.</p>
            </div>
        </>
    );
};

export default Product;