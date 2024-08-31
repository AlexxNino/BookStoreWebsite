import React, { useState } from 'react';
import Card from '../Card/Card.js'; 
import './Products.css'; 

const dummyBooks = [
  {
    id: 1,
    name: 'The Great Gatsby',
    price: '10.99',
    imagePath: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: '1984',
    price: '8.99',
    imagePath: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'To Kill a Mockingbird',
    price: '12.50',
    imagePath: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Pride and Prejudice',
    price: '9.99',
    imagePath: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'The Catcher in the Rye',
    price: '11.49',
    imagePath: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'The Hobbit',
    price: '14.99',
    imagePath: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Moby-Dick',
    price: '13.75',
    imagePath: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'War and Peace',
    price: '18.50',
    imagePath: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'The Odyssey',
    price: '10.75',
    imagePath: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Crime and Punishment',
    price: '12.00',
    imagePath: 'https://via.placeholder.com/150',
  },
];
function Products() {
  // const [books, setBooks] = useState([]);
  const [books] = useState(dummyBooks);

  // useEffect(() => {
  //   // Fetch the books from the API
  //   fetch('http://localhost:3000/books')
  //     .then(response => response.json())
  //     .then(data => setBooks(data))
  //     .catch(error => console.error('Error fetching books:', error));
  // }, []);

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
