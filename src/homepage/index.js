import React from "react";
import NavbarComponent from "./navbar/navbar";
import About from "./about";
import Content from "./contents/content";
import Category from "./category/category";
import Footer from "./footer/footer";

const Homepage = () => {
    return (
        <>
            <NavbarComponent />
            <About />
            <Content />
            <Category  />
            <Footer  />
        </>
    );
};

export default Homepage;