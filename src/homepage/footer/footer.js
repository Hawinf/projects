import React from "react";
import FB from '../../assests/facebook.png';
import IG from '../../assests/instagram.png';
import LOGO from '../../assests/logo.png';
import LI from '../../assests/linkedin.png';
import TW from '../../assests/twitter.png';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                
                    <div className="col-lg-3 col-md-6">
                        <div className="address mb-4">
                            <p>Batang Regency, Central Java Indonesia</p>
                            <p>Info@landsnatures.com</p>
                            <p>+628586666666</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div class="menu-dropdown mb-4">
                            <div class="mb-1">
                                <a href="#link-discover">Discover</a>
                            </div>
                            <div class="mb-1">
                                <a href="#link-key-features">Key Features</a>
                            </div>
                            <div class="mb-1">
                                <a href="#link-product">Product</a>
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
                            <a href="https://m.facebook.com/profile.php?id=100076283083313&_rdr">
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
    );
};

export default Footer;