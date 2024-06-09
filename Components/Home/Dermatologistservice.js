import React from "react";
// import Multicarousel from "../Components/Multicarousel";
import Multicarousel from "./Multicarousel";

const arr = [
  {
    type: 'paragraph',
    title: "At our Clinic, we pride ourselves on providing the best care possible to our patients. Orthopedic Care",
    content: "Our Approach At our practice, we are committed to providing compassionate, personalized  care that helps our patients achieve optimal health and wellness.",
    des: "Our orthopedic practice is centered around delivering patient-centered care with a focus on utilizing the latest medical technology and techniques to achieve the best possible outcomes.Our team of highly experienced and dedicated orthopedic surgeons takes a comprehensive approach to diagnosing and treating musculoskeletal conditions, ensuring that ",
     
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg",
    title: 'Expertise',
    des: "Dr. Gaurav Khera is a highly skilled and experienced orthopedic surgeon. He has undergone extensive training in orthopedic surgery and possesses in-depth knowledge of musculoskeletal conditions and treatment options. His expertise allows him to provide accurate diagnoses and effective surgical interventions."
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg",
    title: 'Advanced Techniques',
    des: "Dr. Gaurav Khera is a highly skilled and experienced orthopedic surgeon. He has undergone extensive training in orthopedic surgery and possesses in-depth knowledge of musculoskeletal conditions and treatment options. His expertise allows him to provide accurate diagnoses and effective surgical interventions."
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg",
    title: 'Patient-Centered Care',
    des: "Dr. Gaurav Khera prioritizes the well-being and satisfaction of his patients. He fosters a compassionate and supportive environment, where patients feel comfortable discussing their concerns and asking questions. He ensures that his patients are well-informed about their condition, treatment options, and the expected outcomes of surgery. This open communication helps build trust and confidence between the patient and the surgeon."
  },
];

const Dermatologistservice = () => {
  return (
    <>
      <div className="derma-main">
      <div style={{backgroundColor:'aquamarine',width:'100%'}}>
    <div  style={{ display: 'flex', flexWrap: 'wrap', gap: '8%', width: "100%", marginLeft:'4%', }}>
      {arr.map((item, index) => (
        item.type === 'paragraph' ? (
          <div  style={{ width: "80%",marginTop:'10px',marginLeft:'10%'}} key={index}>
            <p style={{fontSize:30, color:'#000000', width:'100%' }}>{item.title}</p>
            <p style={{fontSize:18}}>{item.content}</p>
            {/* <p style={{fontSize:2}}>{item.des}</p> */}
            <p style={{marginLeft:''}}>
            Our orthopedic practice is centered around delivering patient-centered 
          care with a focus on utilizing the latest medical technology and techniques to achieve the best possible outcomes.
        Our team of highly experienced and dedicated orthopedic 
        surgeons takes a comprehensive approach to diagnosing and treating musculoskeletal conditions, ensuring that 
        each patient receives a tailored treatment plan that addresses their unique needs and goals. We also place a 
        strong emphasis on patient education, ensuring that patients understand their conditions and treatment options
         so they can make informed decisions about their care.
            </p>
          </div>
        ) : (
          <div style={{ width: "42%", backgroundColor:'#ffffff' ,borderRadius: "10px", alignItems:'center',marginTop:'30px', marginBottom:'20px', }} key={index}>
            <div>
              {/* <img style={{ width: "87px", height: '97px', overflow: 'hidden',marginLeft:'25px' }} src={item.img} alt={item.title} /> */}
            </div>
            <div style={{ fontSize: 20, marginTop: "20px", marginBottom: "20px",marginLeft:'15px' }}>{item.title}</div>
            <div style={{marginLeft:'15px'}}>{item.des}</div>
            <div style={{ width: "80%", height: '47px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#01CAB8', gap: 5, borderRadius: "10px",marginLeft:'25px', marginBottom:'10px' }}>
              <span>Read more</span>
          
            </div>
          </div>
        )
      ))}
    </div>
    </div>
        {/* <div>
        <h5>At our Clinic, we pride 
          ourselves on providing the best care possible to our patients.</h5>
          </div> */}
          {/* <div>
        <h6>Our Approach
        At our practice, we are committed to providing compassionate, personalized 
        care that helps our patients achieve optimal health and wellness.</h6>
        </div> */}

{/* 
        <img src="./images/heading-art-01.svg" /> */}
      </div>
      {/* <Multicarousel /> */}
    </>
  );
};

export default Dermatologistservice;
