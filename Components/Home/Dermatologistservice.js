import React from "react";
import styled from "styled-components";
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
    <DermaMain>
      <div style={{ backgroundColor: 'aquamarine', width: '100%' }}>
        <ContentWrapper>
          {arr.map((item, index) => (
            item.type === 'paragraph' ? (
              <ParagraphCard key={index}>
                <CardTitle>{item.title}</CardTitle>
                <CardContent>{item.content}</CardContent>
                <Description>{item.des}</Description>
              </ParagraphCard>
            ) : (
              <ImageCard key={index}>
                <div>
                  {/* <img style={{ width: "87px", height: '97px', overflow: 'hidden',marginLeft:'25px' }} src={item.img} alt={item.title} /> */}
                </div>
                <ImageCardTitle>{item.title}</ImageCardTitle>
                <ImageCardDes>{item.des}</ImageCardDes>
                <ReadMoreButton>
                  <span>Read more</span>
                </ReadMoreButton>
              </ImageCard>
            )
          ))}
        </ContentWrapper>
      </div>
      {/* <Multicarousel /> */}
    </DermaMain>
  );
};

const DermaMain = styled.div`
  padding: 0rem;
  text-align: center;
  color: #03002f;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8%;
  width: 100%;
  margin-left: 4%;
`;

const ParagraphCard = styled.div`
  width: 80%;
  margin-top: 10px;
  margin-left: 10%;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const CardTitle = styled.p`
  font-size: 25px;
  color: #000000;
  width: 90%;
`;

const CardContent = styled.p`
  font-size: 15px;
  width: 90%;
`;

const Description = styled.p`
  margin-left: 0;
  width: 90%;
`;

const ImageCard = styled.div`
  width: 42%;
  background-color: #ffffff;
  border-radius: 10px;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageCardTitle = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 15px;
`;

const ImageCardDes = styled.div`
  margin-left: -5px;
  
`;

const ReadMoreButton = styled.div`
  width: 80%;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #01cab8;
  gap: 5px;
  border-radius: 10px;
  margin-left: 25px;
  margin-bottom: 10px;
  color: #fff;
  cursor: pointer;
`;

export default Dermatologistservice;
