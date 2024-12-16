import React from 'react';
import Useform from '../Hooks/Useform';
import Validate from '../utils/Validate';
import emailjs from '@emailjs/browser';
import './UserForm.css';

const UserForm = () => {
  const { handleChange, values, handleSubmit, errors } = Useform(Validate);

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        'service_6ussqtc', // Service ID
        'template_fcpxk7t', // Template ID
        e.target, // Form element
        '4633qpd1OjS6VnGbz' // Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send email. Please try again.');
        }
      );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.keys(errors).length > 0;
    if (!hasErrors) {
      sendEmail(e);
      handleSubmit(e);
    } else {
      alert('Please fix the validation errors before submitting.');
    }
  };

  return (
    <section className="form-content">
      <form className="form" onSubmit={handleFormSubmit}>
        <h1>servey form</h1>
        <div className="form-inputs">
          <input
            type="text"
            onChange={handleChange}
            value={values.username}
            name="username"
            className="form-input"
            placeholder="User Name"
          />
          {errors.username && <p id="errors">{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <input
            type="email"
            onChange={handleChange}
            value={values.email}
            name="email"
            className="form-input"
            placeholder="User Email"
          />
          {errors.email && <p id="errors">{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <input
            type="number"
            onChange={handleChange}
            value={values.mbl}
            name="mbl"
            className="form-input"
            placeholder="User Mobile"
          />
          {errors.mbl && <p id="errors">{errors.mbl}</p>}
        </div>

        <div className="form-inputs">
          <textarea
            onChange={handleChange}
            value={values.feedback}
            name="feedback"
            className="form-input"
            placeholder="Type Your Feedback"
            cols={30}
            rows={5}
          />
          {errors.feedback && <p id="errors">{errors.feedback}</p>}
        </div>

        <div className="form-btn">
          <button type="submit" className="form-submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default UserForm;
