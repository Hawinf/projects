import React from "react";
import { Link } from "react-router-dom";
// import PowderPic from '../../../assests/product-powder.jpg';
import GlPowderSun from '../../../assests/powder3.png';
import GlPowderOven from '../../../assests/powder2.png';
import KonjacPowder from '../../../assests/powder1.png';
import './powder.css'
import Footer from "../../../homepage/footer/footer";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import NavbarOne from "../../../homepage/navbarone/NavbarOne";

const Powder = () => {
    
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])
    return (
    <>
    <NavbarOne />
        <div className="powder" data-aos='fade-down'>
            <div className="container">
                <div className="powder-detail mb-5">
                    <div className="powder-left" data-aos='fade-right'>
                        <img src={KonjacPowder}  />
                    </div>
                    <div className="powder-right" data-aos='fade-left'>
                        <h6 className="powder-right-judul">Konjac Powder</h6>
                        <p className="powder-right-desc"> Konjac powder is a versatile and popular ingredient known for its various uses in the food and cosmetic industries. Derived from the root of the Konjac plant, it offers a range of benefits, including its ability to thicken, gel, and stabilize products. Its unique properties make it an excellent choice for thickening sauces, soups, and desserts, as well as for creating low-calorie noodles and dietary supplements.</p>
                        <Link to='/contact' className='btn btn-success link'>
                            Get Quotation
                        </Link>
                    </div>
                </div>
                <div className="powder-detail mb-5">
                    <div className="powder-left" data-aos='fade-right'>
                        <img src={GlPowderSun}  />
                    </div>
                    <div className="powder-right" data-aos='fade-left'>
                        <h6 className="powder-right-judul">Glucomannan Powder Sun Dried</h6>
                        <p className="powder-right-desc">Sun-Dried Glucomannan powder is a natural dietary supplement derived from the root of the Konjac plant. It is well-regarded for its potential health benefits, including promoting weight loss, supporting digestive health, and aiding in blood sugar management. </p>
                        <Link to='/contact' className='btn btn-success link'>
                            Get Quotation
                        </Link>
                    </div>
                </div>
                <div className="powder-detail mb-5">
                    <div className="powder-left" data-aos='fade-right'>
                        <img src={GlPowderOven}  />
                    </div>
                    <div className="powder-right" data-aos='fade-left'>
                        <h6 className="powder-right-judul">Glucomannan Powder Oven Dried</h6>
                        <p className="powder-right-desc">Oven-Dried Glucomannan powder is a dietary supplement made from the root of the Konjac plant. It offers potential health benefits, including weight management, improved digestion, and blood sugar control. Its oven-drying process helps preserve its properties and make it a convenient addition to a healthy lifestyle. When used responsibly and as part of a balanced diet, it can contribute to overall well-being.</p>
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
