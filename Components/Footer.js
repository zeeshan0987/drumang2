import React from "react"
import Link from "next/link"
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    
    <> 
    <section style={{
      backgroundColor: "#04a086",
      color: "white"
    }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          // backgroundColor: "#04a086",
        }}>
          <h3>Popular Videos</h3>
        </div>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          // backgroundColor: "#04a086",
        }}>
          <iframe width="240" height="200" src="https://www.youtube.com/embed/CKRs9wxNvA0?si=KS0b9R2ZCnVsaDdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="240" height="200" src="https://www.youtube.com/embed/CKRs9wxNvA0?si=KS0b9R2ZCnVsaDdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="240" height="200" src="https://www.youtube.com/embed/CKRs9wxNvA0?si=KS0b9R2ZCnVsaDdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="240" height="200" src="https://www.youtube.com/embed/CKRs9wxNvA0?si=KS0b9R2ZCnVsaDdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
        </div>
      </section>
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
          
          
        </div>
        <div className="footer-inner">
          <h5>Useful Links</h5>
          <Link href="/">Home</Link>
          <Link href="/Aboutdr">About Doctor</Link>
          <Link href="/Gallery">Gallery</Link>
          <Link href="/Results">Results</Link>
        </div>
        <div className="footer-inner">
          <h5>Orthopaedic</h5>
          <Link href="/Treatments">Spine</Link>
          <Link href="/Treatments">
            Arthroscopy
          </Link>
          <Link href="/Treatments">Joint Replacement</Link>
          <Link href="/Treatments">Dermatomyositis</Link>
          <Link href="/Treatments">Gouty Arthritis</Link>
          <Link href="/Treatments">Arthritis</Link>
          <Link href="/Treatments">Functional Orthopedics </Link>

        </div>
        
      </section>
    </>
  )
}

export default Footer
