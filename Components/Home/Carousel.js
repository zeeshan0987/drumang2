import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect } from "react";
import { FaCalendarCheck, FaMobileAlt, FaRegClock } from "react-icons/fa";
// import './Carousel1.css'; // Import your CSS file here

function Carousel1() {
  const [data, setData] = useState([]); 

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/drumang/items/slider?fields=*.*.*"
      );
      const jsonData = await response.json();
      console.log("Fetched data:", jsonData);
      setData(jsonData?.data)
    
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Carousel fade>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Carousel.Item key={index} className="carousel_image_new">
            <img
              className="d-block w-100"
              src={item?.slider_images?.data?.full_url}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))
      ) : (
        <p>Loading...</p> // Display a loading message or spinner while data is being fetched
      )}
    </Carousel>
  );
}

export default Carousel1;