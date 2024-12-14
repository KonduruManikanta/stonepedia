import React from 'react';
import "../styles/Exclusive.css"; // Make sure to link the CSS file

const Exclusive = () => {
  const stones = [
    { name: "Marble", image: "./images/marble.jpg" },
    { name: "Granite", image: "./images/granite.jpg" },
    { name: "Quartzite", image: "./images/quartzite.jpg" },
    { name: "Limestone", image: "./images/limestone.jpg" },
    { name: "Travertine", image: "./images/travertine.jpg" },
    { name: "Onyx", image: "./images/onyx.jpg" },

  ];

  return (
    <div className="exclusive">
      <h2>Discover Your Ideal Stone</h2>
      <div className="stone-categories">
        {stones.map((stone, index) => (
          <div key={index} className="stone-card">
            <img src={stone.image} alt={stone.name} className="stone-image" />
            <p className="stone-name">{stone.name}</p>
          </div>
        ))}
      </div>
      <button className="view-more">
        View More
        <span className="arrow">&#8594;</span> {/* Right arrow icon */}
      </button>
    </div>
  );
};

export default Exclusive;
