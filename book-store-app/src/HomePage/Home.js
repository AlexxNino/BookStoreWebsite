import './Home.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import BookCarousel from '../Components/BookCarousel.js';

const dummyBooks = [
  {
    id: 1,
    name: 'The Great Gatsby',
    price: '10.99',
    imagePath: 'https://via.placeholder.com/150',
    description: 'A novel about the American dream, wealth, and societal expectations set in the 1920s.'
  },
  {
    id: 2,
    name: '1984',
    price: '8.99',
    imagePath: 'https://via.placeholder.com/150',
    description: 'A dystopian novel exploring themes of totalitarianism, surveillance, and control.'
  },
  {
    id: 3,
    name: 'To Kill a Mockingbird',
    price: '12.50',
    imagePath: 'https://via.placeholder.com/150',
    description: 'A classic novel that addresses serious issues such as racial inequality and moral growth.'
  },
  {
    id: 4,
    name: 'Pride and Prejudice',
    price: '9.99',
    imagePath: 'https://via.placeholder.com/150',
    description: 'A romantic novel that delves into the issues of class, marriage, and social standing.'
  },
  {
    id: 5,
    name: 'The Catcher in the Rye',
    price: '11.49',
    imagePath: 'https://via.placeholder.com/150',
    description: 'A story about teenage rebellion and alienation, narrated by the cynical Holden Caulfield.'
  },
  {
    id: 6,
    name: 'The Hobbit',
    price: '14.99',
    imagePath: 'https://via.placeholder.com/150',
    description: 'A fantasy adventure that follows Bilbo Baggins on a journey to reclaim a lost treasure.'
  },
  {
    id: 7,
    name: 'Moby-Dick',
    price: '13.75',
    imagePath: 'https://via.placeholder.com/150',
    description: 'An epic tale of obsession and revenge, centered around the pursuit of the white whale, Moby Dick.'
  },
  {
    id: 8,
    name: 'War and Peace',
    price: '18.50',
    imagePath: 'https://via.placeholder.com/150',
    description: 'A historical novel that explores the lives of several families during the Napoleonic Wars.'
  },
  {
    id: 9,
    name: 'The Odyssey',
    price: '10.75',
    imagePath: 'https://via.placeholder.com/150',
    description: 'An ancient Greek epic poem that chronicles the adventures of Odysseus as he journeys home.'
  },
  {
    id: 10,
    name: 'Crime and Punishment',
    price: '12.00',
    imagePath: 'https://via.placeholder.com/150',
    description: 'A psychological novel that examines the moral dilemmas faced by a man who commits murder.'
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
      <div className="products-button">
          <Link to="/products">
            <CustomButton variant="outlined">Shop Now</CustomButton>
          </Link>
        </div>
    </div>
  );
}

export default Home;
