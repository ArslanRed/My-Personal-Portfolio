import React, { useState,useRef } from 'react'
import { BsGlobe ,BsGeoAltFill  } from 'react-icons/bs';
import Article from '../article/Article.jsx'
import TravelForm from './Travelform.jsx'; 
import './TravelJournal.css'
import './TravelData.js'
import data from  './TravelData.js'
import Button from '../button/Button.jsx'
export const TravelJournal = () => {
  const mainRef = useRef(null);

  const [newEntry, setNewEntry] = useState (
    {
      image: '',
      title: '',
      link: '',
      country: '',
      date: '',
      description: ''
    }
    
  )
   const [allEntries, setAllEntries] = useState(data); 
  const handleInputs=(e)=> {
      const {name,value} = e.target;
      setNewEntry(prev => ({...prev, [name]: value}))
    }

    const [display,setDisplay] = useState('none')
      const [newArticle, setNewArticle]= useState(true)
    const showForm = () => {
      if (display.trim() ==='none')
       { 
        setDisplay('flex')
        setNewArticle(false)
      } 
    }
        const handleSubmit = () => {
          const { image, title, link, country, date, description } = newEntry;

          if (
            !image.trim() ||
            !title.trim() ||
            !link.trim() ||
            !country.trim() ||
            !date.trim() ||
            !description.trim()
          ) {
            alert("Please fill in all fields before submitting.");
            return;
          }

        setAllEntries((prev) => [newEntry, ...prev]);
        setNewEntry({
          image: '',
          title: '',
          link: '',
          country: '',
          date: '',
          description: ''
        });
        setNewArticle(true);
        setDisplay('none');

      // 👇 Smooth scroll to Article
      mainRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    // const handeArticle = () => {
    //   setNewArticle(prev => !newArticle)
    // }
  return (
    <div className='parent'>
    {newArticle && <div className='main-container' ref={mainRef}>

        <div className='travel-header'>
        <BsGlobe size={24} color="beige"/>
        <h2>  My Travel Journal</h2>
        </div>
        {allEntries.map((entry , index) => {
         return <Article key={index} 
         {...entry} 
         
         //{...givenData}  this or all of the bellow both are the same   
              // image = {givenData.image}
              // country = {givenData.country}
              // link = {givenData.link}
              // title = {givenData.title}
              // date = {givenData.date}
              // description = {givenData.description}  
          />
          
        })}
        
        <Button white onClick={showForm}>
          Add New Article
        </Button>
        
         </div> }
        {!newArticle && (
        <TravelForm
          newEntry={newEntry}
          handleInputs={handleInputs}
          handleSubmit={handleSubmit}
        />
      )}

    
    <hr/>
    </div>
  )
}
export default TravelJournal;

