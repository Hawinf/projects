import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Furniture from '../../assests/furniture.jpg';
import './productlanding.css';

const ProductLanding = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <div className="container" data-aos='fade-down'>
            <h1>Our Products</h1>
            <p>Furniture • Food</p>
            {/* <div className="row">
                <div className="col-lg-3">
                    <div className="productlanding-left">
                        <img className="productland-furniture" src={Furniture}  />
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="productlanding-right">
                        <img className="productland-food" src={Furniture}  />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ProductLanding;