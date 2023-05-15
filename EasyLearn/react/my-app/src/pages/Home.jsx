

import React, { Fragment } from "react";
import Header from "../components/Header/Header";

import HeroSection from "..//components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import Company from "../components/Company-section/Company";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";

const Home=()=>{
    return (
         <Fragment>
        <Header />
        <HeroSection/>
        <CompanySection/>
        <AboutUs/>
        <Courses/>
        <ChooseUs/>
        <Features/>
    </Fragment>
    );
};
export default Home;























