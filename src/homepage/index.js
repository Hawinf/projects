import React from "react";
import NavbarComponent from "./navbar/navbar";
import About from "./about";
import Content from "./contents/content";
import Category from "./category/category";
import Footer from "./footer/footer";
import CardTop from "./card/CardTop";
import ContentDropdown from './dropdown/Dropdown';

const Homepage = () => {
    return (
        <>
            <NavbarComponent />
            <About />
            <Content />
            <Category  />
            <CardTop  />
            <ContentDropdown />
            <Footer  />
        </>
    );
};

export default Homepage;