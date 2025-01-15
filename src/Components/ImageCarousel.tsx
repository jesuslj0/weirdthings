import React, { useState } from "react";
import "../css/ImageCarousel.css";

interface ImageProps {
    images: string[],
}

const ImageCarousel: React.FC<ImageProps> = ({images}) =>  {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image: string, index: number) => (
          <div className="carousel-slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="carousel-btn next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default ImageCarousel;
