import React, { Fragment } from "react";
import HeroSection from "../components/MainPage/Hero-Section/HeroSection.jsx";
import AboutUs from "../components/MainPage/About-us/AboutUs.jsx";
import Courses from "../components/MainPage/Courses-section/Courses.jsx";
import ChooseUs from "../components/MainPage/Choose-us/ChooseUs.jsx";
import Features from "../components/MainPage/Feature-section/Features.jsx";
import FreeCourse from "../components/MainPage/Free-course-section/FreeCourse.jsx";
import Newsletter from "../components/MainPage/Newsletter/Newsletter.jsx";
import Footer from "../components/MainPage/Footer/Footer.jsx";
import "../styles/index.css"

function CompanySection() {
  return null;
}

export default function index() {
  return (
    <div className="indexContainer">
      <Fragment>
        <HeroSection/>
        <CompanySection/>
        <AboutUs/>
        <Courses/>
        <ChooseUs/>
        <Features/>
        <FreeCourse/>
        <Newsletter/>
        <Footer/>
      </Fragment>
    </div>
  );
};
