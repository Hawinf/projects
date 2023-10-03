import React from "react";
import Chair01 from '../../assests/Chair/c1.jpg';
import Chair02 from '../../assests/Chair/c2.jpg';
import Chair03 from '../../assests/luxsofa.jpg';
import Chair04 from '../../assests/chair040.jpg';
import Chair05 from '../../assests/chair01.jpg';
import Chair06 from '../../assests/Chair03.jpg';
import Footer from "../../homepage/footer/footer";
import { Link } from "react-router-dom";
import FurnitureHome from '../../assests/furniturehomepage.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import '../bedroom/bedroom.css';

const Chairs = () => {
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
                                    <h5 className="bedroom-judul">Chairs Collection</h5>
                                    <p>Everything in chairs collection</p>
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
                                        <Link to='/bedroom-collections'>
                                            Bedroom Collection
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
                                                <img className="bedroomsatu" src={Chair01} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Chair02} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Chair03} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Chair04} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Chair05} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Chair06} />
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

export default Chairs;