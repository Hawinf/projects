import React from "react";
import './rice.css'
import RiceOrdinary from '../../../assests/rice-ordinary.png';
import RicePremium from '../../../assests/rice-premium.png';
import Footer from "../../../homepage/footer/footer";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Rice = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <>
            <div className="rice-header" data-aos='fade-down'>
                <div className="rice-hero">
                    <div className="container">
                        <div className="product-rice mb-5">
                            <div className="rice-left" data-aos='fade-right'>
                                <div className="rice-card">
                                    <img className="detail-rice" src={RicePremium}  />
                                </div>
                            </div>
                            <div className="rice-right" data-aos='fade-left'>
                                <h6 className="rice-right-judul">Rice Premium</h6>
                                <p className="rice-right-desc">premium konjac rice stands out as a high-quality alternative to traditional rice, known for its low-calorie, low-carb, and gluten-free properties. Its premium designation often implies superior texture, taste, and overall quality compared to standard konjac rice products. This culinary innovation offers health-conscious individuals and those with dietary restrictions a satisfying option for reducing calorie and carbohydrate intake without sacrificing flavor or satisfaction. Incorporating premium konjac rice into a well-balanced diet can be a valuable addition.
                                </p>
                                <Link to='/contact' className="btn btn-success link">
                                    Get Quotation
                                </Link>
                            </div>
                        </div>
                        
                        <div className="product-rice">
                            <div className="rice-left">
                                    <div className="rice-card" data-aos='fade-right'>
                                        <img className="detail-rice" src={RiceOrdinary}  />
                                    </div>
                                </div>
                                <div className="rice-right" data-aos='fade-left'>
                                    <h6 className="rice-right-judul">Rice Ordinary</h6>
                                    <p  className="rice-right-desc"> ordinary konjac rice presents a practical and health-conscious alternative to traditional rice, valued for its low-calorie, low-carb, and gluten-free characteristics. While it may not boast the premium quality or unique texture of specialized konjac rice products, it provides a viable option for individuals seeking to reduce calorie and carbohydrate intake. This versatile culinary ingredient offers the potential for weight management and digestive benefits due to its high fiber content.
                                    </p>
                                    <Link to='/contact' className="btn btn-success link">
                                        Get Quotation
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Rice;
