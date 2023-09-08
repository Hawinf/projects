import React from "react";
import LOGO from '../../assests/logo3.png';
import './navbarone.css';
import { Link } from "react-router-dom";

const NavbarOne = () => {
    return (
        <div className="container" data-aos='fade-down'>
            <div className="navbar">
                <div className="navbar-left">
                    <Link to='/'>
                        <img src={LOGO} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarOne;