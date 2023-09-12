import React from 'react';
import './StarRating.css';

const StarRating = ({ value }) => {
 
  const roundedValue = Math.round(value * 2) / 2;

  const starWidth = `${(roundedValue / 5) * 100}%`;

  return (
    <div className="star-container">
      <div className="star-value" style={{ width: starWidth }}>
        ★★★★★
      </div>
    </div>
  );
};

export default StarRating;
