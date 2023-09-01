import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SUGAR from '../../assests/10.png';
import PREMIUM from '../../assests/1.png';
import ORDINARY from '../../assests/2.png';
import EXCHANGE from '../../assests/3.png';
import Rate from '../../assests/rating.png';
import {Card, Row, Col} from "react-bootstrap";
import './content.css';
import { Link } from "react-router-dom";


const Content = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="content">
        <h2>Top 3 Our Products</h2>
        <Slider {...settings}>
            <Row>
              <Col lg={12}>       
                    <Link>
                        <div className="gallery">
                            <div className="sugar">
                            <img src={PREMIUM} alt="" />
                            </div>
                            <div className="description">
                                <button className="btn btn-success">Learn More</button>
                            </div>
                        </div>
                    </Link>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>          
                    <Link>
                        <div className="gallery">
                            <div className="ordinary">
                                <img src={ORDINARY} alt="" />
                            </div>
                            <div className="description">
                            <button className="btn btn-success">Learn More</button>
                            </div>
                        </div>
                    </Link>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>          
                    <Link>
                        <div className="gallery">
                            <div className="premium">
                                <img src={SUGAR} alt="" />
                            </div>
                            <div className="description">
                            <button className="btn btn-success">Learn More</button>
                            </div>
                        </div>
                    </Link>
              </Col>
            </Row>
        </Slider>
      </div>
    );
  };
  
  export default Content;






   {/* <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="gallery">
                            <img className="sugar" src={SUGAR} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="gallery">
                            <img className="sugar" src={SUGAR} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="gallery">
                            <img className="sugar" src={SUGAR} />
                        </div>
                    </div>
                </div>
            </div> */}