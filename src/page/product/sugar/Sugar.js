import React from "react";
import SugarPic from '../../../assests/1.png';
import { Link } from "react-router-dom";
import './sugar.css'
import Footer from "../../../homepage/footer/footer";

const Sugar = () => {
    return (<>
                <div className="sugar">
                    <div className="container">
                        <div className="sugar-content mb-5">
                            <div className="sugar-left">
                                <img src={SugarPic} />
                            </div>
                            <div className="sugar-right">
                                <h6 className="sugar-right-judul">Cassava Sugar</h6>
                                <p className="sugar-right-desc">sugar cassava is a versatile tropical root crop known for its high starch content and sweet taste, making it a valuable source of carbohydrates for various culinary purposes.</p>
                                <Link to='/contact' className='btn btn-success link'>
                                    Get Quotation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer  />
            </>
    );
};

export default Sugar;
