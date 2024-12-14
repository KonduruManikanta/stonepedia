import React, { useState } from 'react';
import "../styles/CategorySelector.css";

const CategorySelector = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    './images/category1.png',
    './images/category2.png',
    './images/category3.png',
    './images/category4.png',
    './images/category5.png',
    './images/category6.png',
    './images/category7.png',
    './images/category8.png',
    './images/category9.png',
    './images/category10.png',
    './images/category11.png',
  ];

  const handleLeftClick = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleRightClick = () => {
    if (currentIndex < images.length - 5) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="category-selector">
      <button className="arrow left" onClick={handleLeftClick}>&lt;</button>
      <div className="category-images">
        {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
          <div key={index} className="category-image">
            <img src={image} alt={`Category ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={handleRightClick}>&gt;</button>
    </div>
  );
};

export default CategorySelector;
