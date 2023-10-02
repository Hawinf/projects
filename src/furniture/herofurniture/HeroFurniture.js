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
import Custom from '../../assests/customization.png';
import Material from '../../assests/material.png';
import Pricing from '../../assests/pricing.png';
import Footer from "../../homepage/footer/footer";


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
                        <div data-aos='fade-down'>
                            <h3 className="hero-judul">We Deliver Our Furniture To The World</h3>
                            <p className="hero-desc">Landsnature’s design and layout are tailored to promote collaboration, creativity, and comfort. We follow a detailed process to meet your end to end customization needs. Our highly qualified, creative, and skilled team ensures to deliver top-notch outcomes with premium quality and given time frame, making teams work efficiently and effectively.</p>
                            <p className="hero-desc">A "customizable furniture" implies that customers have the flexibility to personalize or tailor the product according to their individual preferences and needs, allowing for a more personalized and unique purchase experience.</p>
                            <h3 className="hero-judul">What We Offers</h3>
                        </div>
                        <div className="hero-sistem" data-aos='fade-up'>
                            {/* <div className="row"> */}
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="hero-kartu">
                                        <img className="hero-gambar" src={Custom} />
                                        <h5 className="kartu-judul">customization</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div  className="hero-kartu">
                                        <img className="hero-gambar" src={Pricing} />
                                        <h5 className="kartu-judul">Budget Planning</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="hero-kartu">
                                        <img className="hero-gambar" src={Material} />
                                        <h5 className="kartu-judul">Material</h5>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                        <h3 className="hero-judul" data-aos='fade-right'>Product Category</h3>
                        <p className="hero-desc" data-aos='fade-left'>Welcome to our Customizable Furniture collection, where you have the power to create furniture that truly reflects your unique style and preferences. We understand that every home is special, and your furniture should be too. Our customizable furniture category empowers you to design pieces that perfectly fit your vision, making your living spaces a true reflection of your personality and lifestyle.</p>
                        <p className="hero-desc" data-aos='fade-right'>Elevate your home decor to the next level with furniture that's uniquely yours. Explore our Customizable Furniture category and start designing today!</p>
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