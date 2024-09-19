import React, { useState } from 'react';
// import Card from '../Card/Card.js'; 
import './Products.css'; 
import { Link } from 'react-router-dom';


//Dummy data
const dummyBooks = [
  {
    id: 1,
    name: 'The Great Gatsby',
    price: '10.99',
    imagePath: 'https://via.placeholder.com/200',
    description: 'A novel about the American dream, wealth, and societal expectations set in the 1920s.'
  },
  {
    id: 2,
    name: '1984',
    price: '8.99',
    imagePath: 'https://via.placeholder.com/200',
    description: 'A dystopian novel exploring themes of totalitarianism, surveillance, and control.'
  },
  {
    id: 3,
    name: 'To Kill a Mockingbird',
    price: '12.50',
    imagePath: 'https://via.placeholder.com/200',
    description: 'A classic novel that addresses serious issues such as racial inequality and moral growth.'
  },
  {
    id: 4,
    name: 'Pride and Prejudice',
    price: '9.99',
    imagePath: 'https://via.placeholder.com/200',
    description: 'A romantic novel that delves into the issues of class, marriage, and social standing.'
  },
  {
    id: 5,
    name: 'The Catcher in the Rye',
    price: '11.49',
    imagePath: 'https://via.placeholder.com/200',
    description: 'A story about teenage rebellion and alienation, narrated by the cynical Holden Caulfield.'
  },
  {
    id: 6,
    name: 'The Hobbit',
    price: '14.99',
    imagePath: 'https://via.placeholder.com/200',
    description: 'A fantasy adventure that follows Bilbo Baggins on a journey to reclaim a lost treasure.'
  },
  {
    id: 7,
    name: 'Moby-Dick',
    price: '13.75',
    imagePath: 'https://via.placeholder.com/200',
    description: 'An epic tale of obsession and revenge, centered around the pursuit of the white whale, Moby Dick.'
  },
  {
    id: 8,
    name: 'War and Peace',
    price: '18.50',
    imagePath: 'https://via.placeholder.com/200',
    description: 'A historical novel that explores the lives of several families during the Napoleonic Wars.'
  },
  {
    id: 9,
    name: 'The Odyssey',
    price: '10.75',
    imagePath: 'https://via.placeholder.com/200',
    description: 'An ancient Greek epic poem that chronicles the adventures of Odysseus as he journeys home.'
  },
  {
    id: 10,
    name: 'Crime and Punishment',
    price: '12.00',
    imagePath: 'https://via.placeholder.com/200',
    description: 'A psychological novel that examines the moral dilemmas faced by a man who commits murder.'
  },
];


function Products() {
  const [books] = useState(dummyBooks);

  return (
    <div className="products-page">
      <h1>Products</h1>
{/*       <img className="boy-reading" 
      src="/assets/A_cartoony_2D_illustration_of_a_person_reading_a_book__matching_the_same_clean_and_playful_style_as_previous_assets._The_person_is_seated_comfortably_-removebg-preview.png"
      alt="boy reading"/>
      <img className='book-img1'
      src='/assets/The_book_has_a_simple__flat_design_with_clear_lines__minimal_details__and_a_blue_co-removebg-preview.png'
      alt="book"/> */}
      <div className="grid-container">
      <div className="book-list">
        {books.map(book => (
          <Link to={`/book/${book.id}`} key={book.id} className="book-item-link">  {/* Wrap book item in Link */}
            <div className="book-item">
              <img src={book.imagePath} alt={book.name} className="book-image" />
              <div className="book-details">
                <h4 className="book-title">{book.name}</h4>
                {/* <p className="book-description">{book.description}</p> */}
                <p className="book-price">${book.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Products;
