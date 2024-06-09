import React, { useState,useEffect } from "react";
import Form from "../Form";
import Link from "next/link"
// import { useQuery } from "graphql-hooks";
// import * as constants from "../../Components/Contants";

const Aboutdoctor = () => {



  const [data, setData] = useState()


  const getAboutDrData = async () => {
    // const response = await fetch('https://cms.maitretech.com//zebacms/items/about_doctor?fields=*.*')
    // const data = await response.json()
    setData(data.data)
  }

  useEffect(() => {
    getAboutDrData()
  }, [])




  

  return (
    <>
      <section className="about-doctor">
        <div className="about-doctor-1">
          <div className="doctors-image">
            <img src="./images/drumang.jpeg"
              alt="about"
            />
            <h2>Dr. umang aggarwal</h2>
            <p>Ex- Associate Professor<br></br>M.s.(Ortho),F.I.A.A.S, F.I.S.M.<br></br>
              Arthroscopy & Arthroplasty Specialist
            Joint Replacement and Spine Specialist</p>
            
            
                 <p>
                 <button className="btn-grad"><Link href="/Contactus">Contact Us</Link></button>
                 </p>
          </div>
          <div className="about-doctor-2">
            <p>Profile</p>
            <h1>Dr. Umang Agarwal</h1>
            <p>Ex- Associate Professor<br></br>M.s.(Ortho),F.I.A.A.S, F.I.S.M.<br></br>
              Arthroscopy & Arthroplasty Specialist
            Joint Replacement and Spine Specialist</p>
            <h6></h6>
            Dr. Umang Agarwal is a highly skilled orthopedic surgeon with extensive training
             from prestigious national and international institutions in arthroscopy and arthroplasty.<br></br>
              He has held the position of Associate Professor at the Government Medical College in Jamnagar,
               Gujarat, demonstrating his commitment to medical education and excellence.<br></br>
                Dr. Agarwal has completed a Joint Replacement Fellowship at Parekh Joint Replacement Hospital in Ahmedabad and further advanced his 
               expertise with fellowships in Advanced Joint Reconstruction and Revision Surgery at Sunshine Hospital in 
               Hyderabad, and Advanced Arthroscopy at the Sports Injury Centre, Safdarjung Hospital in New Delhi. <br></br> His specialization 
               includes Revision Hip and Knee Surgery and Unicondylar Knee Arthroplasty (UKA) with a fellowship from Fortis Hospital in Jaipur.<br></br>
                Additionally, Dr. Agarwal has expanded his skills internationally through a Foreign Fellowship in Shoulder Arthroscopy and Arthroplasty at 
                Thammasat University in Southeast Asia. His extensive training and dedication to orthopedic surgery make him a distinguished practitioner in his field.
            {/* <p>{data?.[0]?.doctor_para_1}</p> */}
          </div>
        </div>
        <div className="about-doctor-3">
          {/* <Form /> */}
          <div className="about-doctor-4">
            {/* <p>{data?.[0]?.doctor_para_2}</p> */}
            <h1>Work Experience</h1>
            <p>
            1.  Trained At Various National And International Arthoscopy & Arthroplasty Institutions In India And Abroad. <br></br>
            2.  Ex-associate Professior at Govt. Medical College Jamnagar(Gujrat).<br></br>
            3   Joint Replacement Fellowship at Parekh Joint Replacement Hospital, Ahmedabad.<br></br>
            4.  Advanced Joint Reconstruction And Revision Surgery Fellowship At Sunshine Hospital Hydrabad.<br></br>
            5.  Advanced Arthoscopy Fellowship At Sports Injury Centre, Sufdurjung Hospital, New Delhi.<br></br>
            6.  Revision Hip And Knee Surgery And Unicondylar Knee Arthropalsty(UKA) Fellowship At Fortis Hospital, Jaipur.<br></br>
            7.  Foreign Fellowship For Shoulder Arthroscopy And Arthroplasty At Thamassat University (South East Asia).<br></br>

            </p>
            {/* <p>{data?.[0]?.doctor_para_3 }</p> */}
            {/* <p>{data?.[0]?.doctor_para_4 }</p> */}
          </div>
        </div>
        <div className="about-doctor-5">
          {/* <p>
          "Dr Agrawal is an Infectious Diseases Physician and faculty for National accredited FNB programme in Infectious Diseases at Hinduja Hospital, Mumbai.
             After completing his Internal Medicine Residency in India, he secured an International Training Fellowship in Infectious Diseases and General Medicine through
              the Royal College of Physicians at Addenbrookes hospital, Cambridge, UK.
              He was awarded the MRCP and the diploma in UK Medical Practice (DipUKMP) during his tenure in the UK. He further completed his training (FNB-Infectious Diseases)
               from Hinduja hospital, Mumbai after securing the highest marks in the country.
             He has secured DTM&H from the Royal College of Physicians, England and has multiple publications to his credit."
          </p> */}
        </div>
        <div className="about-doctor-5">
          {/* <p>
          "Dr Agrawal is an Infectious Diseases Physician and faculty for National accredited FNB programme 
          in Infectious Diseases at Hinduja Hospital, Mumbai.
             After completing his Internal Medicine Residency in India, he secured an International Training Fellowship in Infectious Diseases and General Medicine through
              the Royal College of Physicians at Addenbrookes hospital, Cambridge, UK.
              He was awarded the MRCP and the diploma in UK Medical Practice (DipUKMP) during his tenure in the UK. He further completed his training (FNB-Infectious Diseases)
               from Hinduja hospital, Mumbai after securing the highest marks in the country.
             He has secured DTM&H from the Royal College of Physicians, England and has multiple publications to his credit."
          </p> */}
        </div>
      </section>
    </>
  );
};

export default Aboutdoctor;
