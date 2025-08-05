import React, { useState } from 'react';
import './ContactForm.css';
import MovingCard from '../Cards/MovingCard';
const ContactForm = () => {
 

  return (
    <section>
             <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            I believe great things happen through collaboration and communication. Whether you’re interested in discussing a potential project, exploring ideas, or simply want to share feedback, I’m always open to meaningful conversations.
            Feel free to reach out for collaborations, projects, or just a quick hello!</p>
          
        </div>
      <div className='formData'>
      <MovingCard/>
      </div>
      <div className="quote-card">
      <p className="quote-text">The most important thing in communication is hearing what isn't said.</p>
      <p className="quote-author">Peter Drucker</p>
    </div>
      

    </section>
  );
};

export default ContactForm;
