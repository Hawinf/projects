import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import FurnitureHome from '../../assests/furniturehomepage.jpg';
import Bedroom1 from '../../assests/bedroom1.jpg';
import Bedroom2 from '../../assests/bedroom2.jpg';
import Bedroom3 from '../../assests/bedroom3.jpg';
import Bedroom4 from '../../assests/bedroom4.jpg';
import { useEffect } from "react";

import './bedroom.css';
import { Link } from "react-router-dom";
import Footer from "../../homepage/footer/footer";

const Bedroom = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <>
            <div className="bedroom">
                <div>
                    <Link to='/'>
                        <img className="bedroomlogo" src={FurnitureHome} data-aos='fade-down'/>
                    </Link>
                    <div className="container">
                        <div className="bedroom-gallery">
                            <div className="row">
                                <div className="col-lg-4" data-aos='fade-right'>
                                    <h5>Bedroom</h5>
                                    <p>bedrrom bedroom dbjsahsjhdj jkhhsdjh</p>
                                </div>
                                <div className="col-lg-8" data-aos='fade-left'>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Bedroom1} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Bedroom2} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Bedroom3} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Bedroom4} />
                                            </div>
                                        </div>
                                    </div>
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

export default Bedroom;