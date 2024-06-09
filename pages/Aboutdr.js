import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Aboutdoctor from '../Components/About doctor/Aboutdoctor';

const Aboutdr = () => {
  return (
    <>
      <section>
        <Header />
        <div className="about-header">
          <h1>About Doctor</h1>
          <p>Dr. Umang Agarwal <br></br>
          <p>Ex- Associate Professor<br></br>M.s.(Ortho),F.I.A.A.S, F.I.S.M.<br></br>
              Arthroscopy & Arthroplasty Specialist
            Joint Replacement and Spine Specialist</p></p>
              </div>
              <Aboutdoctor/>  

        <Footer />
      </section>
    </>
  );
};

export default Aboutdr;
