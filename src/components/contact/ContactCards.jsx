import React from 'react'
import Contact from './Contact' 
import styles from './ContactCard.module.css';
const ContactCards = () => {
    const contactData = [
        {
            image : '/src/assets/dubai.jpg',
            name : "Arslan",
            number : "03441895040",
            email : "2000arslan03@gmail.com",
        },
        {
            image : '/src/assets/dubai.jpg',
            name : "Arslan",
            number : "03441895040",
            email : "arslankhan24@gmail.com",
        }, 
        {
            image : '/src/assets/dubai.jpg',
            name : "Arslan",
            number : "03441895040",
            email : "coronakk27@gmail.com",
        }
    ]

    
  return (
    < div className={styles.cardsHolder}>
    {
        contactData.map((item,index)=> 
        {
           return( <Contact 
                key={index}
                image={item.image}
                name={item.name}
                number={item.number}
                email={item.email}
                /> )

        })
    }
    
     </div>
  )
}

export default ContactCards