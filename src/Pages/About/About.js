import React from 'react';
import './About.css';
import Content from '../Content/Content';

function About() {
    return (
        <div className='about-container'>
            <Content>
                <div className='about-content'>
                    <div className='about-section'>
                        <div className='image'><img src='/images/other/welcome.jpg' /></div>
                        <div className='para'>
                            <h2>About</h2>
                            <p>Welcome to our e-commerce website,a platform dedicated to delivering an exceptional shopping experience with a strong focus on customer satisfaction, product quality, and safety.</p>
                        </div>
                    </div>
                    <div className='about-section'>
                        <div className='para'>
                            <h2>Website Details</h2>
                            <p>Our user-friendly website is designed with your convenience in mind. We strive to provide a seamless and enjoyable browsing experience. You can easily navigate through our extensive product categories, access detailed product information, and use smart search filters to find exactly what you need.</p>
                            <p>We are committed to ensuring a secure shopping environment. Our website utilizes advanced encryption and security protocols to protect your personal information and guarantee safe transactions.</p>
                        </div>
                        <div className='image'><img src='/images/other/details.jpg' /></div>
                    </div>
                    <div className='about-section'>
                        <div className='image'><img src='/images/other/company.jpg' /></div>
                        <div className='para'>
                            <h2>Company Policy</h2>
                            <p>At our company, we believe in transparency and integrity. We adhere to a customer-centric approach, prioritizing your needs and preferences. Our policies are designed to be fair and flexible, ensuring a positive experience for each customer.</p>
                            <p>We take pride in our ethical business practices and are committed to operating in compliance with all applicable laws and regulations. Our company policy extends to sustainability initiatives and responsible sourcing practices, promoting eco-friendly and socially responsible products.</p>
                        </div>
                    </div>
                    <div className='about-section'>
                        <div className='para'>
                            <h2>Product Selection and Quality</h2>
                            <p>Our product selection process is rigorous and meticulous. We collaborate with trusted brands and suppliers who share our commitment to quality. Each product undergoes strict quality checks to ensure that only the best items are offered to our customers.</p>
                            <p>From cutting-edge electronics to fashion-forward apparel, home essentials, and more, we continuously update our product catalog to bring you the latest trends and innovations in the market.</p>
                        </div>
                        <div className='image'><img src='/images/other/quality.jpg' /></div>
                    </div>
                    <div className='about-section'>
                        <div className='image'><img src='/images/other/safety.jpg' /></div>
                        <div className='para'>
                            <h2>Safety and Security</h2>
                            <p>Your safety is paramount to us. We maintain the highest standards of safety throughout our operations, from the handling of products to the security of your personal information. Our logistics partners are chosen based on their adherence to safety protocols, ensuring that your orders reach you in perfect condition.
                            </p>
                            <p>To safeguard your online experience, our website is equipped with robust security measures. We use encryption technology and secure payment gateways to protect your data and guarantee secure transactions.</p>
                        </div>
                    </div>
                    <div className='about-section'>
                        <div className='para'>
                            <h2>Feedback and Improvements</h2>
                            <p>We value your feedback and take it seriously. Your input helps us improve our services and enhance your shopping experience. We encourage you to share your thoughts with us, as we constantly strive to be better.</p>
                            <p>Thank you for choosing our e-commerce platform for your shopping needs. We look forward to serving you with the utmost dedication and providing you with a secure and enjoyable shopping experience. Happy shopping!</p>
                        </div>
                        <div className='image'><img src='/images/other/feedback.jpg' /></div>
                    </div>
                </div>
            </Content>

        </div>
    )
}

export default About