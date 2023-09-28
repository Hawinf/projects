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
                    <div className="">
                        <p>jhdsajbsjbdsjbdsjkdsjkfjkekjewjrijeir uiewui ioiuiei ciewiieieitiuiiid fjh uiuhtu4huihi</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-5" data-aos='fade-right'>
                            <div className="categorysatu mt-4">
                                <Link to='/livingroom-collections'>
                                    <img className="categorypertama" src={LivingRoom} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7" data-aos='fade-left'>
                            <div className="categorysatu mt-4">
                                <Link to='/kitchen-collections'>
                                    <img className="categorypertama" src={Kitchen} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4" data-aos='fade-right'>
                            <div className="categorysatu mt-4">
                                <Link to='/wardobe-collections'>
                                    <img className="categorypertama" src={Wardrobe} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4" data-aos='fade-down'>
                            <div className="categorysatu mt-4" >
                                <Link to='/bedroom-collections'>
                                    <img className="categorypertama" src={Bedroom} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4" data-aos='fade-left'>
                            <div className="categorysatu mt-4">
                                <Link to='/statue-collections'>
                                    <img className="categorypertama" src={Statue} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7" data-aos='fade-right'>
                            <div className="categorysatu mt-4">
                                <Link to='/tables-collections'>
                                    <img className="categorypertama" src={Tables} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5" data-aos='fade-left'>
                            <div className="categorysatu mt-4">
                                <Link to='/chairs-collection'>
                                    <img className="categorypertama" src={Chair} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroFurniture;