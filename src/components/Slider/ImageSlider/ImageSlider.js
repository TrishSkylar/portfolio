import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

export default props => {
  const {
    identifier,
    images
  } = props;

  const [ currentSlide, setCurrentSlide ] = useState(0);
  const [ imageSrc, setImageSrc ] = useState(images[currentSlide]);

  const nextSlide = () => setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);

  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);

  const changeSlide = i => setCurrentSlide(i);

  useEffect(() => {
    setImageSrc(images[currentSlide]);
  }, [ currentSlide ]);

  return (
    <div className="image-slider-container page flex-container">
      <div className="image-slider-controller flex-container">
        <span
          onClick={ () => prevSlide() }
          className="icon-arrow-right"
        />
        {
          images.map((_, index) => (
            <span
              onClick={ () => changeSlide(index) }
              key={ index }
              className={ `image-slider-number ${currentSlide === index && 'image-slider-controller-select'}` }
            >
              { index + 1 }
            </span>
          ))
        }
        <span
          onClick={ () => nextSlide() }
          className="icon-arrow-right"
        />
      </div>
      <img
        className="image-slide flex-container"
        src={ imageSrc }
        alt={ `${identifier}` }
      />
    </div>
  );
}