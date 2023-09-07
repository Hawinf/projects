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
        <div className="wrapper-product">
            <div className="product">
                <div className="container">
                    <div className="product-header">
                        <h1 className="product-tittle">Products Category</h1>
                        <p className="product-desc">Sourced from a wide array of public reviews, we’ve narrowed down this list of the top 3 of our products available now. The top contenders were judged on a variety of factors and overall.</p>
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
                                        <p className="card-desc"> konjac rice is a made from the konjac plant's root, offers a viable option for individuals seeking to reduce calorie and carbohydrate intake, particularly for those following low-carb or ketogenic diets.</p>
                                        <Link to='/rice' className='btn btn-success link'>
                                            Learn More
                                        </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-product">
                                <div className="card">
                                        <img src={ProductSugar} />
                                        <h6 className="product-judul">Sugar</h6>
                                        <p className="card-desc">Moderation is key when it comes to sugar intake, and it's important to be mindful of hidden sugars in processed foods and drinks. Choosing natural sweeteners or alternatives and maintaining a balanced diet is essential for promoting overall health and well-being.</p>
                                        <Link to='/sugar' className='btn btn-success link'>
                                            Learn More
                                        </Link>        
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-product">
                                <div className="card">
                                        <img src={ProductPowder} />
                                        <h6 className="product-judul">Powder</h6>
                                        <p className="card-desc"> konjac powder is a versatile and unique ingredient derived from the konjac plant's root. Its high content of glucomannan fiber gives it various applications in the food industry as a thickening agent, gelling agent, and low-calorie, low-carb alternative in various dishes.</p>
                                        <Link to='/powder' className='btn btn-success link'>
                                            Learn More
                                        </Link>
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