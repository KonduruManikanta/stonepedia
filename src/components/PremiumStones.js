import React from 'react';
import "../styles/PremiumStones.css";

const PremiumStones = () => {
    const premiumStones = [
        { id: 1, name: 'Luxury Granite', image: '/images/granite.jpg', description: 'High quality granite for sophisticated designs.' },
        { id: 2, name: 'Marble Elegance', image: '/images/marble.jpg', description: 'Elegant marble stone perfect for luxurious spaces.' },
        { id: 3, name: 'Onyx Perfection', image: '/images/onyx.jpg', description: 'Unique onyx stone for a distinctive look.' },
        { id: 4, name: 'Sapphire Quartz', image: '/images/quartz.jpg', description: 'Premium sapphire quartz with exquisite patterns.' },
        { id: 5, name: 'Sapphire Quartz', image: '/images/quartz.jpg', description: 'Premium sapphire quartz with exquisite patterns.' }
    ];

    return (
        <section id="premiumStones" className="premium-stones">
            <h2>Premium Stones</h2>
            <div className="stones-container">
                {premiumStones.map(stone => (
                    <div key={stone.id} className="stone-card">
                        <img src={stone.image} alt={stone.name} className="stone-image" />
                        <h3>{stone.name}</h3>
                        <p>{stone.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PremiumStones;
