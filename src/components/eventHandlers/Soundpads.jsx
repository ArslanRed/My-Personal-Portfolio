import React, { use, useState } from 'react'


const  Soundpads=({pads ,changeOpacity})=>{

 return(
    <div>
    {pads.map(item=>(
      <button  onClick={ ()=>{changeOpacity(item.id)} }
      key={item.id}
      style=
      {{
        color:'black',
        fontWeight:'bold',
        backgroundColor: item.color, 
        padding:'18px', 
        margin:'20px', 
        borderRadius:'10px', 
        opacity: item.on? '1':'0.1',
        cursor:'pointer'
      }} 
        >
            Pad {item.id}</button>
    ))}
   
    </div>
 )
}
export default Soundpads