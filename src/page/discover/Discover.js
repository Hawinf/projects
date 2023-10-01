import React  from "react";
import { Link } from "react-router-dom";
import DiscoverPict from '../../assests/hero-land.jpg';
import Marquee from "react-fast-marquee";
import Stories5 from '../../assests/stories5.jpg';
import Stories4 from '../../assests/stories4.jpg';
import Stories3 from '../../assests/stories3.jpg';
import './discover.css';
import Footer from "../../homepage/footer/footer";
import NavbarOne from "../../homepage/navbarone/NavbarOne";

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
        <NavbarOne />
            <div className="wrapper-discover" data-aos='fade-down'>
                <div className="container">
                    <div className="discover-content">
                        
                            <div className="discover-section-left" data-aos='fade-left'>
                                <h2 className="discover-judul">About Us</h2>
                                <p className="discover-desc">Welcome to <b>Landsnature</b> - Your Gateway to Quality Products from Trusted Manufacturers!</p>
                                <p className="discover-desc">We're proud to present a curated marketplace where you can explore an extensive range of exceptional products sourced directly from trusted manufacturers across the globe. We believe that choice, quality, and convenience should be at the forefront of your shopping experience, and that's precisely what we offer.</p>
                                <p className="discover-desc">Experience the joy of discovering high-quality products crafted by trusted manufacturers from around the world, all conveniently available in one place. Unlock a world of possibilities and make your shopping experience extraordinary with <b>Landsnature</b>.</p>
                                <Link to='/contact' className="btn btn-success link">
                                    Connect With Us
                                </Link>
                            </div>
                        
                            <div className="discover-section-right" data-aos='fade-right'>
                                <img src={DiscoverPict} />
                            </div>
                    
                    </div>
                    <div className="stories-discover" data-aos='zoom-out'>
                        <h1 className="stories-judul">The First Campaign on Landsnature Was Our Own</h1>
                        <p className="stories-desc">We are thrilled to unveil our very first marketing campaign, and we couldn't be more excited to share it with you. "Discover <b>Landsnature</b>!" is not just a campaign; it's an invitation to embark on a journey of exploration, excellence, and exceptional experiences. Our campaign is all about uncovering the hidden gems that await you on <b>Landsnature</b>. From unique products to exclusive offers, we're shining a spotlight on what sets us apart.</p>
                        <p className="stories-desc">Stay connected, stay inspired, and stay tuned for the amazing surprises that await you. Welcome to <b>Landsnature</b>, where every discovery is a joy!</p>
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
                            <div className="col-lg-6 col-md-6" data-aos='fade-out'>
                                <div className="our-right">
                                    <h1 className="our-right-judul">Growing Together</h1>
                                    <p className="our-right-desc">We believe in the power of growth and the strength of community. Our "Growing Together" initiative is more than just a campaign, it's a reflection of our dedication to fostering progress and unity.</p>
                                    <p className="our-right-desc"><b>Landsnature</b> has been a remarkable source of inspiration for numerous individuals and has actively engaged the community in bolstering the local economy. Through increased production and the expansion of our workforce, we are committed to fostering economic growth. Our unwavering dedication to product excellence is driven by our overarching goal: to enrich lives in every conceivable dimension.</p>
                                    <p className="our-right-desc">Together, we grow stronger, reach higher, and achieve more.</p>
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