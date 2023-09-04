import React from "react";
import { Link } from "react-router-dom";
import './cardtop.css';

const CardTop = () => {
    return (
        <div className="cardtop-wrapper">
            <div className="container">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="kartu">
                            <h1 className="judul-kartutop">Get To Know Our Product</h1>
                            <h3 className="judul-kartutop1">Create purposeful, differentiated buyer experiences</h3>
                            <Link className='product-overview' to='/products' className="tombol-kartu">
                                Product Overview
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTop;