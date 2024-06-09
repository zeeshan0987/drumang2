import React from "react";
import PropTypes from "prop-types";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";

const YoutubeEmbed = () => {
  return (
    <>
      <Header />
      <AboutHeader>
        <h1>About Doctor</h1>
        <p>
          Dr. Umang Agarwal <br />
          Ex- Associate Professor<br />
          M.s.(Ortho), F.I.A.A.S, F.I.S.M.<br />
          Arthroscopy & Arthroplasty Specialist<br />
          Joint Replacement and Spine Specialist
        </p>
      </AboutHeader>
      <AboutDoctor />
      <VlogsSection>
        <h1>Vlogs</h1>
        <VlogContainer>
          <iframe
            width="240"
            height="200"
            src="https://www.youtube.com/embed/CKRs9wxNvA0?si=KS0b9R2ZCnVsaDdI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="240"
            height="200"
            src="https://www.youtube.com/embed/CKRs9wxNvA0?si=KS0b9R2ZCnVsaDdI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="240"
            height="200"
            src="https://www.youtube.com/embed/CKRs9wxNvA0?si=KS0b9R2ZCnVsaDdI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="240"
            height="200"
            src="https://www.youtube.com/embed/CKRs9wxNvA0?si=KS0b9R2ZCnVsaDdI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </VlogContainer>
      </VlogsSection>
      <Footer />
    </>
  );
};

const AboutHeader = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;

  h1 {
    margin-bottom: 10px;
  }

  p {
    margin: 0;
  }
`;

const VlogsSection = styled.div`
  text-align: center;
  padding: 20px;

  h1 {
    margin-bottom: 20px;
  }
`;

const VlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  iframe {
    max-width: 100%;
  }
`;

const AboutDoctor = styled.div`
  /* Add styles for AboutDoctor if needed */
`;

export default YoutubeEmbed;