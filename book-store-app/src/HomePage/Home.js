import './Home.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import BookCarousel from '../Components/BookCarousel.js';
// import React, { useEffect, useState } from 'react';

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
];


const CustomButton = styled(Button)({
  color: 'black', 
  border: '2px solid black', 
  '&:hover': {
    border: '2px solid black', 
  },

});

function Home() {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   // Fetch the books from the API
  //   fetch('http://localhost:3000/books')
  //     .then((response) => response.json())
  //     .then((data) => setBooks(data))
  //     .catch((error) => console.error('Error fetching books:', error));
  // }, []);
  return (
    <div>
      <div className="home">
        <div className="home-text">
          <h1>Explore Our Collection!</h1>
          <p>From timeless classics to contemporary bestsellers, our carefully curated collection spans every genre. Dive into the pages of your favorite books or discover something new today.</p>
        </div>
        <img className='book-image'
          src="/assets/bookscoffee-removebg.png"
          alt="Book Stack"
        />
      </div>
      <div className="featured-books">
        <h2 className='featured-books-header'>Featured Books</h2>
        {/* <BookCarousel books={books} /> */}
        <BookCarousel books={dummyBooks} />
      </div>
      <div className="products">
          <Link to="/products">
            <CustomButton variant="outlined">Shop Now</CustomButton>
          </Link>
        </div>
    </div>
  );
}

export default Home;
