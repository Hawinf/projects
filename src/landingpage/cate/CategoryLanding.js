import React from "react";
import Food from '../../assests/food1.jpg';
import Furniture from '../../assests/furniture.jpg';
import Footer from "../../homepage/footer/footer";
import Logo from '../../assests/landsnatures-low-resolution-logo-black-on-transparent-background.png';
import './catelanding.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

const CategoryLanding = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <>
            <div className="cate-landing">
                <div className="container">
                    <div className="catenavbar">
                        <h1 className="catelanding-judul" data-aos='fade-right'>Category Product</h1>
                        <Link to='/' data-aos='fade-left'>
                            <img className="cate-logo" src={Logo} />
                        </Link>
                    </div>
                    <div className="cate-desc" data-aos='fade-right'>
                        <p className="desc-cate-p">Welcome to our product category, where you'll find a diverse selection of high-quality items to cater to your needs and desires. We take pride in offering a wide range of products that cater to various tastes, preferences, and lifestyles, ensuring that you can find what you're looking for.</p>
                        <p className="desc-cate-p">Experience the convenience of online shopping with our product category. Whether you're searching for essentials or something unique, we've got you covered. Start exploring our range today!</p>
                    </div>
                    <div className="row mt-5" data-aos='fade-right'>
                        <div className="col-lg-6 col-md-12">
                            <div className="cate-satu">
                                <Link to='/homepagefurniture'>
                                    <img className="cate-foto" src={Furniture} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos='fade-left'>
                            <div className="cate-satu">
                                <Link to='/homepagefood'>
                                    <img className="cate-foto" src={Food} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CategoryLanding;