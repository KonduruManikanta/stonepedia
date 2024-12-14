import React from 'react';
import { FaCheckCircle, FaTruck, FaCogs, FaCertificate, FaUsers, FaRegBuilding } from 'react-icons/fa';
import "../styles/WhyStonepedia.css"; 

const WhyStonepedia = () => {
  const features = [
    {
      id: 1,
      title: "Rigorous Quality Control",
      description: "Multi-level inspections ensure every stone meets the highest durability and aesthetic standards.",
      icon: <FaCheckCircle />
    },
    {
      id: 2,
      title: "Certified Suppliers & Compliance",
      description: "Sourced from certified suppliers, every stone complies with global and local regulations.",
      icon: <FaCertificate />
    },
    {
      id: 3,
      title: "Expert Guidance and Support",
      description: "StonePedia’s specialists provide expert advice on material selection, application, and maintenance.",
      icon: <FaUsers />
    },
    {
      id: 4,
      title: "Comprehensive High-Quality Stones",
      description: "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
      icon: <FaRegBuilding />
    },
    {
      id: 5,
      title: "Doorstep Delivery",
      description: "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
      icon: <FaTruck />
    },
    {
      id: 6,
      title: "Guaranteed Order Fulfillment",
      description: "Accurate and timely order processing to meet all project timelines without delays.",
      icon: <FaCogs />
    },
  ];

  return (
    <div className="why-stonepedia">
      <h2>Why Choose Stonepedia?</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="icon-container">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyStonepedia;
