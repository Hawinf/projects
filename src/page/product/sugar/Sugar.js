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
                                <p className="sugar-right-desc">Treehouse California Almonds is a leader in creating diced almonds for its customers in a variety of sizes to ensure that their products retain their distinctiveness – and nutritional halo – in the marketplace. We dice natural, roasted and organic almonds for customers around the world. Food producers appreciate the precise, consistent sizes of our diced almonds, which lets them use 100% of what they receive from us – with zero waste and zero compromise in product quality or process efficiency</p>
                                <Link to='/contact' className='btn btn-success'>
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
