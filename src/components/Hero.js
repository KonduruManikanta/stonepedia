import React from 'react';
import "../styles/Hero.css";
import tile from '../images/tile.png'; // Import the image from the relative path

const Hero = () => {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: `url(${tile})`, // Use the imported image directly
            }}
        >
            <div className="hero-overlay">
                <h1>Welcome to Stonepedia</h1>
                <p>Your one-stop platform for premium stones</p>
                <button className="cta-button">Explore Now</button>
            </div>
        </div>
    );
};

export default Hero;







