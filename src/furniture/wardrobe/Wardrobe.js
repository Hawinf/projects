import React from "react";
import '../bedroom/bedroom.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../homepage/footer/footer";
import W1 from '../../assests/cupboard/w1.jpg';
import W2 from '../../assests/cupboard/w2.jpg';
import W3 from '../../assests/cupboard/w3.jpg';
import W4 from '../../assests/cupboard/w4.jpg';
import W5 from '../../assests/cupboard/cuboard01.jpg';
import W6 from '../../assests/cupboard/cupboard02.jpg';
import FurnitureHome from '../../assests/furniturehomepage.jpg';


const Wardrobe = () => {
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
                                    <h5 className="bedroom-judul">Wardrobe Collection</h5>
                                    <p>Everything in wardrobe collection</p>
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
                                                <img className="bedroomsatu" src={W1} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={W2} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={W3} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={W4} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={W5} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={W6} />
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

export default Wardrobe;
