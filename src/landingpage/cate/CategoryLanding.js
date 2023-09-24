import React from "react";
import Food from '../../assests/food1.jpg';
import Furniture from '../../assests/furniture.jpg';
import Footer from "../../homepage/footer/footer";
import './catelanding.css';
import { Link } from "react-router-dom";

const CategoryLanding = () => {
    return (
        <>
            <div className="cate-landing">
                <div className="container">
                    <h1 className="catelanding-judul">Category Product</h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="cate-satu">
                                <Link to='/homepagefurniture'>
                                    <img className="cate-foto" src={Furniture} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="cate-satu">
                                <Link to='/homepagefood'>
                                    <img className="cate-foto" src={Food} />
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

export default CategoryLanding;