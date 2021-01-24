import React, { useState } from 'react';
import './ImageSlider.css';

export default props => {
  const {
    identifier,
    images
  } = props;

  const [ currentSlide, setCurrentSlide ] = useState(0);

  const nextSlide = () => setCurrentSlide(
    currentSlide === images.length - 1 ? 0 : currentSlide + 1
  );

  const prevSlide = () => setCurrentSlide(
    currentSlide === 0 ? images.length - 1 : currentSlide - 1
  );

  return (
    <div className="image-slider-container flex-container">
      <span
        onClick={ () => prevSlide() }
        className="image-slider-arrow image-slider-left-arrow icon-arrow-right"
      />
      <span
        onClick={ () => nextSlide() }
        className="image-slider-arrow image-slider-right-arrow icon-arrow-right"
      />
      <ul className="image-slider flex-container">
        { images.map((src, index) => (
          <li
            key={ index }
            className={ `slide ${currentSlide === index && 'slide-active'}` }
          >
            <img
              height="55vh"
              src={ src }
              alt={ `${identifier}` }
            />
          </li>
        )) }
      </ul>
    </div>
  );
}