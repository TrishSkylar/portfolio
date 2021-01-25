import React from 'react';
import './ContactForm.css';

export default props => {
  const { data } = props;
  return (
    <form className="contact-form">
      <div className="contact-form-group">
        <div className="contact-form-label flex-container">
          <label
            htmlFor="names"
          >
            { data.names.label }
          </label>
          <input
            autoFocus
            name="names"
            placeholder={ data.names.placeholder }
          />
        </div>
        <div className="contact-form-label flex-container">
          <label
            htmlFor="email"
          >
            { data.email.label }
          </label>
          <input
            name="email"
            placeholder={ data.email.placeholder }
          />
        </div>
      </div>
      <div className="contact-form-label flex-container">
        <label
          htmlFor="subject"
        >
          { data.subject.label }
        </label>
        <input
          name="subject"
          placeholder={ data.subject.placeholder }
        />
      </div>
      <div className="contact-form-label flex-container">
        <label
          htmlFor="message"
        >
          { data.message.label }
        </label>
        <textarea
          name="message"
          placeholder={ data.message.placeholder }
        />
      </div>
      <button
        className="contact-form-button flex-container"
        type="submit"
      >
        { data.button }
      </button>
    </form>
  );
}