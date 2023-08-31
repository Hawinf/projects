import React from "react";
import HEADERKONJAC from '../../assests/hero-section.png';
import ABOUTPIC from '../../assests/about-pict.svg';
import './about.css';

const About = () => {
    return (
        <div className="main-about">
            <div className="about">
                <h1 className="about-judul">- About -</h1>
            </div>
            <div className="about-content">
                <div className="container">
                    <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="content-left">
                                    <img className="about-pict" src={ABOUTPIC} />
                                    {/* <h6>DISINI BACKGROUND BERAS BERAS DISINI BACKGROUND BERAS BERAS</h6>
                                    <h6>DISINI BACKGROUND BERAS BERAS DISINI BACKGROUND BERAS BERAS</h6> */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="content-right">
                                    <h4 className="content-desc">We provide quality and expert information to help konjac lovers make educated choices about specialty konjac products for dietary needs.</h4>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;