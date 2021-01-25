import React from 'react';
import ImageSlider from '../Slider/ImageSlider/ImageSlider';
import './Project.css';

export default props => {
  const {
    data,
    metadata,
    openBasicModal
  } = props;

  return (
    <section className="project">
      <p className="project-title">{ data.title }</p>
      <p className="project-description">{ data.description }</p>
      <img
        src={ data.images[0] }
        alt={ `Main image of ${data.title}` }
        width="350px"
      />
      <div className="project-buttons-container">
        <p
          className="project-button flex-container"
          onClick={ () => openBasicModal(
            <ImageSlider
              images={ data.images }
              identifier={ data.title }
            />
          ) }
        >
          <span className="icon-newspaper"/>
          { metadata.images }
        </p>
        <a
          className="project-button flex-container"
          target="_blank"
          href={ data.url }
        >
          <span className="icon-arrow-right"/>
          { metadata.link }
        </a>
      </div>
    </section>
  );
}