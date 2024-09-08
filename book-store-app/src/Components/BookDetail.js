import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './BookDetail.css'

const CustomButton1 = styled(Button)({
  color: 'black', 
  border: '2px solid black', 
  '&:hover': {
    border: '2px solid black', 
  },
  width: '10%',
  padding: '10px 20px',
});

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find(book => book.id.toString() === id);

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className='body1'>
      <div className="book-detail1">
        <img className='book-image1' src={book.imagePath} alt={book.name} />
          <div className='book-info1'>
            <h1 className='book-title1'>{book.name}</h1>
            <p className='book-author1'>Author: {book.author}</p>
            <p className='Rating'>Rating: {book.rating}</p>
            <p className='book-desc1'>Description: {book.description}</p>
            <p className='book-price1'>Price: ${book.price}</p>
            <CustomButton1 className='book-stuff1' variant='outlined'>Add to Bag</CustomButton1>
        </div>
      </div>
        <div className='book-review1'>
        <h3>Reviews:</h3>
            <ul>
              {book.reviews.map((review, index) => (
                <li key={index}>
                  <strong>{review.reviewer}:</strong> {review.comment}
                </li>
              ))}
            </ul>
        </div>
    </div>
  );
};

export default BookDetail;