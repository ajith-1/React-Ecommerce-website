import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Content from '../../Pages/Content/Content';

const Footer = () => {
  return (
    <footer className="footer">
      <Content>
        <div className="footer-content">
          <div className="footer-section">
            <h2>About Us</h2>
            <p>Welcome to our e-commerce website,a platform dedicated to delivering an exceptional shopping experience with a strong focus on customer satisfaction, product quality, and safety.</p>
          </div>
          <div className="footer-section">
            <h2>Explore More</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Product</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Log in</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p><i class="ri-phone-fill"></i> Phone :+91 9876543210</p>
            <p><i class="ri-mail-fill"></i> Gmail  ajithm0216@gmail.com</p>
          </div>
        </div>
        <div className="footer-socialLink">
          <ul>
            <li><a href="https://facebook.com"><i class="ri-facebook-circle-fill"></i></a></li>
            <li><a href="https://twitter.com"><i class="ri-twitter-fill"></i></a></li>
            <li><a href="https://github.com"><i class="ri-github-fill"></i></a></li>
            <li><a href="https://linkedin.com"><i class="ri-linkedin-box-fill"></i></a></li>
          </ul>
        </div>
      </Content>
    </footer>
  );
};

export default Footer;
