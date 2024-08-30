import React from 'react';
import './Card.css';

function Card({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default Card;
