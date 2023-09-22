import React, { useEffect, useState } from "react";
import LOGO from '../../assests/logo3.png';
import MENU from '../../assests/menu.png';
import IG from '../../assests/instagram.png';
import LINKEDIN from '../../assests/linkedin.png';
import TWEET from '../../assests/twitter.png';
import FB from '../../assests/facebook.png';
import CLOSE from '../../assests/cancel.png';
import HEADERKONJAC from '../../assests/hero-section.png';
import './navbar.css'
import { Link } from "react-router-dom";

import HeroSection from "../hero-section/hero";
import About from '../about/index';
import Content from '../contents/content'
import Category from "../category/category"
import Footer from "../footer/footer";
import CardTop from "../card/CardTop";
import ContentDropdown from '../dropdown/Dropdown';

import AOS from 'aos';
import 'aos/dist/aos.css'


const Navbar = () => {
    const [hideNav, setHideNav] = useState(true);

    const klik = () => {
        setHideNav(!hideNav);
    }

    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <div className="contents">
            {
                hideNav ? (
            // awal
            <>
                        <div className="container" data-aos='fade-down'>
                            <div className="navbar">
                                <div className="navbar-left">
                                    <Link to='/'>
                                        <img src={LOGO} />
                                    </Link>
                                </div>
                                <div onClick={klik} className="navbar-right">
                                    <img src={MENU} />
                                </div>
                            </div>
                        </div>

                        <HeroSection />
                        <About />
                        {/* <Content /> */}
                        <Category  />
                        <CardTop  />
                        {/* <ContentDropdown /> */}
                        <Footer  />

                        
            </>
            // akhir
                ) : (
            // awal
            <div className="navbar-hide">
                <div className="container">
                    <div className="navbar-hide-main">
                        <div className="navbar-menu" data-aos='fade-right'>
                            <a href="/" >
                                <h5>Home</h5>
                            </a>
                            <a href="/discover" >
                                <h5>About</h5>
                            </a>
                            <a href="/products" >
                                <h5>Products</h5>
                            </a>
                            <a href="/contact">
                                <h5>Contact</h5>
                            </a>
                        </div>
                        <div className="navbar-social" data-aos='fade-left'>
                            <div onClick={klik} className="nav-social-logo" >
                                <Link>
                                    <img src={CLOSE} />
                                </Link>
                            </div>
                            <div className="nav-social-logo">
                                <Link to='https://www.instagram.com/landsnatures/'>
                                    <img src={IG} />
                                </Link>
                            </div>
                            <div className="nav-social-logo">
                                <Link to='https://m.facebook.com/profile.php?id=100076283083313&_rdr'>
                                    <img src={FB} />
                                </Link>
                            </div>
                            <div className="nav-social-logo">
                                <Link to='https://www.instagram.com/landsnatures/'>
                                    <img src={TWEET} />
                                </Link>
                            </div>
                            <div className="nav-social-logo" >
                                <Link to='https://www.linkedin.com/company/landsnature/'>
                                    <img src={LINKEDIN} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-footer" data-aos='fade-down'>
                    <h6 className="slogan-hide">MAKE YOUR DAILY HEALTHY</h6>
                    <h1 className="slogan-hide1">FOOD MUCH MORE USEFUL</h1>
                </div>
            </div>
        // akhir
                )
            }     
        </div>
    );
};

export default Navbar;




