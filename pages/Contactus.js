import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Form from "../Components/Home/Form";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
const Contactus = () => {
  return (
    <>
      <Header />
      <div className="about-header">
        <h1>Contact Us </h1>
        <p>Dr. Umang Aggarwal / Contact Us</p>
      </div>
     
      <div className="contact-us-clinic">
        <div className="contact-us-inner" style={{ margin: "0 auto" }}>
          <h1>Contact Us</h1>
          {/* <img   src="./images/heading-art-01.svg" /> */}
          <p style={{ width: "70%" }}>
          
          <h5> <FaPhone />     Phone Number:</h5>
          <p>+91 - 9112345678</p>
          <h5> <IoMailSharp />      Email: </h5>
          <p>drumang@gmail.com</p>
            <h5> <FaMapLocationDot />     Location:</h5>
           Dr.Umang agarwal <br></br>
           Vivekanand Ghat, Beside Dubey Hospital,<br></br> Infront Of 
           Kamakhya Garden, Hoshangabad,<br></br> Hoshangabad - 461001 (Kothi Bazar) <br></br>
            Landmark- 
          </p>
          
        
        </div>
        <Form/>
        {/* <div className="contact-us-inner-1" style={{ margin: "5px 10px" }}>
          <h3>Online payment</h3>
          <img src="./images/heading-art-01.svg" />
          <img src="./images/zeebaecom qrcode.jpeg" className="qr" /> <br/>
          <p>Name :ZEBA TABASSUM QUADIRI</p>
          <p>ACC. No.: 0149044440000007</p>
          <p> IFSC: JAKA0BAKSHI</p>
          <p>UPI ID : zeba.quadiri19@okicici</p>

          <button className="btn btn-primary px-5">Scan QR Code</button>
        <img src="./images/Dhan.jpeg" alt="Dhan"style={{opacity : "0.04",width : "300px" , position : "absolute" }}/>
        </div> */}
        <div id="map-section" >
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14410.144018880672!2d78.5177654554199!3d25.453771600000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397771bea8006d11%3A0x1c6c1e536b1e7e29!2sZebdermm!5e0!3m2!1sen!2sin!4v1683024166510!5m2!1sen!2sin" width="600" height="450" style={ {border:"0px solid black", allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>   */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.083531607236!2d74.85246437566109!3d32.736972573680404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e858c89dc0837%3A0xf5d2dd8ff234a30!2sDr.Zeba%20Quadiri!5e0!3m2!1sen!2sin!4v1717492639739!5m2!1sen!2sin" width="800" height="450" style={{border:"0px solid black", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe> */}
        </div>
            </div>
      <Footer />
    </>
  );
};

export default Contactus;
