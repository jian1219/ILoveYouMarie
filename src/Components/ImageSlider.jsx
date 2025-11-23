import React, { useState, useEffect } from "react";

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';


const ImageSlider = () => {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Automatic slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider-container relative w-full max-w-lg mx-auto mt-10">


      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`${index === current ? "block" : "hidden"} transition-all duration-500`}
        >
          <img src={img} alt={`slide ${index}`} className="w-full h-64 object-cover rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
