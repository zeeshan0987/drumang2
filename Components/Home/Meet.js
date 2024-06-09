import React from 'react';
import { GiKneeCap } from "react-icons/gi";

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

// style={{ display: 'flex', flexWrap: 'wrap', gap: '6%', width: '100%', marginLeft: '5%' }}
const Meet = () => {
  return (
    <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>
      <div className='block md:flex flex-wrap gap-4 items-center justify-center w-full'>
        {arr.map((item, index) => (
          item.type === 'paragraph' ? (
            <div className='w-full md:w-[42%] ' style={styles.card1} key={index}>
              <p style={styles.cardTitle1}>{item.title}</p>
              <p style={styles.cardContent}>{item.content}</p>
            </div>
          ) : (
            <div className="card-hover w-full md:w-[42%]" style={styles.card2} key={index}>
              <div className='hover:bg-[#174646f1] w-full h-full p-4 hover:text-white'>
              <div style={{fontSize:75 }}>
              {item.icon}
                {/* <img style={styles.cardImg} src={item.img} alt={item.title} /> */}
              </div>
              <div style={styles.cardTitle2}>{item.title}</div>
              <div style={styles.cardDes}>{item.des}</div>
              <div style={styles.learnMoreButton}>
                <span>Learn more</span>
              </div>
              </div>
            </div>
          )
        ))}
      </div>

      <style>
        {`
          .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            
          }

          .card-hover:hover .cardTitle2,
          .card-hover:hover .cardDes {
            color: #000000;
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  card1: {
    // width: '40%',
    marginTop: '10px',
    // backgroundColor: '#333',
    color: '#333',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  card2: {
    // width: '42%',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '2%',
    overflow:'hidden',
    // padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  cardTitle1: {
    fontSize: '30px',
    marginBottom: '10px',
  },
  cardTitle2: {
    fontSize: '20px',
    marginTop: '2%',
    marginBottom: '2%',
    marginLeft: '2%',
  },
  cardContent: {
    fontSize: '20px',
  },
  cardImg: {
    width: '19%',
    height: 'auto',
    overflow: 'hidden',
    marginLeft: '25px',
  },
  cardDes: {
    fontSize: '16px',
    marginLeft: '25px',
  },
  learnMoreButton: {
    width: '80%',
    height: '47px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01CAB8',
    gap: '5px',
    borderRadius: '10px',
    marginLeft: '25px',
    marginBottom: '10px',
    color: '#fff',
    cursor: 'pointer',
  },
  '@media (maxWidth: 320px)': {
    card1: {
      width: '100%',
    },
    card2: {
      width: '100%',
    }
  },
  '@media (maxWidth: 768px)': {
    card1: {
      width: '100%',
    },
    card2: {
      width: '100%',
    }
  }
};

export default Meet;