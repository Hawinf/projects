import React, { useState } from "react";
import CareerImg from '../../assests/career.jpg';
import CareerImg1 from '../../assests/career1.jpg';
import CareerImg2 from '../../assests/career2.jpg';
import './career.css';
import Footer from "../../homepage/footer/footer";

const Career = () => {
    const [career, setCareer] = useState(true);

    const onCareer = () => {
        setCareer(false)
    }

    return (
        <>
            <div className="wrapper-career">
                <h1 className="career-judul">Adventure Your Career With Us</h1>
                <p className="career-desc">We’re leading the pricing revolution and we need passionate people to join the movement.</p>
                <button className="btn btn-success tombol-career mb-5" onClick={onCareer}>Available Position</button>
                
                {
                    career ? (
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 mb-2">
                                    <img className="career-image" src={CareerImg} />
                                </div>
                                <div className="col-lg-4  col-md-12 mb-2">
                                    <img className="career-image" src={CareerImg1} />
                                </div>
                                <div className="col-lg-4  col-md-12 mb-2">
                                    <img className="career-image" src={CareerImg2} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="container">
                            <div className="card-career">
                                <h4>Job Not Available</h4>
                            </div>
                        </div>
                    )
                }
                
            </div>
            <Footer />
        </>
    );
};

export default Career