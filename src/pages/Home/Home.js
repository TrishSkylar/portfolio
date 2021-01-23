import React from 'react';
import './Home.css';

export default props => {
  const { data } = props;
  console.log(data);
  return (
    <main className="home">
      <section className="left-home">
      </section>
      <section className="right-home">
      </section>
    </main>
  );
}