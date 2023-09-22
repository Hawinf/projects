import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'
import LOGO from '../../assests/landsnatures-low-resolution-logo-black-on-transparent-background.png';
import MENU from '../../assests/menu1.png';
import FB from '../../assests/facebook.png';
import IG from '../../assests/instagram.png';
import LinkeId from '../../assests/linkedin.png';
import Tw from '../../assests/twitter.png';
import Close from '../../assests/cancel.png';
import './navbarlanding.css'
import HeroSectionLanding from "../herosection-landing/HeroSectionLanding";
import Content from "../../homepage/contents/content";
import ContentDropdown from "../../homepage/dropdown/Dropdown";
import Footer from "../../homepage/footer/footer";
import ProductLanding from "../productlanding/ProductLanding";

const NavbarLandingPage = () => {

    const [openSidebar, setOpenSideBar] = useState(true);

    const clickMenu = () => {
        setOpenSideBar(!openSidebar)
    }
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return(
        // <div className="container">
        <>
            {
                openSidebar ? (
                <>
                    <div className="container">
                        <div className="main-nav-landing" data-aos='fade-down'>
                            <div className="navbar-landing-left">
                                <Link>
                                    <img className="logo-landing" src={LOGO} />
                                </Link>
                            </div>
                            <div className="navbar-landing-mid">
                            </div>
                            <div className="navbar-landing-right" onClick={clickMenu}>
                                <Link>
                                    <img className="menu-landing" src={MENU} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <HeroSectionLanding />
                    <Content />
                    <ProductLanding />
                    <ContentDropdown />
                    <Footer />
                </>
                ): (
                <div className="container">
                    <div className="menu">
                        <div className="menu-landing-left" data-aos='fade-right'>
                            
                            <div className="link-card-land">
                                <a className="link-landing" href='/discover'>Discover</a>
                            </div>
                            <div className="link-card-land">
                                <a className="link-landing" href="/why">Why Us</a>
                            </div>
                            <div  className="link-card-land">
                                <a className="link-landing" href="/product">Products</a>
                            </div>
                            <div  className="link-card-land">
                                <a className="link-landing" href='/contact'>Contact</a>
                            </div>
                            
                        </div>
                        <div className="menu-landing-right" data-aos='fade-left'>
                            <div className="menu-land-sosmed">
                                <Link onClick={clickMenu}>
                                    <img className="item-sosmed" src={Close}  />
                                </Link>
                            </div>
                            <div className="menu-land-sosmed">
                                <Link to='https://m.facebook.com/profile.php?id=100076283083313&_rdr'>
                                    <img className="item-sosmed" src={FB}  />
                                </Link>
                            </div>
                            <div className="menu-land-sosmed">
                                <Link to='https://www.instagram.com/landsnatures/'>
                                    <img className="item-sosmed" src={IG}  />
                                </Link>
                            </div>
                            <div className="menu-land-sosmed">
                                <Link to='https://www.linkedin.com/company/landsnature/'>
                                    <img className="item-sosmed" src={LinkeId}  />
                                </Link>
                            </div>
                            <div className="menu-land-sosmed">
                                <Link to='https://www.instagram.com/landsnatures/'>
                                    <img className="item-sosmed" src={Tw}  />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className="copyright-land">© 2022 Landsnatures. All rights reserved</p>
                </div>
                )
            }

        </>
        
    );
};

export default NavbarLandingPage;



