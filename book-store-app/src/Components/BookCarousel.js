import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//import './swiper/swiper-bundle.css'; 
import './BookCarousel.css';
// import 'swiper/css/navigation'; Removed side buttons, they are not working properly.
import 'swiper/css/pagination';
import 'swiper/css'



function BookCarousel({ books }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {books.map((book) => (
        <SwiperSlide key={book.id}>
          <div className="book-card">
            <img src={book.imagePath} alt={book.name} className="book-image" />
            <div className="book-info">
              <h4>{book.name}</h4>
              <p>${book.price}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BookCarousel;
