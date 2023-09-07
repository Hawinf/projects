import React from "react";
import { Link } from "react-router-dom";
// import PowderPic from '../../../assests/product-powder.jpg';
import GlPowderSun from '../../../assests/gl.powder.sun.png';
import GlPowderOven from '../../../assests/gl.powder.oven.png';
import KonjacPowder from '../../../assests/konjac.powder.jpg';
import './powder.css'
import Footer from "../../../homepage/footer/footer";

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Powder = () => {
    
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])
    return (
    <>
        <div className="powder" data-aos='fade-down'>
            <div className="container">
                <div className="powder-detail mb-5">
                    <div className="powder-left">
                        <img src={KonjacPowder}  />
                    </div>
                    <div className="powder-right">
                        <h6 className="powder-right-judul">Konjac Powder</h6>
                        <p className="powder-right-desc">Treehouse California Almonds is a leader in creating diced almonds for its customers in a variety of sizes to ensure that their products retain their distinctiveness – and nutritional halo – in the marketplace. We dice natural, roasted and organic almonds for customers around the world. Food producers appreciate the precise, consistent sizes of our diced almonds, which lets them use 100% of what they receive from us – with zero waste and zero compromise in product quality or process efficiency</p>
                        <Link to='/contact' className='btn btn-success link'>
                            Get Quotation
                        </Link>
                    </div>
                </div>
                <div className="powder-detail mb-5">
                    <div className="powder-left">
                        <img src={GlPowderSun}  />
                    </div>
                    <div className="powder-right">
                        <h6 className="powder-right-judul">Glucomannan Powder Sun Dried</h6>
                        <p className="powder-right-desc">Treehouse California Almonds is a leader in creating diced almonds for its customers in a variety of sizes to ensure that their products retain their distinctiveness – and nutritional halo – in the marketplace. We dice natural, roasted and organic almonds for customers around the world. Food producers appreciate the precise, consistent sizes of our diced almonds, which lets them use 100% of what they receive from us – with zero waste and zero compromise in product quality or process efficiency</p>
                        <Link to='/contact' className='btn btn-success link'>
                            Get Quotation
                        </Link>
                    </div>
                </div>
                <div className="powder-detail mb-5">
                    <div className="powder-left">
                        <img src={GlPowderOven}  />
                    </div>
                    <div className="powder-right">
                        <h6 className="powder-right-judul">Glucomannan Powder Oven Dried</h6>
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
