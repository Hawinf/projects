import React from "react";
import '../bedroom/bedroom.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import lr01 from '../../assests/livingroom/lr01.jpg';
import Lr02 from '../../assests/livingroom/lr02.jpg';
import Lr03 from '../../assests/livingroom/lr03.jpg';
import Lr4 from '../../assests/livingroom/lr04.jpg';
import FurnitureHome from '../../assests/furniturehomepage.jpg';
import Footer from "../../homepage/footer/footer";
import { Link } from "react-router-dom";

const LivingRoom = () => {
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
                                    <h5 className="bedroom-judul">Living Room Collection</h5>
                                    <p>Everything in Living Room collection</p>
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
                                        <Link to='/bedroom-collections'>
                                            Bedroom Collection
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
                                                <img className="bedroomsatu" src={lr01} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Lr02} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Lr03} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bedroom-collections">
                                                <img className="bedroomsatu" src={Lr4} />
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

export default LivingRoom;
