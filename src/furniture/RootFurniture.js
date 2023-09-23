import React from "react";
import FurnitureHome from '../../src/assests/furniturehomepage.jpg';
import './rootfurniture.css'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import HeroFurniture from "./herofurniture/HeroFurniture";


const RootFurniture = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return(
        <>
            <div className="rootfurniture">
                <Link to='/' data-aos='fade-down'>
                    <img className="furniture-logo" src={FurnitureHome} />
                </Link>
            </div>
            <HeroFurniture />
        </>
    );
};

export default RootFurniture;