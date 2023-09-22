import React from "react";
import FB from '../../assests/facebook.png';
import IG from '../../assests/instagram.png';
import LOGO from '../../assests/logo.png';
import LI from '../../assests/linkedin.png';
import TW from '../../assests/twitter.png';
import './footer.css';

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <footer className="footer" data-aos='fade-up'>
        <div className="container">
            <div className="row">
                
                    <div className="col-lg-3 col-md-6">
                        <div className="address mb-4">
                            <p>Batang Regency, Central Java Indonesia</p>
                            <p>Info@landsnature.com</p>
                            <p>+62 82 145 145 656</p>
                           
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div class="menu-dropdown mb-4">
                            <div class="mb-1">
                                <a href="/discover">Discover</a>
                            </div>
                            <div class="mb-1">
                                <a href="/products">Product</a>
                            </div>
                            <div class="mb-1">
                                <a href="/career">Career</a>
                            </div>
                            <div class="mb-1">
                                <a href="/contact">Contact</a>
                            </div>
                            <div class="mb-1">
                                <a href="/">Home</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="menu-opsi mb-4">
                            <p className="address">Connect With Us</p>
                            <a href="https://www.instagram.com/landsnatures/">
                                <img src={IG} alt="instagram" />
                            </a>
                            <a href="https://m.facebook.com/profile.php?id=100076283083313&_rdr">
                                <img src={FB} alt="facebook" />
                            </a>
                            <a href="https://www.instagram.com/landsnatures/">
                                <img src={TW} alt="instagram" />
                            </a>
                            <a href="https://www.linkedin.com/company/landsnature/">
                                <img src={LI} alt="facebook" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6">
                        <div className="hak-cipta mb-4">
                            <p className="address">© 2022 Landsnatures. All rights reserved</p>
                            <img src={LOGO} alt="LANDNATURES" />
                        </div>
                    </div>
                
            </div>
        </div>
    </footer>
    )
};

export default Footer;