import React from "react";
// import Marquee from "react-marquee-slider";
import ProductRice from '../../assests/product-rice.jpg';
import ProductPowder from '../../assests/product-powder.jpg';
import ProductSugar from '../../assests/product-sugar.jpg';
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Footer from '../../homepage/footer/footer.js'
import './product.css'

const Product = () => {
    return (
        <div>
            <div className="product">
                <div className="container">
                    <div className="product-header">
                        <h1 className="product-tittle">Products Category</h1>
                        <p className="product-desc">Sourced from a wide array of public reviews, we’ve narrowed down this list of the top 10 of our products available now. The top contenders were judged on a variety of factors, but the main categories were boiled down to sheer heat, a balance of sweet, and overall flavor.</p>
                    </div>
                </div>
            </div>
            <div className="marque-text">
                <Marquee>
                        <h4 className="marque-desc">The Landsnature team seeks out the highest existing quality standards and certifications and then consistently surpasses them to achieve ever-greater product excellence to serve our customers.</h4>
                </Marquee>
            </div>
            <div className="product-category">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card-product">
                                <div className="card">
                                        <img src={ProductRice} />
                                        <h6 className="product-judul">Rice</h6>
                                        <p>Food producers appreciate the precise, consistent sizes of our our product, which lets them use 100% of what they receive from us – with zero waste and zero compromise in product quality or process efficiency</p>
                                        <Link className='btn btn-success'>Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-product">
                                <div className="card">
                                        <img src={ProductSugar} />
                                        <h6 className="product-judul">Sugar</h6>
                                        <p>Food producers appreciate the precise, consistent sizes of our our product which lets them use 100% of what they receive from us – with zero waste and zero compromise in product quality or process efficiency</p>
                                        <Link className='btn btn-success'>Learn More</Link>        
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-product">
                                <div className="card">
                                        <img src={ProductPowder} />
                                        <h6 className="product-judul">Powder</h6>
                                        <p>Food producers appreciate the precise, consistent sizes of our product, which lets them use 100% of what they receive from us – with zero waste and zero compromise in product quality or process efficiency</p>
                                        <Link className='btn btn-success'>Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;