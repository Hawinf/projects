import React from "react";
import '../bedroom/bedroom.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Kitchen = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <div>
            <h5>YoYok please share the Pictures urgent hahah</h5>
        </div>
    );
};

export default Kitchen;