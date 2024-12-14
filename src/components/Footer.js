import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <p>&copy; 2024 Stonepedia. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-link-category">
                    <h4>StonePedia Exclusive</h4>
                    <ul>
                        <li><a href="/best-seller">Best Seller</a></li>
                        <li><a href="/premium-stones">Premium Stones</a></li>
                        <li><a href="/shop-by-color">Shop by Color</a></li>
                        <li><a href="/shop-by-category">Shop by Category</a></li>
                        <li><a href="/applications">Applications</a></li>
                    </ul>
                </div>

                <div className="footer-link-category">
                    <h4>Customer Services</h4>
                    <ul>
                        <li><a href="/customer-reviews">Customer Review</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/request-quotation">Request For Quotation</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/help-center">Help Center</a></li>
                    </ul>
                </div>

                <div className="footer-link-category">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/careers">Career</a></li>
                        <li><a href="/terms-condition">Terms & Condition</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/cookies-policy">Cookies Policy</a></li>
                        <li><a href="/cancellation-policy">Cancellation Policy</a></li>
                        <li><a href="/disclaimer">Disclaimer</a></li>
                    </ul>
                </div>

                <div className="footer-link-category">
                    <h4>Reach Us</h4>
                    <ul>
                        <li><a href="/press">In The Press</a></li>
                        <li><a href="/instagram">Instagram</a></li>
                        <li><a href="/facebook">Facebook</a></li>
                        <li><a href="/linkedin">LinkedIn</a></li>
                        <li><a href="/youtube">Youtube</a></li>
                        <li><a href="/feedback">Feedback</a></li>
                        <li><a href="/partner-with-us">Partner with us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
