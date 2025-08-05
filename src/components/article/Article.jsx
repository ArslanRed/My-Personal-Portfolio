import React from 'react'
import {BsGeoAltFill  } from 'react-icons/bs';
import './Article.css'
const Article = ({image, country, link, title, date, description }) => {
  
  return (
    <article className='entry'>
    
                <div className='main-img'>
                <img className='photo' src={image} alt='venice'/> 
                </div>
    
                <div className='info-container'>
                <BsGeoAltFill size={18}/>
                <span className='country'>&nbsp;{country},</span>
                <a href={link}> Go to link </a>
                <h2 className='entry-title'>{title}</h2>
                <p className='trip-dates'>{date} </p>
                <p className='entry-text'> {description}</p>
                </div>
               
            </article>
    
  )
}

export default Article