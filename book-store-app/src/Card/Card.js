import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, image, title, price }) => {
  return (
    <div className="card">
      <Link to={`/book/${id}`}>
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h4>{title}</h4>
          <p>${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;