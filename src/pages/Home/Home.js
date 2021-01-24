import React from 'react';
import { APP_NAME } from '../../utils/constants';
import BannerImage from '../../assets/webp/banner.webp';
import './Home.css';

export default props => {
  const { data } = props;
  return (
    <main className="home page flex-container">
      <section className="left-home flex-container">
        <h1>{ data.title }</h1>
        <p>{ data.description }</p>
      </section>
      <section className="right-home flex-container">
        <img
          alt={ `${APP_NAME} banner` }
          src={ BannerImage }
          width="280"
          height="280"
        />
      </section>
    </main>
  );
}