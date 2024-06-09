import React from "react";
import { FaCalendarCheck, FaMobileAlt, FaRegClock } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

// Robotic Joint Replacement Surgeries
// <FaCalendarCheck />

// <Title>Book an Appointment.<br></br> contact us</Title>
// <FaMobileAlt />

// <Title>Consultation Timing</Title>
// <Description>Mon - Sat : 11 AM to 7 PM</Description>
// <FaRegClock />
const Homecard = () => {
  return (
    <>
      <div className="Home-card">
        <div className="Home-card1">
          <div>
            <div>
              <p>Robotic Joint Replacement Surgeries</p>
            </div>
            <div>
              <FaCalendarCheck />
            </div>
          </div>
          <div style={{width:"40px",height:'40px',background:'#ffffff',display:"flex",alignItems:'center',justifyContent:'center',borderRadius:"100%"}}>
          <FaArrowRight/>
          </div>
        </div>
        <div className="Home-card1">
          <div>
            <div>
              <p>
              Book an Appointment.<br></br> contact us
              </p>
              <FaMobileAlt />
            </div>
          </div>

           <div style={{width:"40px",height:'40px',background:'#ffffff',display:"flex",alignItems:'center',justifyContent:'center',borderRadius:"100%"}}>
          <FaArrowRight/>
          </div>
        </div>
        <div className="Home-card1">
          <div>
            <div>
              <p>
              Consultation Timing
              </p>
              <p>
              Mon - Sat : 11 AM to 7 PM
              </p>
              <div>
              <FaRegClock />
              </div>
            </div>
          </div>
          <div style={{width:"40px",height:'40px',background:'#ffffff',display:"flex",alignItems:'center',justifyContent:'center',borderRadius:"100%"}}>
          <FaArrowRight/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homecard;
