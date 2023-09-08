import React, { useEffect, useState } from "react";
import CareerImg from '../../assests/career.jpg';
import CareerImg1 from '../../assests/career1.jpg';
import CareerImg2 from '../../assests/career2.jpg';
import './career.css';
import Footer from "../../homepage/footer/footer";

import AOS from 'aos';
import 'aos/dist/aos.css'
import NavbarOne from "../../homepage/navbarone/NavbarOne";

const Career = () => {
    const [career, setCareer] = useState(true);

    const onCareer = () => {
        setCareer(false)
    }

    
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])
   

    return (
        <>
        <NavbarOne />
            <div className="wrapper-career" data-aos='fade-down'>
                <h1 className="career-judul">Adventure Your Career With Us</h1>
                <p className="career-desc">We’re leading the pricing revolution and we need passionate people to join the movement.</p>
                <button className="btn btn-success tombol-career mb-5" onClick={onCareer}>
                    {
                        career ? 'Job Position' : 'Not Available'
                    }
                </button>
                
                {
                    career ? (
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 mb-2" data-aos='fade-right'>
                                    <img className="career-image" src={CareerImg} />
                                </div>
                                <div className="col-lg-4  col-md-12 mb-2" data-aos='fade-down'>
                                    <img className="career-image" src={CareerImg1} />
                                </div>
                                <div className="col-lg-4  col-md-12 mb-2" data-aos='fade-left'>
                                    <img className="career-image" src={CareerImg2} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="container" >
                            <div className="card-career" data-aos='fade-down'>
                                <h4>Job Not Available</h4>
                            </div>
                        </div>
                    )
                }
                
            </div>
            <Footer />
        </>
    );
};

export default Career