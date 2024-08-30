import React, { useEffect, useState } from 'react';
import Card from '../Card/Card.js'; 
import './Products.css'; 

function Products() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the books from the API
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="card-container">
        {books.map(book => (
          <Card
            key={book.id}
            image={book.imagePath}
            title={book.name}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
