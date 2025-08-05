import React, { useState } from 'react';
import './GlassMorph.css';

const Card = ({ img, title, text, buttonText, variant }) => {
  if (variant === 'card-Color') {
    return (
      <div className="card-Color cardWrapper">
        <svg className="glow-Spark" viewBox="0 0 250 340" preserveAspectRatio="none">
          <path d="M5 5 H245 V335 H5 Z" className="glow-path1" />
          <circle r="6" className="sparkNow" />
        </svg>
        <div className="card">
          <img src={img} alt={title} />
          <h3>{title}</h3>
          <p>{text}</p>
          <button>{buttonText}</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`cardWrapper ${variant || ''}`}>
      <div className={variant === 'card2' ? 'card2' : 'card'}>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

const GlassMorph = () => {
  const [isChange, setIsChange] = useState(true);
  const toggleCards = () => setIsChange(prev => !prev);

  const cardsSet1 = [
    {
      img: '/laptop.avif',
      title: 'React',
      text: "I'm a Front-End Developer with solid experience in React, building responsive, component-based web applications.",
      buttonText: 'Learn More',
      variant: 'cardGlow'
    },
    {
      img: '/react.svg',
      title: 'Border Rotate',
      text: 'Shorter description.',
      buttonText: 'Read More',
      variant: 'rotateBorder'
    },
    {
      img: '/dubai.jpg',
      title: 'Glow and Flicker',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus commodi inventore nam?',
      buttonText: 'Submit',
      variant: 'CardWeld'
    },
    {
      img: '/laptop.avif',
      title: 'Chasing Sparkle',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus commodi inventore nam?',
      buttonText: 'Buy',
      variant: 'card-Color' // this will now properly sparkle
    }
  ];

  const cardsSet2 = Array.from({ length: 4 }).map((_, index) => ({
    img: '/venice.jpg',
    title: 'Changed',
    text: 'You pressed the button to change us..!',
    buttonText: 'Explore',
    variant: 'card2'
  }));

  const activeCards = isChange ? cardsSet1 : cardsSet2;

  return (
    <>
      <div className='MainBody'>
        <div className='cardContainer'>
          {activeCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <button className='ChangeCards' onClick={toggleCards}>Change Cards</button>
      <br />
    </>
  );
};

export default GlassMorph;
