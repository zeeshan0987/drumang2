import React from "react";
import { FaCalendarCheck, FaMobileAlt, FaRegClock } from "react-icons/fa";
import Link from "next/link";

const Homecard = () => {
  return (
    <> 
    
      <section className="home-card-main">
      <Link href="/Contactus"className="btn-grad1"  >
        <div className="home-card-inner">
          
          

          <h4> Robotic Joint Replacement Surgeries. </h4>
          <div className="icon-div">
            <FaCalendarCheck />
          </div>
          
        </div>
        </Link>
        <Link href="/Contactus"className="btn-grad1"  >
        <div className="home-card-inner">
          
          

          <h3> Call us now</h3>
          <p> Feel free to contact. 
            You can directly reach us on <br></br>+91 9112345678</p>
            <div className="icon-div">
          <FaMobileAlt />
          </div>
        </div>
        </Link>
        <Link href="/Contactus"className="btn-grad1"  >
        <div className="home-card-inner">
          
          

          <h3> Consultation timing</h3>
          <p>Mon - Sat : 11 Am to 7 pm</p>
          <div className="icon-div">
          <FaRegClock /> 
          </div>
        </div>
        </Link>
        
      </section>
    </>
  );
};

export default Homecard;
