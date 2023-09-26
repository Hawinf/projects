import React  from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Test from '../../assests/hero-land.jpg';
import './herosectionlanding.css';
import { Link } from "react-router-dom";

const HeroSectionLanding = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <div className="hero-landing">
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-land-left" data-aos='fade-right'>
                            <h1 className="hero-land-judul">Connecting all leaders to their future potential</h1>
                            <p className="hero-land-desc">In partnership with the world’s top business schools, our enterprise leadership development solutions create a diverse pool of future-ready leaders.</p>
                            <Link to='/contact' className="btn btn-success link">
                                Connect
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6" >
                        <div className="hero-land-right" data-aos='fade-left'>
                            <img className="hero-right-pict" src={Test} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionLanding;