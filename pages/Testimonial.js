import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import Multicarousel from "../Components/Multicarousel";

const arr = [
  {
    type: 'paragraph',
    title: "At our Clinic, we pride ourselves on providing the best care possible to our patients. Orthopedic Care",
    content: "",
    des: "Here Are Some of the Testimonials By our Patients. ",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg",
    title: 'Kaleem Anjum',
    des: "It has been a great experience with Dr. Gaurav Khera and his staff for a smooth and a very successful total knee operation for my father. Dr. Gaurav Khera is very experienced and expert at his job.Thanks to Mr. Narang also for his assistance and cooperation. Happy 😊 …"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg",
    title: 'Namita Dhamija',
    des: "I travelled all the way from overseas to get my foot treatment. I heard about Dr Gaurav Khera so clubbed by India visit along with other priorities. Fruitful and satisfying experience i encountered upon meeting Dr Gaurav and his team mate Mr Gaurav. My pain is much relieved and so my purpose of meeting him is met. 100 marks to Dr. We have good doctors in India."
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg",
    title: 'Divya Thakur',
    des: "I recently got my mother’s knee replacement. It’s been 22 days and my mother have already started walking independently. The entire process starting from her pre operation , operation and post one is such a wonderful experience. Dr Khera and his entire team including his coordinator Mr Narang are so cordial. thanks to Dr Gaurav Narang for guiding me right direction and help us ."
  },
];

const Testimonial = () => {
  return (
    <><Header />
    <DermaMain>
    <div
        style={{
          backgroundColor: "#07c4aa",
          // backgroundImage: 'url("./images/hero_about.jpg")',
          
          width: "100%",
          height: "auto",
          paddingTop: "0rem",
          paddingLeft: "4rem",
          overflow: "hidden",
          textAlign: "center",
          marginTop: "0rem",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "1.5rem", }}>
          OUR Testimonials
        </h1>
      </div>
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
                  <img style={{ width: "87px", height: '97px', overflow: 'hidden',marginLeft:'25px' }} src={item.img} alt={item.title} />
                </div>
                
                <ImageCardDes>{item.des}</ImageCardDes>
                <ImageCardTitle>{item.title}</ImageCardTitle>
                <ReadMoreButton>
                  <span>Read more</span>
                </ReadMoreButton>
              </ImageCard>
            )
          ))}
        </ContentWrapper>
      </div>
      {/* <Multicarousel /> */}
      <Footer />
    </DermaMain>
    </>
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

export default Testimonial;
