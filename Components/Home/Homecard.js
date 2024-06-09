import React from "react";
import { FaCalendarCheck, FaMobileAlt, FaRegClock } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";

const Homecard = () => {
  return (
    <Section>
      <StyledLink href="/Contactus">
        <Card>
          <Title>Robotic Joint Replacement Surgeries</Title>
          <IconDiv>
            <FaCalendarCheck />
          </IconDiv>
        </Card>
      </StyledLink>
      <StyledLink href="/Contactus">
        <Card>
          <Title>Book an Appointment.<br></br> contact us</Title>
          <IconDiv>
            <FaMobileAlt />
          </IconDiv>
        </Card>
      </StyledLink>
      <StyledLink href="/Contactus">
        <Card>
          <Title>Consultation Timing</Title>
          <Description>Mon - Sat : 11 AM to 7 PM</Description>
          <IconDiv>
            <FaRegClock />
          </IconDiv>
        </Card>
      </StyledLink>
    </Section>
  );
};

const Section = styled.section`
  display: flex; /* Display children in a row */
  justify-content: space-around; /* Distribute space between children */
  gap: -4rem;
  padding: 0rem;
  background-color: aquamarine;
  color: #8d4343;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  max-width: 300px;
  flex: 1 1 300px;
`;

const Card = styled.div`
  background-image: url('/images/homecardbackground.png');
  padding: 2rem;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  border-radius: 10px;
  transition: box-shadow 0.3s, background-color 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(11, 255, 235, 0.274);
    background-color: #000000;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const IconDiv = styled.div`
  margin-top: 1rem;
  font-size: 45px;
  padding: 1rem;
  color: #06eedb8f;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export default Homecard;
