import React from "react";
import './herofurniture.css';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const HeroFurniture = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <div className="hero-furniture" data-aos='fade-down'>
            {/* <h1 className="herofurniture-judul" data-aos='fade-right'>THE FUTURE IS KNOCKING</h1>
            <Link className="btn btn-success herofurniture-tombol" data-aos='fade-left'>
                See More
            </Link> */}
        </div>
    );
};

export default HeroFurniture;