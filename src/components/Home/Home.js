// import React, {useEffect} from 'react';
// import "./Home.css"
// import sparkleCrossImg from '../img/3-1.png';
// import sparkleTopImg from '../img/6-1.png';
// import sparkleCrossBottom from '../img/17-1.png';
// import sparkleBottomLeft from '../img/4-1.png';


// const Home = () => {
//   // useEffect(() => {
//   //   const images = document.querySelectorAll('.rotating-img');

//   //   function rotateImages(timestamp) {
//   //     images.forEach(image => {
//   //       let currentRotation = parseInt(image.style.transform.replace('rotate(', '').replace('deg)', ''));
//   //       if (isNaN(currentRotation)) {
//   //         currentRotation = 0;
//   //       }
//   //       const newRotation = currentRotation + 1.0 * (timestamp / 160); // Adjust rotation speed as needed
//   //       image.style.transform = `rotate(${newRotation}deg)`;
//   //     });
//   //     requestAnimationFrame(rotateImages);
//   //   }

//   //   requestAnimationFrame(rotateImages);

//   //   return () => {
//   //     cancelAnimationFrame(rotateImages);
//   //   };
//   // }, []);

//     return (
//     <div className="homepage-short">
//       <img className="rotating-img sparkle-cross" src= {sparkleCrossImg} alt = "sparkle-cross"/>
//       <img className="rotating-img sparkle-top" alt = "sparkle-top" src={sparkleTopImg}/>
//       <img className="rotaing-img sparkle-cross-bottom" alt = "sparkle-bottom" src={sparkleCrossBottom} />
//       <img className="rotating-img sparkle-bottom-left" alt = "sparkle-bottom-left" src={sparkleBottomLeft} />
//       <div className="name">SARAH ORJI</div>
//     </div>
//     )
// }
// export default Home;

import React from 'react';
import "./Home.css";
import sparkleCrossImg from '../img/3-1.png';
import sparkleTopImg from '../img/6-1.png';
import sparkleCrossBottom from '../img/17-1.png';
import sparkleBottomLeft from '../img/4-1.png';

const Home = () => {
  return (
    <div className="homepage-short">
      <img className="sparkle-cross" src={sparkleCrossImg} alt="sparkle-cross" />
      <img className="sparkle-top" alt="sparkle-top" src={sparkleTopImg} />
      <img className="sparkle-cross-bottom" alt="sparkle-bottom" src={sparkleCrossBottom} />
      <img className="sparkle-bottom-left" alt="sparkle-bottom-left" src={sparkleBottomLeft} />
      <div className="name">SARAH ORJI</div>
    </div>
  );
}

export default Home;
