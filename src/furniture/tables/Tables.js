import React from "react";
import '../bedroom/bedroom.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import DiningTable1 from '../../assests/diningtables/Diningtable01.jpg';
import DiningTable2 from '../../assests/diningtables/Diningtable02.jpg';
import DiningTable3 from '../../assests/diningtables/Diningtable03.jpg';
import DiningTable4 from '../../assests/diningtables/Diningtable04.jpg';
import FurnitureHome from '../../assests/furniturehomepage.jpg';
import { Link } from "react-router-dom";
import Footer from "../../homepage/footer/footer";
import { useEffect } from "react";

const Tables = () => {
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
                                    <h5 className="bedroom-judul">Tables Collection</h5>
                                    <p>Everything in Tables collection</p>
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
                                        <Link to='/bedroom-collections'>
                                            Bedroom Collection
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-9" data-aos='fade-left'>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={DiningTable1} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={DiningTable2} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={DiningTable3} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={DiningTable4} />
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

export default Tables;
