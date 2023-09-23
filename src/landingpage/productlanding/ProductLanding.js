import React, {useEffect} from "react";
import AOS from 'aos';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'
import Furniture from '../../assests/furniture.jpg';
// import Food from '../../assests/food.jpg';
import Food1 from '../../assests/food1.jpg';
import './productlanding.css';

const ProductLanding = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <div className="container m-5" data-aos='fade-down'>
            <h1 className="productlanding-judul">Our Products</h1>
            <p>Furniture • Food</p>
            <div className="row">
                <div className="col-lg-4" data-aos='fade-right'>
                    <div className="productlanding-left">
                        <Link to='/homepagefurniture'>
                            <img className="productland-furniture" src={Furniture}  />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8" data-aos='fade-left'>
                    <div className="productlanding-right">
                        <Link to='/homepagefood'>
                            <img className="productland-food" src={Food1}  />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLanding;