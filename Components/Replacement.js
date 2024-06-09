import React from 'react';
import styled from 'styled-components';

const data = [
  {
    img: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=2000&h=1126&crop=1",
    title: "Approach",
    des: "At Dr. Umang's Clinic, the doctor is committed to making you ready to get back to doing what you love. Our elite team of orthopedic surgeons will assist you to lead a pain-free life and back to your physical best."
  },
  {
    img: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=2000&h=1126&crop=1",
    title: "Approach",
    des: "At Dr. Umang's Clinic, the doctor is committed to making you ready to get back to doing what you love. Our elite team of orthopedic surgeons will assist you to lead a pain-free life and back to your physical best."
  },
  {
    img: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=2000&h=1126&crop=1",
    title: "Approach",
    des: "At Dr. Umang's Clinic, the doctor is committed to making you ready to get back to doing what you love. Our elite team of orthopedic surgeons will assist you to lead a pain-free life and back to your physical best."
  },
];

const Replacement = () => {
  return (
    <ReplacementContainer>
      <ReplacementContent>
        <Title>
          Knee Replacement <Highlight>Surgery</Highlight> Procedure
        </Title>
        <Description>
          Knee joint replacement is a surgery to replace a knee joint with a man-made artificial joint.
        </Description>
        {data.map((item, index) => (
          <Card key={index}>
            <CardImage src={item.img} alt="" />
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.des}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </ReplacementContent>
      <ImageContainer>
        <img src="./images/inner_image_home.gif" alt="" />
      </ImageContainer>
    </ReplacementContainer>
  )
}

const ReplacementContainer = styled.div`
  background-image: url('/public/Replacement_background.jpg');
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  flex-wrap: wrap; /* Added for responsiveness */
`;

const ReplacementContent = styled.div`
  width: 100%;
  max-width: 536px;
`;

const Title = styled.p`
  font-size: 40px;
  color: #175C62;
`;

const Highlight = styled.span`
  color: #01CAB8;
`;

const Description = styled.p`
  font-size: 22px;
  color: #175C62;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px; /* Adjusted for better responsiveness */
  margin-bottom: 20px;
`;

const CardImage = styled.img`
  width: 50px;
  height: 50px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.p`
  color: #175C62;
  font-weight: bold;
`;

const CardDescription = styled.p`
  color: #175C62;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`;

export default Replacement;
