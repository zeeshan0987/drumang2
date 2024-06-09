import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Weoffer from "../Components/About clinic/Weoffer";
import Clinictiming from "../Components/About clinic/Clinictiming";
import Testimonial from "../Components/Home/Testimonial";

const About = () => {
  return (
    <>
     
      <section className="about-main">
        <Header />
        <div className="about-header">
          <h1>OPD Timing</h1>
          <p>Dr. Umang Agarwal <br></br>
          <p>Ex- Associate Professor<br></br>M.s.(Ortho),F.I.A.A.S, F.I.S.M.<br></br>
              Arthroscopy & Arthroplasty Specialist<br></br>
            Joint Replacement and Spine Specialist</p></p>
        </div>
        <Weoffer />
        <Clinictiming />
        {/* <Testimonial /> */}
        <Footer />
      </section>
    </>
  );
};

export default About;
