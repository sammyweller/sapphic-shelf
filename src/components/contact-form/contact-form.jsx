import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact-form.css'; 

function ContactForm() {
  const [state, handleSubmit] = useForm("mjkbayjn");

  return (
    <div className="contact-form-section">
      <h1>
        Let's chat!
      </h1>
      <p>
        Want us to add your favorite book? Saw something on our site that needs correcting? Just want to chat? Reach out today and we'll get back to you as soon as we can.
      </p>

      {/* Conditional Success Message */}
      {state.succeeded && (
        <p className="success-message">Thanks for reaching out! We'll be in touch shortly.</p>
      )}

      {!state.succeeded && (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              required
            />
          </div>
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
            />
          </div>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
