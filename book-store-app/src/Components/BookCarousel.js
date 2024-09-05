import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
//import './swiper/swiper-bundle.css'; 
import './BookCarousel.css';
// import 'swiper/css/navigation'; Removed side buttons, they are not working properly.
import 'swiper/css/pagination';
import 'swiper/css'



function BookCarousel({ books }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {books.map((book) => (
        <SwiperSlide key={book.id}>
          <Link to={`/book/${book.id}`}>
            <div className="book-card1">
              <img src={book.imagePath} alt={book.name} className="book-image" />
              <div className="book-info">
                <h4>{book.name}</h4>
                <p>${book.price}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BookCarousel;
