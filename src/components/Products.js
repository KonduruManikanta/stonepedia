import React from 'react';
import "../styles/Products.css";
import { Card, Row, Col } from 'react-bootstrap';
import { data } from '../data';  // Import the data

const Products = () => {
    return (
        <section id="products" className="products-section">
            <h2>Featured Products</h2>
            <Row>
                {data.products.map((product, index) => (
                    <Col key={index} sm={12} md={6} lg={4}>
                        <Card className="product-card">
                            <Card.Img variant="top" src={product.image} alt={product.name} /> {/* Image rendered from data */}
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Products;
