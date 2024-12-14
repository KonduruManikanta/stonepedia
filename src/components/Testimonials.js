import React, { useState } from 'react';
import "../styles/Testimonials.css"; // Ensure you link the CSS file

const Testimonials = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      name: 'Dev Patel',
      time: '1 month ago',
      message: 'Thanks for understanding our requirement and sourcing the best for our project. Appreciate the whole StonePedia Team.',
      image: './images/dev-patel.jpg', // Replace with real image path
    },
    {
      name: 'Vishakha Sharma',
      time: '10 months ago',
      message: 'Stonepedia has a stunning selection of marble and granite - found the perfect countertop for my kitchen. This company has competitive prices and beautiful stones. Stonepedia exceeded my expectations, highly recommend them!',
      image: './images/vishakha-sharma.jpg', // Replace with real image path
    },
    {
      name: 'Ghanishtha Sharma',
      time: '10 months ago',
      message: 'Stonepedia\'s team is too helpful and has great stock availability. Thank you, I will surely recommend it to my representatives!',
      image: './images/ghanishtha-sharma.jpg', // Replace with real image path
    },
  ];

  // Form submission state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    message: ''
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form data (send to API or process as needed)
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="testimonials">
      <h2>What Our Happy Clients Say About Us</h2>

      <div className="testimonials-content">
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.time}</p>
                <p>{testimonial.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="review-form">
          <h3>Write a Review</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Your Message"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Submit Request</button>
          </form>
        </div>
      </div>

      <div className="google-reviews">
        <button className="review-btn">
          Write a Review
          <span className="arrow">&#8594;</span>
        </button>
      
      </div>
    </div>
  );
};

export default Testimonials;
