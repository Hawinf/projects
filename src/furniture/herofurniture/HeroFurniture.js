import React from "react";
import './herofurniture.css';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import LivingRoom from '../../assests/fclivingroom.jpg';
import Kitchen from '../../assests/fckitchen.jpg';
import Tables from '../../assests/fctables.jpg';
import Chair from '../../assests/fcchairs.jpg';
import Wardrobe from '../../assests/fcwardrobe.jpg';
import Bedroom from '../../assests/fcbedroom.jpg';
import Statue from '../../assests/fcstatue.jpg';

const HeroFurniture = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <>
            <div className="hero-furniture" data-aos='fade-down'>
                {/* <h1 className="herofurniture-judul" data-aos='fade-right'>THE FUTURE IS KNOCKING</h1>
                <Link className="btn btn-success herofurniture-tombol" data-aos='fade-left'>
                    See More
                </Link> */}
            </div>
            <div className="cate-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="categorysatu">
                                <img className="categorypertama" src={LivingRoom} />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="categorysatu">
                                <img className="categorypertama" src={Kitchen} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="categorysatu mt-4">
                                <img className="categorypertama" src={Wardrobe} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="categorysatu mt-4">
                                <img className="categorypertama" src={Bedroom} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="categorysatu mt-4">
                                <img className="categorypertama" src={Statue} />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="categorysatu mt-4">
                                <img className="categorypertama" src={Tables} />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="categorysatu mt-4">
                                <img className="categorypertama" src={Chair} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroFurniture;