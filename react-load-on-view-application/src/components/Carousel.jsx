import React, { useState, useRef } from "react";
import AnimatedCard from "./AnimatedCard";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Handles clicking on the image container.
  const handleContainerClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    // Check if click was on left half or right half.
    if (clickX < rect.width / 2) {
      // Previous image
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      // Next image
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Handles clicking on one of the dots.
  const handleDotClick = (index, e) => {
    e.stopPropagation();
    setActiveIndex(index);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className={`relative overflow-hidden ${
        images.length > 1 && "cursor-pointer"
      }`}
    >
      <AnimatedCard src={images[activeIndex]} />
      {/* Dots for navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-2 w-full flex justify-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={(e) => handleDotClick(index, e)}
              className={`w-1.5 h-1.5 rounded-full cursor-pointer ${
                index === activeIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
