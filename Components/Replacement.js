import React from 'react';

const arr = [
  {
    img: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=2000&h=1126&crop=1",
    title: "Approach",
    des: "At Dr. Kheras Clinic, the doctor is committed to making you ready to get back to doing what you love. Our elite team of orthopedic surgeons will assist you to lead a pain-free life and back to your physical best."
  },
  {
    img: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=2000&h=1126&crop=1",
    title: "Approach",
    des: "At Dr. Kheras Clinic, the doctor is committed to making you ready to get back to doing what you love. Our elite team of orthopedic surgeons will assist you to lead a pain-free life and back to your physical best."
  },
  {
    img: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=2000&h=1126&crop=1",
    title: "Approach",
    des: "At Dr. Kheras Clinic, the doctor is committed to making you ready to get back to doing what you love. Our elite team of orthopedic surgeons will assist you to lead a pain-free life and back to your physical best."
  },
];

const Replacement = () => {
  return (
    <div className='replacement' style={Styles.replacement}>
      <div className='replacement1' style={Styles.replacement1}>
        <div>
          <p style={{ fontSize: '60px', color: '#175C62' }}>
            Knee Replacement <span style={{ color: '#01CAB8' }}>Surgery</span> Procedure
          </p>
        </div>
        <div>
          <p style={{ fontSize: "22px", color: '#175C62' }}>
            Knee joint replacement is a surgery to replace a knee joint with a man-made artificial joint.
          </p>
        </div>
        {arr?.map((item, index) => (
          <div key={index} style={Styles.cards3}>
            <div>
              <img style={{ width: '50px', height: '50px' }} src={item.img} alt="" />
              <p style={{ color: '#175C62', fontWeight: "bold" }}>{item.title}</p>
            </div>
            <div>
              <p style={{ color: '#175C62' }}>
                {item.des}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='replacement2' style={Styles.replacement2}>
        <img src="./images/inner_image_home.gif" alt="" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  )
}

const Styles = {
  replacement: {
    backgroundImage: "url('/public/Replacement_background.jpg')",
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "20px",
  },
  replacement1: {
    width: "536px",
    height: "1060px",
  },
  replacement2: {
    width: "40%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cards3: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    gap: "40px",
  },
};

export default Replacement;
