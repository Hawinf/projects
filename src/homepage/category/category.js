import React from "react";
import './category.css';
import ONE from '../../assests/number-1.png';
import TWO from '../../assests/number-2.png'
import THREE from '../../assests/number-3.png';
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Category = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        
        <div className="category" data-aos='fade-down'>
            <h1 className="judul">Category</h1>
            <div className="macam-macam">
                <div  className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="number" data-aos='fade-left'>
                                <a href="/rice">RICE</a>
                                <img src={TWO} />
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-4  col-sm-4" data-aos='fade-down'>
                            <div className="number">
                                <a  href="/sugar">SUGAR</a>
                                <img src={ONE} />
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-4  col-sm-4" data-aos='fade-right'>
                            <div  className="number">
                                <a  href="/powder">POWDER</a>
                                <img src={THREE} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    );
};

export default Category;


 
                
                 