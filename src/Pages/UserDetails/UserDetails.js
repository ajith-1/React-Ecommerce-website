import React, { useState } from 'react';
import './UserDetails.css';
import Content from '../Content/Content';

const UserDetails = ({ onNext }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <Content>
    <div className="user-container">
        <div className='user-content'>
          <h3>Address</h3>
          <form className="user-form">
            <div className='input-section'>
              <div className='input-box'>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={userInfo.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className='input-box'>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='input-section'>
              <div className='input-box'>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                />
              </div>
              <div className='input-box'>
                <label htmlFor="email">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='input-section'>
              <div className='input-box'>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={userInfo.city}
                  onChange={handleChange}
                />
              </div>
              <div className='input-box'>
                <label htmlFor="zipCode">Pin Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={userInfo.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='input-box'>
              <label htmlFor="address">Address</label>
              <textarea
              rows={4}
              cols={30}
                id="address"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
              />
            </div>
            <div className='input-box'>
              <button className="next-btn" onClick={handleNext}>Next</button>
            </div>
          </form>
        </div>
    </div>
      </Content>
  );
};

export default UserDetails;
