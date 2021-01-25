import React, { useState } from 'react';

/* Email */
import { send } from 'emailjs-com';

/* Validations */
import { isEmailValid } from '../../../utils/validations';

/* Constants */
import {
  SERVICE_ID,
  TEMPLATE_ID,
  USER_ID
} from '../../../utils/constants';

/* Styles */
import './ContactForm.css';

export default props => {
  const { data } = props;


  /* For Form */
  const [ formData, setFormData ] = useState(initialFormValue());
  const [ validFields, setValidFields ] = useState(initialValidFields());
  const [ inputClasses, setInputClasses ] = useState(initialFormValue());

  /* For form-button */
  const [ buttonDisabled, setButtonDisabled ] = useState(true);
  const [ loadOperation, setLoadOperation ] = useState(null);

  const onChangeTheForm = async e => {
    setFormData({
      ...formData,
      [ e.target.name ]: e.target.value
    });

    let validCount = 0;
    const data = Object.keys(validFields);
    data.map(key => {
      let inputClass = 'contact-incorrect-input';
      if(validFields[`${key}`]){
        ++ validCount;
        inputClass = 'contact-correct-input';
      }
      inputClasses[`${key}`] = inputClass;
    });
    setButtonDisabled(true);
    validCount === data.length && setButtonDisabled(false);
  }

  const onSubmit = async e => {
    e.preventDefault();
    setButtonDisabled(true);
    setLoadOperation(
      <div className="active-spinner"/>
    );
    try{
      await send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        USER_ID
      );
      setLoadOperation(<Checkmark/>);
      setTimeout(() => {
        setFormData(initialFormValue());
        setValidFields(initialValidFields());
        setInputClasses(initialFormValue());
      }, 2100);
    }catch(err){
      alert(`Error ${err.text}`);
    }

    /* Reset */
    

    /* Reset with timeout */
    setTimeout(() => {
      setLoadOperation(null);
    }, 2000);
  }
  
  return (
    <form
      onChange={ onChangeTheForm }
      onSubmit={ onSubmit }
      className="contact-form"
    >
      <div className="contact-form-group">
        <div className="contact-form-label flex-container">
          <label
            htmlFor="names"
          >
            { data.names.label }
          </label>
          <input
            id="names"
            autoFocus
            name="names"
            placeholder={ data.names.placeholder }
            value={ formData.names }
            className={ inputClasses.names }
            onChange={ e => {
              const formNames = e.currentTarget.value;
              if(formNames.trim() && formNames.trim().length < 50){
                validFields.names = true;
                inputClasses.names = 'contact-correct-input';
              }else{
                validFields.names = false;
                inputClasses.names = 'contact-incorrect-input';
              }
            } }
          />
        </div>
        <div className="contact-form-label flex-container">
          <label
            htmlFor="email"
          >
            { data.email.label }
          </label>
          <input
            id="email"
            name="email"
            placeholder={ data.email.placeholder }
            value={ formData.email }
            className={ inputClasses.email }
            onChange={ e => {
              const formEmail = e.currentTarget.value;
              if(isEmailValid(formEmail)){
                validFields.email = true;
                inputClasses.email = 'contact-correct-input';
              }else{
                validFields.email = false;
                inputClasses.email = 'contact-incorrect-input';
              }
            } }
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
          id="subject"
          name="subject"
          placeholder={ data.subject.placeholder }
          value={ formData.subject }
          className={ inputClasses.subject }
          onChange={ e => {
            const formSubject = e.currentTarget.value;
            if(formSubject.trim() && formSubject.trim().length < 50){
              validFields.subject = true;
              inputClasses.subject = 'contact-correct-input';
            }else{
              validFields.subject = false;
              inputClasses.subject = 'contact-incorrect-input';
            }
          } }
        />
      </div>
      <div className="contact-form-label flex-container">
        <label
          htmlFor="message"
        >
          { data.message.label }
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={ data.message.placeholder }
          value={ formData.message }
          className={ inputClasses.message }
          onChange={ e => {
            const formMessage = e.currentTarget.value;
            if(formMessage.trim() && formMessage.trim().length < 600){
              validFields.message = true;
              inputClasses.message = 'contact-correct-input';
            }else{
              validFields.message = false;
              inputClasses.message = 'contact-incorrect-input';
            }
          } }
        />
      </div>
      <button
        disabled={ buttonDisabled }
        className={ `contact-form-button-disabled flex-container ${!buttonDisabled && 'contact-form-button-capable'}` }
        type="submit"
      >
        {
          loadOperation
            ? loadOperation
            : data.button
        }
      </button>
    </form>
  );
}

const initialFormValue = () => {
  return {
    names: '',
    email: '',
    subject: '',
    message: ''
  };
}

const initialValidFields = () => {
  return {
    names: false,
    email: false,
    subject: false,
    message: false
  };
}
const Checkmark = () => {
  return (
    <svg className="checkmark" viewBox="0 0 52 52">
      <path className="checkmark-check" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>
  )
}
