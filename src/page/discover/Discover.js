import React  from "react";
import { Link } from "react-router-dom";
import DiscoverPict from '../../assests/discover.jpg';
import Marquee from "react-fast-marquee";
import Stories5 from '../../assests/stories5.jpg';
import Stories4 from '../../assests/stories4.jpg';
import Stories3 from '../../assests/stories3.jpg';
import './discover.css';
import Footer from "../../homepage/footer/footer";

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Discover = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    const newLocal = "discover-pict";
    return (
        <>
            <div className="wrapper-discover" data-aos='fade-down'>
                <div className="container">
                    <div className="discover-content">
                        
                            <div className="discover-section-left">
                                <h2 className="discover-judul">Success Stories</h2>
                                <p className="discover-desc">Landsnature's inception was rooted in environmental consciousness, a vision that has thrived with the passage of time. Our deep concern has always revolved around the imminent threat to essential food ingredients, posed by the dwindling rice fields, unpredictable weather patterns, and recurrent planting failures. In response, we have embarked on a relentless journey of innovation, driven by a commitment to discover healthier alternatives to safeguard our future, effectively substituting for rice.</p>
                                <Link to='/contact' className="btn btn-success link">
                                    Connect With Us
                                </Link>
                            </div>
                        
                            <div className="discover-section-right">
                                <img src={DiscoverPict} />
                            </div>
                    
                    </div>
                    <div className="stories-discover">
                        <h1 className="stories-judul">The First Campaign on Landsnature Was Our Own</h1>
                        <p className="stories-desc">Landsnature had its humble beginnings as a home-based industry, working with limited production tools. Yet, during that period, our products faced fierce competition in the thriving local market due to their high demand and customer satisfaction. As our reputation grew, so did our production capacity, eventually leading us to explore international markets. Adapting to the changing times, we continuously enhance our products to cater to a broader audience, earning recognition both nationally and internationally.</p>
                    </div>
                    <div className="our-people">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="our-left">
                                <Marquee>
                                    <img className="story" src={Stories4} />
                                    <img className="story" src={Stories3} />
                                    <img className="story" src={Stories5} />
                                </Marquee>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="our-right">
                                    <h1 className="our-right-judul">Growing Together</h1>
                                    <p className="our-right-desc">Landsnature has been a remarkable source of inspiration for numerous individuals and has actively engaged the community in bolstering the local economy. Through increased production and the expansion of our workforce, we are committed to fostering economic growth. Our unwavering dedication to product excellence is driven by our overarching goal: to enrich lives in every conceivable dimension.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Discover;