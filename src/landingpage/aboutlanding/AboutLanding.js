import React from "react";
import About from '../../assests/aboutlanding3.jpg';
import './aboutlanding.css';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const AboutLanding = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return(
        <div className="container">
            <div className="about-landing">
                <div className="aboutlanding-left" data-aos='fade-right'>
                    <img src={About} />
                </div>
                <div  className="aboutlanding-right" data-aos='fade-left'>
                    <h1 className="aboutlandind-judul">Landsnatures</h1>
                    <h6 className="aboulanding-desc">We pioneered Leadership Development to help all home industry manufactures in Indonesia to reach their future potential. In partnership with the world’s top business, we deliver our product-enhancing programs home industry and meaningful impact for enterprises.</h6>
                    <Link to='/discover' className="btn btn-success about-tombol">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutLanding;