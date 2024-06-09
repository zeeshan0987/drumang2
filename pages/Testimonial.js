import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Testimonial = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Header />

      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "auto",
          paddingTop: "1.5rem",
          paddingLeft: "4rem",
          overflow: "hidden",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "1.5rem" }}>
          OUR Testimonials
        </h1>
      </div>

      <div
        className="cardslidersetup "
        style={{ backgroundColor: "lightgray", padding: "2rem" }}
      >
              {/* <div className="jkl">
                  {
                      data?.Testimonials?.map((item)=>
                        { 
                        return(<>
                         <div className="jkl1" style={{ backgroundColor: "white" }} >
                            <p>{item.testimonial_data}</p>
                         <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
                         <h6 style={{ margin: "1rem", textAlign: "right" }}>{item.testimonial_name}</h6>

                         </div>

                         </div>
                        </>)
                      })
                  }
        </div> */}
        <div className="jkl">
          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
            My mother in law Mrs Sudha Gupta was bearing the pain of Hip 
            from last 1 year. Then we met Dr Gaurav Khera & Dr Gaurav Narang and 
            he suggested me for Hip replacement surgery. Then my mother in law 
            underwent Hip replacement On 14th of Aug 2023 . She is absolutely fine 
            now and special thanks to Dr Gaurav Narang for guiding me right
             direction and help us .
            </p>
            <button style={{ border: "none" }}>Read More</button>
            <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              <h6 style={{ margin: "1rem", textAlign: "right" }}>Khairon</h6>
            </div>
          </div>

          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
            I recently got my mother’s knee replacement. It’s been 22 
            days and my mother have already started walking independently. 
            The entire process starting from her pre operation , operation and
             post one is such a wonderful experience. Dr Khera and his entire team 
             including his coordinator Mr Narang are so cordial. thanks to Dr
              Gaurav Narang for guiding me right direction and help us .
            </p>
            <button style={{ border: "none" }}>Read More</button>
            <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              <h6 style={{ margin: "1rem", textAlign: "right" }}>Ridhima</h6>
            </div>
          </div>
        </div> 

        <div className="jkl">
          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
            It has been a great experience with Dr. Gaurav Khera and his
             staff for a smooth and a very successful total knee operation
              for my father. Dr. Gaurav Khera is very experienced and 
              expert at his job.Thanks to Mr. Narang also for his assistance and cooperation. Happy 😊 …
            </p>
            <button style={{ border: "none" }}>Read More</button>
            <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              <h6 style={{ margin: "1rem", textAlign: "right" }}>shreya</h6>
            </div>
          </div>

          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              Homeoeopathic medicines works like magic on my damaged skin , I
              was suffering with burning redness and itching on my face
              everytime l am exposed to sunlight and heat . Taking medicines
              from Zebdermm Wellness reduced redness of face and itching and
              buring has completely gone . just in 4 days Thanks to Dr. Zeba and
              homeopathy . now I can Freely step out .
            </p>
            <button style={{ border: "none" }}>Read More</button>
            <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              <h6 style={{ margin: "1rem", textAlign: "right" }}>Zainab bi</h6>
            </div>
          </div>
        </div> 

      <div className="jkl">
          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              My pigmentation has reduced drastically within the time period of
              7-8 month . I thank Khatoon Beauty clinic and esp Dr. Zeba that
              their treatment and products have shown such a great effect on my
              skin thankyou .
            </p> 
            <button style={{ border: "none" }}>Read More</button>
            <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

               <h6 style={{ margin: "1rem", textAlign: "right" }}>
                Zehra Batool{" "}
              </h6>
            </div>
          </div> 

          

          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
            I had a surgery of neck femur. Doctor Gaurav is excellent person and surgeon. 
            My fracture was compressed really well and doctor explained the situation very well. Completely satisfied.
            </p>
            <button style={{ border: "none" }}>Read More</button>
            <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

               <h6 style={{ margin: "1rem", textAlign: "right" }}>Parul</h6>
            </div>
          </div>
        </div>

        {/* <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              Dr Zeba Quadiri online consultation popped up as a blessing to me
              on instagarm , i am a patient of severe acne breakouts and oily
              skin , I have been on several medications for quite long but
              nothing helped . Zebdermm's medicine and skin care products worked
              tremendously not only it cleared my acne but also balanced oil on
              my face. All this happened from the comfort of my home. I
              consulted online and whole therpapy was delivered at my doorstep .
            </p> 
            <button style={{ border: "none" }}>Read More</button>
            <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
              <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" />

              <h6 style={{ margin: "1rem", textAlign: "right" }}>Naaz</h6>
            </div>
          </div> */}

         {/* <div className="jkl">
          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              I am thankful to homeopathy and zebdermmwellness for treating
              eczema of my son. which he was suffering from a year. He is
              totally fine now thanks a lot and all the best wishes to Dr. Zeba
            </p>
            <button style={{ border: "none" }}>Read More</button>
            <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
              <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" />

              <h6 style={{ margin: "1rem", textAlign: "right" }}>Deepti</h6>
            </div>
          </div>

          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              {" "}
              I applied some wrong creams thinking it will give me quick results
              which damaged my skin . Thankfully I consulted Dr. Zeba and now my
              skin issues got cured. Thanks to Dr. Zeba and ZebdermmWellness
            </p>
            <button style={{ border: "none" }}>Read More</button>
            <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
              <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" />

              <h6 style={{ margin: "1rem", textAlign: "right" }}>Driti </h6>
            </div>
          </div>
        </div> */}
        {/* <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              {" "}
              my skin has lightened up a lot skintone has evened out and sun its
              no longer a trouble I can step out in the sun without being
              worried for sun tan and sensitivity. Would like to thank
              zebdermmwllness and Fatima{" "}
            </p>
            <button style={{ border: "none" }}>Read More</button>
            <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
              <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" />

               <h6 style={{ margin: "1rem", textAlign: "right" }}>Maqsuma </h6>
            </div>
          </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Testimonial;
