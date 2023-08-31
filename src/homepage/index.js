import React from "react";
import NavbarComponent from "./navbar/navbar";
import About from "./about";
import Content from "./contents/content";

const Homepage = () => {
    return (
        <>
            <NavbarComponent />
            <About />
            <Content />
        </>
    );
};

export default Homepage;