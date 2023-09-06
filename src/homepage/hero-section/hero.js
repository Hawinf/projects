import React from "react";
import './hero.css'
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="hero-wrapper">
            <div className="container">
                <div className="hero">
                    <div className="hero-left">
                        <h1 className="hero-judul">Taste The Difference</h1>
                        <h5 className="hero-judul1">Garb The Quality Of Our Product</h5>
                        <Link to='/contact' className="btn btn-success">
                            Connect
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;