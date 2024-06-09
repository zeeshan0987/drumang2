import React from "react";
import Form from '../Form';

const Blogcard = () => {
  return (
    <>
      <section className="blog-card-main" >
        <div className="main" >
          {/* <h1>Responsive Card Grid Layout</h1> */}
          <ul className="cards" >
            <li className="cards_item" >
              <div className="card">
                <div className="card_image">
                  <img src="./images/tattoo-1.jpeg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Tattoo Removal</h2>
                  <p className="card_text">
                    Tattoo removal is a process that involves the removal of
                    unwanted tattoos from the skin.
                  </p>
                  <button className="btn-grad" style={{width: "100%",marginLeft: "0"}}>Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="./images/laser.jpeg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Laser Hair Reduction</h2>
                  <p className="card_text">
                    Laser hair reduction is a popular cosmetic procedure that
                    utilizes focused laser energy to remove unwanted hair from
                    various parts of the body.
                  </p>
                  <button className="btn-grad" style={{width: "100%",marginLeft: "0"}}>Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="./images/switch.jpeg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    Q - Switch treatment for pigmentation
                  </h2>
                  <p className="card_text">
                    Q-Switch treatment is a popular procedure for the treatment
                    of pigmentation on the skin.
                  </p>
                  <button className="btn-grad" style={{width: "100%",marginLeft: "0"}}>Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="./images/about-zeba.jpeg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Photo Facial</h2>
                  <p className="card_text">
                    Photofacial, also known as intense pulsed light (IPL)
                    therapy, is a popular cosmetic procedure that uses light
                    energy to improve the appearance of various skin concerns.
                  </p>
                  <button className="btn-grad" style={{width: "100%",marginLeft: "0"}}>Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="./images/intense-pulse.jpeg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    Intense pulse light treatment for rosacea
                  </h2>
                  <p className="card_text">
                    Acne or pimples are regarded as one of the most frustrating
                    chronic inflammatory problem with tendency to scar in young
                    adults and may bepersistent in older adults though the
                    severity may vary.
                  </p>
                  <button className="btn-grad" style={{width: "100%",marginLeft: "0"}}>Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="./images/result-1.png" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    Acne: Causes and Best Acne Treatment
                  </h2>
                  <p className="card_text">
                    Acne most commonly affects teenagers but the truth is, it is
                    quite common for acne to persist into adulthood. Although
                  </p>
                  <button className="btn-grad" style={{width: "100%",marginLeft: "0"}}>Read More</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <Form/>
      </section>
    </>
  );
};

export default Blogcard;
