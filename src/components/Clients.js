import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/clients.css";

const Clients = () => {
  const clients = [
    { id: 1, name: 'Client 1', logo: '/images/client1.png' },
    { id: 2, name: 'Client 2', logo: '/images/client2.png' },
    { id: 3, name: 'Client 3', logo: '/images/client3.png' },
    { id: 4, name: 'Client 4', logo: '/images/client4.png' },
    { id: 5, name: 'Client 5', logo: '/images/client5.png' },
    { id: 6, name: 'Client 6', logo: '/images/client6.png' },
    { id: 7, name: 'Client 7', logo: '/images/client7.png' },
    { id: 8, name: 'Client 8', logo: '/images/client8.png' },
    { id: 9, name: 'Client 9', logo: '/images/client9.png' },
    { id: 10, name: 'Client 10', logo: '/images/client10.png' },
    { id: 11, name: 'Client 11', logo: '/images/client11.png' },
    { id: 12, name: 'Client 12', logo: '/images/client12.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically scroll the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / 5));
    }, 3000); // Adjust time interval as needed
    return () => clearInterval(interval);
  }, [clients.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(clients.length / 5)) % Math.ceil(clients.length / 5));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / 5));
  };

  // Get a slice of the logos to display per "page"
  const displayClients = () => {
    const startIndex = currentIndex * 5; // Show 5 logos per scroll
    return clients.slice(startIndex, startIndex + 5);
  };

  return (
    <Container className="clients-section my-5">
      <h2 className="text-center mb-4">Our Valuable Clients</h2>
      <div className="clients-carousel">
        <Button className="carousel-nav-btn" onClick={handlePrev}>&lt;</Button>

        <div className="carousel-items">
          {displayClients().map((client) => (
            <div key={client.id} className="client-item text-center">
              <img
                src={client.logo}
                alt={client.name}
                className="img-fluid"
                style={{ maxHeight: '100px', objectFit: 'contain' }}
              />
              <h5 className="mt-3">{client.name}</h5>
            </div>
          ))}
        </div>

        <Button className="carousel-nav-btn" onClick={handleNext}>&gt;</Button>
      </div>
    </Container>
  );
};

export default Clients;
