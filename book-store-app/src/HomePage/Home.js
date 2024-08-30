import './Home.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';



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
      <div className="products">
          <Link to="/products">
            <CustomButton variant="outlined">View More</CustomButton>
          </Link>
        </div>
    </div>
  );
}

export default Home;
