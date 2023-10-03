import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import FurnitureHome from '../../assests/furniturehomepage.jpg';
import Bedroom1 from '../../assests/bedroom1.jpg';
import Bedroom2 from '../../assests/bedroom2.jpg';
import Bedroom3 from '../../assests/bedroom3.jpg';
import Bedroom4 from '../../assests/bedroom4.jpg';
import Bedroom5 from '../../assests/dipan.jpg';
import Bedroom6 from '../../assests/29.jpg';
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
                                <div className="col-lg-3 mb-4" data-aos='fade-right'>
                                    <h5 className="bedroom-judul">Bedroom Collection</h5>
                                    <p>Everything in Bedroom collection</p>
                                    <Link to='/contact' className='btn btn-success kontak-bedroom'>
                                        Get Quotation
                                    </Link>
                                    <h5 className="bedroom-judul mt-4">
                                        See More Other Products
                                    </h5>
                                    <div>
                                        <Link to='/homepagefurniture'>
                                            Everything In Furniture
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to='/livingroom-collections'>
                                            Living Room Collection
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to='/kitchen-collections'>
                                            Kitchen Collection
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to='/wardobe-collections'>
                                            Wardrobe Collection
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to='/chairs-collection'>
                                            Chairs Collection
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to='/statue-collections'>
                                            Statue Collection
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to='/tables-collections'>
                                            Tables Collection
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-9" data-aos='fade-left'>
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
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Bedroom5} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Bedroom6} />
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