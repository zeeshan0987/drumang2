import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Cases = () => {
  const [data, setData] = useState();

  const getDirectorData = async () => {
  //changes
  
    const NEXT_PUBLIC_URL =
      process.env.NEXT_PUBLIC_URL || "https://cms.maitretech.com/drumang/items";
    const response = await fetch(`${NEXT_PUBLIC_URL}/cases?fields=*.*`);

    const responseData = await response.json();
    setData(responseData.data);
  };

  useEffect(() => {
    getDirectorData();
  }, []);

  return (
    <>
      <Header />
      <div className="about-header" id="before-after">
        <h1>Results</h1>
        <p>Dr. Umang Agarwal</p>
        <p>Ex- Associate Professor<br></br>
            M.s.(Ortho),F.I.A.A.S, F.I.S.M.<br></br>
            Arthroscopy & Arthroplasty Specialist<br></br>
            Joint Replacement and Spine Specialist</p>
      </div>
      <section className="before-after-main">
        <div className="main">
          <ul className="cards-new-1 results">
            {data?.map((item) => (
              <li className="cards_item-1" key={item.id}>
                <div className="card_new-1">
                  <div className="card_image">
                    <img src={item.case_image?.data?.full_url} alt={item.case_name} />
                    <h6>{item.case_name}</h6>
                    <p>{item.case_detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cases;
