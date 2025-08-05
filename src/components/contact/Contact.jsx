import React from 'react'
import './Contact.css'
import { MdPerson, MdPhone, MdEmail } from 'react-icons/md';

const Contact = ( {image , name , number , email}) => {
  return (
    <div className='contact-container'>
      <div className='card-each'>
      <img src={image} />
      <h3>
        <MdPerson/> {name}
      </h3>
      <p><MdPhone/> {number}</p>
      <p className='mail'><MdEmail/>{email}</p>
    </div>
    </div>
  )
}

export default Contact