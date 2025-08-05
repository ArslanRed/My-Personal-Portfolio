// TravelForm.jsx
import React from 'react';

const TravelForm = ({ newEntry, handleInputs, handleSubmit }) => {
  return (
    <div className='wrap-form'>
      <label htmlFor='image'>Image Link</label>
      <input
        id='image'
        name='image'
        placeholder='Give image link'
        value={newEntry.image}
        onChange={handleInputs}
        alt={newEntry.title}
      />

      <label htmlFor='title'>Title</label>
      <input
        id='title'
        name='title'
        placeholder='Enter Title'
        value={newEntry.title}
        onChange={handleInputs}
      />

      <label htmlFor='link'>Link</label>
      <input
        id='link'
        name='link'
        placeholder='Type link'
        value={newEntry.link}
        onChange={handleInputs}
      />

      <label htmlFor='country'>Country</label>
      <input
        id='country'
        name='country'
        placeholder='Enter country'
        value={newEntry.country}
        onChange={handleInputs}
      />

      <label htmlFor='date'>Date</label>
      <input
        id='date'
        name='date'
        placeholder='Enter date'
        value={newEntry.date}
        onChange={handleInputs}
      />

      <label htmlFor='description'>Description</label>
      <textarea
        id='description'
        name='description'
        placeholder='Write description'
        value={newEntry.description}
        onChange={handleInputs}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TravelForm;
