import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing the arrow icon
import "../styles/BestSelling.css"; // Import the CSS file

const BestSelling = () => {
  const products = [
    {
      id: 1,
      title: "Baltic Sea Wave",
      price: "₹1.00 per sq/ft",
      image: "./images/baltic-sea-wave.jpg", // Add the correct image path
    },
    {
      id: 2,
      title: "Imperial White Granite",
      price: "₹1.00 per sq/ft",
      image: "./images/imperial-white-granite.jpg", // Add the correct image path
    },
    {
      id: 3,
      title: "Makrana White",
      price: "₹1.00 per sq/ft",
      image: "./images/makrana-white.jpg", // Add the correct image path
    },
    {
      id: 4,
      title: "Dholpur Red",
      price: "₹1.00 per sq/ft",
      image: "./images/dholpur-red.jpg", // Add the correct image path
    },
    {
    id: 5,
    title: "Dholpur Red",
    price: "₹1.00 per sq/ft",
    image: "./images/dholpur-red.jpg", // Add the correct image path
    }
  ];

  return (
    <section className="best-selling">
      <h2>Best Selling Products</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button className="select-options-btn">Select options</button>
          </div>
        ))}
      </div>

      <div className="view-more">
        <button className="view-more-btn">
          View More <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default BestSelling;
