import React from "react";
import styled from 'styled-components';

const Clinictiming = () => {
  return (
    <>
      <Card>
     
      <h1>Clinic Timings :</h1>
      <ul style={{fontSize:20, fontFamily:'bold', color:'#000000'}}>
      <em>
        <li >Monday: 09 AM to 10 AM --- 09 AM to 10 AM</li>
        <li>Tuesday: 11 AM to 9 PM --- 09 AM to 10 AM</li>
        <li>Wednesday: 11 AM to 9 PM --- 09 AM to 10 AM</li>
        <li>Thursday: 11 AM to 9 PM --- 09 AM to 10 AM</li>
        <li>Friday: 11 AM to 9 PM --- 09 AM to 10 AM</li>
        <li>Saturday: 11 AM to 9 PM --- 09 AM to 10 AM</li>
        </em>
      </ul>
      <p style={{fontSize:20, fontFamily:'bold', color:'#000000'}}>Sunday with appointment.</p>
    </Card>
    </>
  );
};

export default Clinictiming;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 0px;
  background-color:#71f0e9;
`;
