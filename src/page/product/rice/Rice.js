import React from "react";
import './rice.css'
import RiceOrdinary from '../../../assests/rice-ordinary.png';
import RicePremium from '../../../assests/rice-premium.png';
import Footer from "../../../homepage/footer/footer";
import { Link } from "react-router-dom";

const Rice = () => {
    return (
        <>
            <div className="rice-header">
                <div className="rice-hero">
                    <div className="container">
                        <div className="product-rice mb-5">
                            <div className="rice-left">
                                <div className="rice-card">
                                    <img className="detail-rice" src={RicePremium}  />
                                </div>
                            </div>
                            <div className="rice-right">
                                <h6 className="rice-right-judul">Rice Premium</h6>
                                <p className="rice-right-desc">Treehouse California Almonds is a leader in creating diced almonds for its customers in a variety of sizes to ensure that their products retain their distinctiveness – and nutritional halo – in the marketplace. We dice natural, roasted and organic almonds for customers around the world.
                                    Food producers appreciate the precise, consistent sizes of our diced almonds, which lets them use 100% of what they receive from us – with zero waste and zero compromise in product quality or process efficiency
                                </p>
                                <Link className="btn btn-success">
                                    Get Quotation
                                </Link>
                            </div>
                        </div>
                        
                        <div className="product-rice">
                            <div className="rice-left">
                                    <div className="rice-card">
                                        <img className="detail-rice" src={RiceOrdinary}  />
                                    </div>
                                </div>
                                <div className="rice-right">
                                    <h6 className="rice-right-judul">Rice Ordinary</h6>
                                    <p  className="rice-right-desc">Treehouse California Almonds is a leader in creating diced almonds for its customers in a variety of sizes to ensure that their products retain their distinctiveness – and nutritional halo – in the marketplace. We dice natural, roasted and organic almonds for customers around the world.
                                        Food producers appreciate the precise, consistent sizes of our diced almonds, which lets them use 100% of what they receive from us – with zero waste and zero compromise in product quality or process efficiency
                                    </p>
                                    <Link className="btn btn-success">
                                        Get Quotation
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Rice;
