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
        <p>
          { data.information }
          <a
            href="https://api.whatsapp.com/send?phone=51928518774&text=Hello%20Derry!!"
            target="_blank"
          >
            WhatsApp
          </a>
        </p>
      </section>
      <ContactForm
        data={ data.form }
      />
    </main>
  );
}