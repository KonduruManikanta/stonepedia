import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import "../styles/LatestNews.css";

const LatestNews = () => {
  const news = [
    { id: 1, title: 'Stonepedia Expands to New Markets', image: '/images/news1.jpg', date: '2024-12-01', comments: 12 },
    { id: 2, title: 'New Marble Collection Released', image: '/images/news2.jpg', date: '2024-11-25', comments: 8 },
    { id: 3, title: 'Stonepedia Partners with Industry Leaders', image: '/images/news3.jpg', date: '2024-11-18', comments: 20 },
    { id: 4, title: 'Stonepedia Receives Top Industry Award', image: '/images/news4.jpg', date: '2024-10-30', comments: 15 },
    { id: 5, title: 'Grand Opening of New Stonepedia Showroom', image: '/images/news5.jpg', date: '2024-10-22', comments: 5 },
    { id: 6, title: 'Stonepedia Introduces Eco-friendly Stones', image: '/images/news6.jpg', date: '2024-10-10', comments: 2 },
    { id: 7, title: 'Stonepedia Hosts Annual Stone Expo', image: '/images/news7.jpg', date: '2024-09-28', comments: 10 },
    { id: 8, title: 'Stonepedia Expands to New Markets', image: '/images/news1.jpg', date: '2024-12-01', comments: 12 },
    { id: 9, title: 'New Marble Collection Released', image: '/images/news2.jpg', date: '2024-11-25', comments: 8 },
    { id: 10, title: 'Stonepedia Partners with Industry Leaders', image: '/images/news3.jpg', date: '2024-11-18', comments: 20 },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(news.length / 5));
    }, 3000);
    return () => clearInterval(interval);
  }, [news.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(news.length / 5)) % Math.ceil(news.length / 5));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(news.length / 5));
  };

  const displayNews = () => {
    const startIndex = currentIndex * 5; // Show 5 news articles per scroll
    return news.slice(startIndex, startIndex + 5);
  };

  return (
    <Container className="latest-news-section my-5">
      <h2 className="text-center mb-4">Latest News</h2>
  

      <div className="news-carousel">
        <Button className="carousel-nav-btn" onClick={handlePrev}>
          <FaArrowLeft />
        </Button>

        <div className="carousel-items">
          {displayNews().map((item) => (
            <div key={item.id} className="news-item">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid"
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
              <h5 className="news-title">{item.title}</h5>
              <p className="news-date">{item.date}</p>
              <p className="comments-count">{item.comments} Comments</p>
             
            </div>
          ))}
        </div>

        <Button className="carousel-nav-btn" onClick={handleNext}>
          <FaArrowRight />
        </Button>
      </div>
    </Container>
  );
};

export default LatestNews;
