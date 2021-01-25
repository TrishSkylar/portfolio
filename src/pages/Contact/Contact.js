import React from 'react';

/* Component */
import ContactForm from '../../components/Forms/ContactForm';

/* Styles */
import './Contact.css';

export default props => {
  const { data } = props;
  return (
    <main className="contact page flex-container">
      <section className="contact-information">
        <h1>{ data.title }</h1>
        <p>{ data.information }</p>
      </section>
      <ContactForm
        data={ data.form }
      />
    </main>
  );
}