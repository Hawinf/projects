import React from "react";
import Quality from '../../assests/quality-service.png';
import Comitment from '../../assests/relationship.png';
import Inovation from '../../assests/innovation.png';
import Rate from '../../assests/rating.png';
import './content.css'

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Content = () => {
    
useEffect(() => {
    AOS.init({duration: 2000})
},[])

    return (
        <div className="content-wrapper" data-aos='fade-down'>
            <div className="container">
                <div className="content-title">
                    <h1 className="content-judul">Why Us ?</h1>
                    <p className="content-desc">Our Key Features</p>
                </div>
                <div className="main-content">
                    <div className="row">
                        <div className="col-lg-4 mb-2">
                            <div className="card" data-aos='fade-left'>
                                <img className="feature-img" src={Quality} alt="Quality Service" />
                                <h1 className="key-feature">Quality</h1>
                                <p className="feature-desc">Quality is exhibited in many ways by selling and supporting products and services that delight customers, establishing a work environment, and delivering results that meet customer expectations.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="card" data-aos='fade-down'>
                                <img  className="feature-img" src={Comitment} alt="Trust Worthy" />
                                <h1 className="key-feature">Trust Worthy</h1>
                                <p className="feature-desc">Commitment is important where we will continue to provide the best to our customers and investors all the time. Our opportunity to serve should be viewed as a privilege that is not to be taken for granted.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="card" data-aos='fade-right'>
                                <img  className="feature-img" src={Inovation} alt="Innovation" />
                                <h1  className="key-feature">Innovation</h1>
                                <p className="feature-desc">Innovation refers to the process of creating and introducing new ideas, products, services, or processes that improve or solve existing problems in a novel and effective way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;