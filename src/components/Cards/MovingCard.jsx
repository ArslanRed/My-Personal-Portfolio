import React, { useState, useRef } from 'react';
import './MovingCard.css';

const MovingCard = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [flipClass, setFlipClass] = useState('');
  const [isInteracting, setIsInteracting] = useState(false);
  const boxRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (isInteracting || submittedData) return;

    const { x, y } = lastMousePos.current;
    const deltaX = e.clientX - x;
    const deltaY = e.clientY - y;

    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (absX < 3 && absY < 3) return;

    if (absY >= absX) {
      setFlipClass(deltaY > 0 ? 'flip-down' : 'flip-up');
    } else {
      setFlipClass(deltaX > 0 ? 'flip-right' : 'flip-left');
    }

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseLeave = () => {
    if (!isInteracting && !submittedData) {
      setFlipClass('');
    }
  };

  const handleFocus = () => {
    setIsInteracting(true);
    setFlipClass('');
  };

  const handleBlur = () => {
    setIsInteracting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) return;
    setSubmittedData(formData);
    setFlipClass('');
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmittedData(null);
    setFlipClass('');
  };

  return (
    <>
    
    
    <div
      className="flip-box"
      onMouseEnter={(e) => (lastMousePos.current = { x: e.clientX, y: e.clientY })}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={boxRef}
    >
      <div className={`flip-box-inner ${submittedData ? 'flip-none' : flipClass}`}>
        <div className="form-content">
          {!submittedData ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="nameInput">Name</label>
              <input
                type="text"
                id="nameInput"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />

              <label htmlFor="emailInput">Email</label>
              <input
                type="email"
                id="emailInput"
                name="email"
                placeholder="Your Email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />

              <label htmlFor="messageInput">Message</label>
              <input
                type="text"
                id="messageInput"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />

              <div className="button-group">
                <button type="submit" onFocus={handleFocus} onBlur={handleBlur}>
                  Send Message
                </button>
              </div>
            </form>
          ) : (
            <div className="submitted-info">
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Message:</strong> {submittedData.message}</p>
              <button type="button" onClick={handleReset}>
                Reset
              </button>
            </div>
          )}
          
        </div>
 
      </div>
      
    </div>
    
    </>
  );
};

export default MovingCard;
