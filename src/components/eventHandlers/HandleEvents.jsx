import React, { useState } from 'react'
import './HandleEvents.css'
import Soundpads from './Soundpads'
import Form from './Form'

const HandleEvents = () => {
   const [pads, setPads]= useState([
        {
            id: 1,
            color:'blue',
            on:false
        },
        {
            id: 2,
            color:'red',
            on:false
        },
        {
            id: 3,
            color:'pink',
            on:false
        },
        {
            id: 4,
            color:'yellow',
            on:false
        },
          {
            id: 5,
            color:'brown',
            on:false
        },
          {
            id: 6,
            color:'white',
            on:false
        },
          {
            id: 7,
            color:'purple',
            on:false
        },
        {
            id: 8,
            color:'orange',
            on:false
        }
    ])
    const changeOpacity = (id)=> {
      setPads(prev => 
        prev.map(pad => pad.id===id? {...pad, on : !pad.on}: pad  )
      )
    }
   


  return (
    <>

   
    <Form/>
    <Soundpads pads={pads} changeOpacity={changeOpacity}/>
    </>
  );
  
};

       
    
export default HandleEvents