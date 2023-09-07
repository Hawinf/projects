import React from "react";
import { Link } from "react-router-dom";
import PowderPic from '../../../assests/product-powder.jpg';
import './powder.css'
import Footer from "../../../homepage/footer/footer";

const Powder = () => {
    return (
    <>
        <div className="powder">
            <div className="container">
                <div className="powder-detail mb-5">
                    <div className="powder-left">
                        <img src={PowderPic}  />
                    </div>
                    <div className="powder-right">
                        <h6 className="powder-right-judul">Konjac Poweder</h6>
                        <p className="powder-right-desc">Treehouse California Almonds is a leader in creating diced almonds for its customers in a variety of sizes to ensure that their products retain their distinctiveness – and nutritional halo – in the marketplace. We dice natural, roasted and organic almonds for customers around the world. Food producers appreciate the precise, consistent sizes of our diced almonds, which lets them use 100% of what they receive from us – with zero waste and zero compromise in product quality or process efficiency</p>
                        <Link to='/contact' className='btn btn-success link'>
                            Get Quotation
                        </Link>
                    </div>
                </div>
                <div className="powder-detail mb-5">
                    <div className="powder-left">
                        <img src={PowderPic}  />
                    </div>
                    <div className="powder-right">
                        <h6 className="powder-right-judul">Konjac Poweder</h6>
                        <p className="powder-right-desc">Treehouse California Almonds is a leader in creating diced almonds for its customers in a variety of sizes to ensure that their products retain their distinctiveness – and nutritional halo – in the marketplace. We dice natural, roasted and organic almonds for customers around the world. Food producers appreciate the precise, consistent sizes of our diced almonds, which lets them use 100% of what they receive from us – with zero waste and zero compromise in product quality or process efficiency</p>
                        <Link to='/contact' className='btn btn-success link'>
                            Get Quotation
                        </Link>
                    </div>
                </div>
                <div className="powder-detail mb-5">
                    <div className="powder-left">
                        <img src={PowderPic}  />
                    </div>
                    <div className="powder-right">
                        <h6 className="powder-right-judul">Konjac Poweder</h6>
                        <p className="powder-right-desc">Treehouse California Almonds is a leader in creating diced almonds for its customers in a variety of sizes to ensure that their products retain their distinctiveness – and nutritional halo – in the marketplace. We dice natural, roasted and organic almonds for customers around the world. Food producers appreciate the precise, consistent sizes of our diced almonds, which lets them use 100% of what they receive from us – with zero waste and zero compromise in product quality or process efficiency</p>
                        <Link to='/contact' className='btn btn-success link'>
                            Get Quotation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer  />
    </>
    );
};

export default Powder;
