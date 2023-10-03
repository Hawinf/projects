import React from "react";
import '../bedroom/bedroom.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../homepage/footer/footer";
import Kc1 from '../../assests/diningtables/Diningtable01.jpg';
import Kc2 from '../../assests/diningtables/Diningtable02.jpg';
import Kc3 from '../../assests/diningtables/Diningtable03.jpg';
import Kc4 from '../../assests/diningtables/Diningtable04.jpg';
import Kc5 from '../../assests/diningtable011.jpg';
import Kc6 from '../../assests/diningtable.jpg';
import FurnitureHome from '../../assests/furniturehomepage.jpg';


const Kitchen = () => {
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
                                    <h5 className="bedroom-judul">Dining Collection</h5>
                                    <p>Everything in Dining collection</p>
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
                                        <Link to='/wardobe-collections'>
                                            Wardrobe Collection
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
                                    <div>
                                        <Link to='/chairs-collection'>
                                            Chair Collection
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
                                                <img className="bedroomsatu" src={Kc1} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Kc2} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Kc3} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Kc4} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Kc5} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Kc6} />
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

export default Kitchen;