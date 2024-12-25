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

        <label className="form-label">Gender</label>
        <div className=''>
          <input type="radio"
            name="gender"
            id="Male"
            value="Male"
            onChange={handleChange}
            checked={values.gender === "Male"}
          />{" "}
          <label htmlFor="male" className="me-3">Male</label>
          <input
            type="radio"
            name="gender"
            id="Female"
            value="Female"
            onClick={handleChange}
            checked={values.gender === "Female"}
          />{" "}
          <label htmlFor="female">Female</label>
          {errors.gender && <p id="errors">{errors.gender}</p>}
        </div>

        <label className="form-label mt-2">Language</label>
        <div className=''>
          <input type="radio"
            name="language"
            id="English"
            value="English"
            onChange={handleChange}
            checked={values.language === "English"}
          />{" "}
          <label htmlFor="English" className="me-3">English</label>
          <input
            type="radio"
            name="language"
            id="Tamil"
            value="Tamil"
            onClick={handleChange}
            checked={values.language === "Tamil"}
          />{" "}
          <label htmlFor="Tamil" className='me-3'>Tamil</label>
          <input
            type="radio"
            name="language"
            id="others"
            value="others"
            onClick={handleChange}
            checked={values.language === "others"}
          />{" "}
          <label htmlFor="female ">others</label>
          {errors.language && <p id="errors">{errors.language}</p>}
        </div>

        <div className="form-inputs mt-2">
          <input
            type="number"
            onChange={handleChange}
            value={values.mbl}
            name="mbl"
            className="form-input"
            placeholder="User Mobile No"
          />
          {errors.mbl && <p id="errors">{errors.mbl}</p>}
        </div>

        <div className="form-inputs">
          <input
            type="address"
            onChange={handleChange}
            value={values.address}
            name="address"
            className="form-input"
            placeholder="User address"
          />
          {errors.address && <p id="errors">{errors.address}</p>}
        </div>

        <div className="form-inputs">
          <input
            type="text"
            onChange={handleChange}
            value={values.collage}
            name="collage"
            className="form-input"
            placeholder="your collage"
          />
          {errors.collage && <p id="errors">{errors.collage}</p>}
        </div>

        <div className="form-inputs">
          <input
            type="text"
            onChange={handleChange}
            value={values.qualification}
            name="qualification"
            className="form-input"
            placeholder="your highest qualification"
          />
          {errors.qualification && <p id="errors">{errors.qualification}</p>}
        </div>

        
        <label className="form-label">Current Status</label>
        <div className=''>
          <input type="radio"
            name="currentstatus"
            id="employee"
            value="employee"
            onChange={handleChange}
            checked={values.currentstatus === "employee"}
          />{" "}
          <label htmlFor="male" className="me-3">Employee</label>
          <input
            type="radio"
            name="currentstatus"
            id="unemployee"
            value="unemployee"
            onClick={handleChange}
            checked={values.currentstatus === "unemployee"}
          />{" "}
          <label htmlFor="unemployee">Un Employee</label>
          {errors.currentstatus && <p id="errors">{errors.currentstatus}</p>}
        </div>

        <div className="form-inputs mt-2">
          <textarea
            onChange={handleChange}
            value={values.feedback}
            name="feedback"
            className="form-input"
            placeholder="enter geniune Feedback our site"
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
