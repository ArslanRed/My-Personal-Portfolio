import React, { useState } from 'react';
import './ContactForm.css';
import MovingCard from '../Cards/MovingCard';
const ContactForm = () => {
 

  return (
    <section>
             <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>Feel free to reach out for collaborations, projects, or just a quick hello!</p>
          
        </div>
      <div className='formData'>
      <MovingCard/>
      </div>
      

    </section>
  );
};

export default ContactForm;
