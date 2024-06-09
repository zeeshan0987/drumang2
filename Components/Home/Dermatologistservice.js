import React from "react";
import styled from "styled-components";
// import Multicarousel from "../Components/Multicarousel";
import Multicarousel from "./Multicarousel";

const arr = [

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg",
    title: "Expertise",
    des: "Dr. Gaurav Khera is a highly skilled and experienced orthopedic surgeon. He has undergone extensive training in orthopedic surgery and possesses in-depth knowledge of musculoskeletal conditions and treatment options. His expertise allows him to provide accurate diagnoses and effective surgical interventions.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg",
    title: "Advanced Techniques",
    des: "Dr. Gaurav Khera is a highly skilled and experienced orthopedic surgeon. He has undergone extensive training in orthopedic surgery and possesses in-depth knowledge of musculoskeletal conditions and treatment options. His expertise allows him to provide accurate diagnoses and effective surgical interventions.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg",
    title: "Patient-Centered Care",
    des: "Dr. Gaurav Khera prioritizes the well-being and satisfaction of his patients. He fosters a compassionate and supportive environment, where patients feel comfortable discussing their concerns and asking questions. He ensures that his patients are well-informed about their condition, treatment options, and the expected outcomes of surgery. This open communication helps build trust and confidence between the patient and the surgeon.",
  },
];

const obj =  {
  type: "paragraph",
  title:
    "At our Clinic, we pride ourselves on providing the best care possible to our patients. Orthopedic Care",
  content:
    "Our Approach At our practice, we are committed to providing compassionate, personalized  care that helps our patients achieve optimal health and wellness.",
  des: "Our orthopedic practice is centered around delivering patient-centered care with a focus on utilizing the latest medical technology and techniques to achieve the best possible outcomes.Our team of highly experienced and dedicated orthopedic surgeons takes a comprehensive approach to diagnosing and treating musculoskeletal conditions, ensuring that ",
}

const Dermatologistservice = () => {
  return <>
  <div className="service-cart">
    {
      arr?.map((item,index)=>(
        <div className="s-cart" key={index}>
          <img style={{width:"50px",height:"50px"}} src={item.img} alt="" />
          <div>
            <p>{item.title}</p>
          </div>
          <div style={{height:"65%"}}>
            <p>
              {item.des}
            </p>
          </div>
          <div style={styles.learnMoreButton}>
                <span>Learn more</span>
              </div>
        </div>
      ))
    }

  </div>
  </>;
};
const styles ={
  learnMoreButton: {
    width: '80%',
    height: '47px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01CAB8',
    gap: '5px',
    borderRadius: '10px',
    marginLeft: '25px',
    marginBottom: '10px',
    color: '#fff',
    cursor: 'pointer',
  },
}
export default Dermatologistservice;
