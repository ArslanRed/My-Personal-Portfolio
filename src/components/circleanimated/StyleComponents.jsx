import React, {useRef,useEffect}from 'react'
import CircleButton from './CircleButton'
import GlassMorph from './GlassMorph'
import AnalogClock from './AnalogClock'
import DrumMachine from './Drummachine'
import Calculator from './Calculator'
import ToDoList from './ToDoList'
import HowItWorks from './HowItWorks'
import './stylecomponents.css'
import ErrorBoundary from '../Multiplepages/ErrorBoundary.jsx';
import ColorPicker from './ColorPicker.jsx'
 const StyleComponents = () => {
  return (
  <div>
     <ErrorBoundary>
        <ToDoList />
      </ErrorBoundary>

      <div 
      className='clockDiv'>
        <ErrorBoundary>
          <AnalogClock />
        </ErrorBoundary>
        <ErrorBoundary>
          <CircleButton />
        </ErrorBoundary>
        
      </div>

      <ErrorBoundary>
        <HowItWorks />
      </ErrorBoundary>

      <ErrorBoundary>
        <GlassMorph />
      </ErrorBoundary>

      <div className="style-wrapper">
        <ErrorBoundary>
          <DrumMachine />
        </ErrorBoundary>
        <ErrorBoundary>
          <ColorPicker />
        </ErrorBoundary>
        <ErrorBoundary>
          <Calculator />
        </ErrorBoundary>
      </div>
      </div>
    
  )
}

export default StyleComponents
