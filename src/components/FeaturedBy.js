import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing arrow icon
import "../styles/FeaturedBy.css";

const FeaturedBy = () => {
    const awards = [
        {
            id: 1,
            title: "Bharat Business Award 2023",
            description: "This award recognizes an employee who has come up with a new idea or process that has positively impacted the company."
        },
        {
            id: 2,
            title: "The Print",
            description: "This award recognizes an employee who has shown exceptional leadership skills and has inspired and motivated others."
        },
        {
            id: 3,
            title: "Times of India",
            description: "These are often awarded to businesses or individuals who have achieved success or made significant contributions in their industry."
        },
        {
            id: 4,
            title: "Hindustan Times",
            description: "Design well Acetech showcases the latest trends, products, and technologies in the industry and provides a platform."
        },
    ];

    return (
        <section id="featuredBy" className="featuredBy-section">
            <h2>Featured By</h2>
            <div className="featured-logos">

            {/* Displaying the awards */}
            <div className="award-cards">
                {awards.map((award) => (
                    <div key={award.id} className="award-card">
                        <h3>{award.title}</h3>
                        <p>{award.description}</p>
                        <div className="arrow-icon">
                            <FaArrowRight />
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default FeaturedBy;
