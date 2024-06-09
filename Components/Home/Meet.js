import React from 'react';
import { GiKneeCap } from "react-icons/gi";
import styled from 'styled-components';

const arr = [
  {
    type: 'paragraph',
    title: "High-Quality Orthopedic Care",
    content: "We help you live your life in full motion."
  },
  {
    icon: <GiKneeCap />,
    title: 'Knee Replacement',
    des: "The complete knee replacement is a surgical procedure through which the diseased knee joint is substituted with artificial materials."
  },
  {
    icon: <GiKneeCap />,
    title: 'Hip Replacement',
    des: "Total hip replacement, that is also abbreviated as THR, is one of the common & most successful surgical procedures in Hip surgery."
  },
  {
    icon: <GiKneeCap />,
    title: 'Shoulder Replacement',
    des: "Shoulder arthroscopy surgery is used to examine or repair the tissues inside or around the shoulder joint.Shoulder arthroscopy surgery is used to examin"
  },
  {
    icon: <GiKneeCap />,
    title: 'Spine Surgery',
    des: "Our spinal cord is connected to the number of nerves that carries the electrical signals between the brain and the body."
  },
  {
    icon: <GiKneeCap />,
    title: 'Arthroscopy',
    des: "Arthroscopy provides certain benefits such as small incision, faster healing, quick recovery period and minimum scarring."
  },{
    icon: <GiKneeCap />,
    title: 'Fracture Surgeries',
    des: "It is a medical term for a broken bone. It occurs when the force applied on the bone is stronger than the bone itself."
  },
  // Add more items here as needed
];

const Meet = () => {
  return (
    <Container>
      <CardWrapper>
        {arr.map((item, index) => (
          item.type === 'paragraph' ? (
            <Card key={index} type="paragraph">
              <CardTitle type="paragraph">{item.title}</CardTitle>
              <CardContent>{item.content}</CardContent>
            </Card>
          ) : (
            <Card className="card-hover" key={index}>
              <Icon>{item.icon}</Icon>
              <CardTitle>{item.title}</CardTitle>
              <CardDes>{item.des}</CardDes>
              <LearnMoreButton>
                <span>Learn more</span>
              </LearnMoreButton>
            </Card>
          )
        ))}
      </CardWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: lightgray;
  padding: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6%;
  width: 100%;
  margin-left: 5%;
`;

const CardTitle = styled.p`
  font-size: ${props => props.type === 'paragraph' ? '30px' : '20px'};
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 20px;
`;

const Icon = styled.div`
  font-size: 75px;
`;

const CardDes = styled.div`
  font-size: 16px;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 2%;
`;

const LearnMoreButton = styled.div`
  width: 80%;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #01CAB8;
  gap: 5px;
  border-radius: 10px;
  margin-left: 25px;
  margin-bottom: 10px;
  color: #fff;
  cursor: pointer;
`;

const Card = styled.div`
  width: ${props => props.type === 'paragraph' ? '40%' : '42%'};
  background-color: ${props => props.type === 'paragraph' ? '#333' : '#ffffff'};
  color: ${props => props.type === 'paragraph' ? '#fff' : '#333'};
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.type === 'paragraph' ? '#333' : '#174646f1'};
  }

  &:hover ${CardTitle}, &:hover ${CardDes} {
    color: ${props => props.type === 'paragraph' ? '#fff' : '#000000'};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Meet;
