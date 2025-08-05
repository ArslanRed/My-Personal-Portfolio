import React, {useState} from 'react'
import './ColorPicker.css'
const ColorPicker = () => {
    const [color, setColor] =  useState("#FFFFFF")
    const updateColor = (e) => {
        setColor(e.target.value)
    }
    
  return (
        <div className='color-picker-container'>
            <h1 className='head'>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}} >
            <p> Color : {color}</p>
            </div>
            <label className='label-color'> Pick a Color</label>
            <input type="color" value={color} onChange={updateColor}/>

        </div>
  )
}


export default ColorPicker