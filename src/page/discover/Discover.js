import React from "react";
import { Link } from "react-router-dom";
import DiscoverPict from '../../assests/discover.jpg';
import './discover.css';
import Footer from "../../homepage/footer/footer";

const Discover = () => {

    const newLocal = "discover-pict";
    return (
        <>
            <div className="wrapper-discover">
                <div className="container">
                    <div className="discover-content">
                        
                            <div className="discover-section-left">
                                <h2 className="discover-judul">Success Stories</h2>
                                <p className="discover-desc">With Pricemoov by your side, it's easier than ever to optimize prices, improve margins, and negotiate deals.</p>
                                <Link className="btn btn-success link">
                                    Connect With Us
                                </Link>
                            </div>
                        
                            <div className="discover-section-right">
                                <img src={DiscoverPict} />
                            </div>
                    
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Discover;