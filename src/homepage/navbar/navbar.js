import React, { useState } from "react";
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

const Navbar = () => {
    const [hideNav, setHideNav] = useState(true);

    const klik = () => {
        setHideNav(!hideNav);
    }
    return (
        <div className="contents">
            {
                hideNav ? (
            // awal
            <>
                        <div className="container">
                            <div className="navbar">
                                <div className="navbar-left">
                                    <img src={LOGO} />
                                </div>
                                <div onClick={klik} className="navbar-right">
                                    <img src={MENU} />
                                </div>
                            </div>
                            <div className="section-header">
                                <div className="header">
                                    <h4 className="slogan">Healthy Food Live Longer</h4>
                                    <h1 className="tittle"><span>LANDS</span>NATURE</h1>
                                    <p className="slogan-1">Which was born in Central Java Indonesia, inspired by michael jaksin ckuaks.</p>
                                    <button className="btn btn-success">Learn More</button>
                                </div>
                                    
                                
                            </div>
                        </div>

                        <div className="header-1">
                        <img src={HEADERKONJAC} />
                        </div>
            </>
            // akhir
                ) : (
            // awal
            <div className="navbar-hide">
                <div className="container">
                    <div className="navbar-hide-main">
                        <div className="navbar-menu">
                            <a href="#">
                                <h5>Home</h5>
                            </a>
                            <a href="#">
                                <h5>About</h5>
                            </a>
                            <a href="#">
                                <h5>Products</h5>
                            </a>
                            <a href="#">
                                <h5>Contact</h5>
                            </a>
                        </div>
                        <div className="navbar-social">
                            <div onClick={klik} className="nav-social-logo">
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
                            <div className="nav-social-logo">
                                <Link to='https://www.instagram.com/landsnatures/'>
                                    <img src={LINKEDIN} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-footer">
                    <h6>MAKE YOUR DAILY HEALTHY</h6>
                    <h1>FOOD MUCH MORE USEFUL</h1>
                </div>
            </div>
        // akhir
                )
            };     
        </div>
    );
};

export default Navbar;




