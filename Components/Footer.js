import React from "react"
import Link from "next/link"
import { RiFacebookFill, RiInstagramFill, RiWhatsappFill } from "react-icons/ri"
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    
    <> 
      <section className="footer-main">
        <div className="footer-inner">
          <h5>Dr. Umang Aggarwal</h5>
          <p>
            Dr. Umang Aggarwal is a renowned and highly acclaimed  doctor.
          </p>
          <h6>Connect</h6>
          <p>
          <FaPhone />--+91-123456789<br></br>
           <IoMailSharp />--deumang@gmail<br></br> 
           <FaMapLocationDot />-    ea-82 indrapuri bhopal -221009
          </p>
          <p style={{fontSize:30, justifyContent:"space-between",padding:'10px', }}>
            <FaWhatsappSquare />
          <FaFacebookSquare />
          <FaYoutube />
           </p>
          
          {/* <button className="btn-grad"><Link href="/Contactus">Book an Appointment</Link></button> */}
        </div>
        <div className="footer-inner">
          <h5>Useful Links</h5>
          <Link href="/">Home</Link>
          <Link href="/Aboutdr">About Doctor</Link>
          <Link href="/Gallery">Gallery</Link>
          <Link href="/Results">Results</Link>
          {/* <div>
            <Link href="https://www.facebook.com/dr.zebaquadir?mibextid=ZbWKwL" target="_blank"><img src="/images/Facebook_icon.png" height="50px" width="50px" style={{ marginLeft: "1rem" }} /></Link>



            <Link href="https://instagram.com/zebdermm?igshid=ZDdkNTZiNTM=" target="_blank"><img src="/images/Instagram.png" height="50px" width="55px" style={{ marginLeft: "1rem" }} /></Link>



            <Link href="https://wa.me/c/917317618333" target="_blank"><img src="/images/whatsapp_Icon.png" height="50px" width="50px" style={{ marginLeft: "1rem" }} /></Link>
          </div> */}
          {/* <li style={{ height: "3rem", width: "3rem", marginTop: "0rem", alignItems: "center" }}>
            <a href="https://www.facebook.com/dr.zebaquadir?mibextid=ZbWKwL" target="_blank">
              <RiFacebookFill
                style={{
                  fontSize: "2rem",
                  width: "3rem",
                  height: "3rem",
                  padding: "0px",
                  margin: "10px",
                  color: "white"
                }}
              />
            </a>
            <a href="https://instagram.com/zebdermm?igshid=ZDdkNTZiNTM=" target="_blank">
              <RiInstagramFill
                style={{
                  fontSize: "2rem",
                  width: "3rem",
                  height: "3rem",
                  padding: "0px",
                  margin: "10px",
                  color: "white"
                }}
              />
            </a>
            <a href="https://wa.me/c/917317618333" target="_blank">
              <RiWhatsappFill
                style={{
                  fontSize: "2rem",
                  width: "3rem",
                  height: "3rem",
                  padding: "0px",
                  margin: "10px",
                  color: "white"
                }}
              />
            </a>
            
          </li> */}
        </div>
        <div className="footer-inner">
          <h5>Orthopaedic</h5>
          <Link href="/Treatments">Spine</Link>
          <Link href="/Treatments">
            Arthroscopy
          </Link>
          <Link href="/Treatments">Joint Replacement</Link>
          <Link href="/Treatments">Laser Hair Reduction</Link>
          <Link href="/Treatments">Tattoo Removal</Link>
          <Link href="/Treatments">Hydra Facial</Link>
          <Link href="/Treatments">BB Glow Treatment </Link>


          {/* <Link href="/Treatments">Radio Cautery - mole /wart/freckles removal</Link> */}
        </div>
        
      </section>
    </>
  )
}

export default Footer
