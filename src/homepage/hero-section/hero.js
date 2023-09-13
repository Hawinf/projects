import React from "react";
import './hero.css'
import { Link } from "react-router-dom";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'

const HeroSection = () => {
    useEffect(() => {
        AOS.init({duration: 1000})
    },[])

    return (
        <div className="hero-wrapper" data-aos='zoom-in'>
            <div className="container">
                <div className="hero">
                    <div className="hero-left">
                        <h1 className="hero-judul" >Taste The Difference</h1>
                        <h5 className="hero-judul1">Grab The Quality Of Our Product</h5>
                        <Link to='/contact' className="btn btn-success hero-tombol">
                            Connect
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;