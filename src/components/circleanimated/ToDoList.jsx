import React, { useState } from 'react'
import './ToDoList.css'
const ToDoList = () => {
    const [tasks , setTasks] = useState(["Pick a FLower" , "Throw a Stone" ,"Pay charity"])
    const [newTask , setNewTask] = useState("")

    const handleInput = (e) => {
        setNewTask(e.target.value)
    }
    const addTask = () => {
        if(newTask.trim() !== "")
        {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    const deleteTask = (index) => {
        const updatedTask = tasks.filter((_, i)=> i!==index);
        setTasks(updatedTask);
    }
     const moveUp = (index) => {
        if(index>0){
            const updatedTask = [...tasks];
            [  updatedTask[index],updatedTask[index - 1] ]=   [  updatedTask[index - 1],updatedTask[index] ];
            setTasks(updatedTask)
        }
    }
     const moveDown = (index) => {
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [  updatedTask[index],updatedTask[index + 1] ]=   [  updatedTask[index + 1] ,updatedTask[index] ];
            setTasks(updatedTask)
        }
    }


  return (
    <div className='list-container'>
        
            <h1 className='myHeading'>To-Do-List</h1>
            <div className='flexRow'>
            <input className='myinput' type='text'
            value={newTask}
            onChange={handleInput}
            placeholder='Enter a Task' />

            <button className='add-button' onClick={addTask}> Add</button>
        </div>
            <ol className='orderedList'>
            {tasks.map((task, index) =>
                (<li key={index}
                    className='listItems'>
                    <span className='taskTexts'>{task}</span>
                    <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>

                    <button className='move-button' onClick={()=>moveUp(index)}>/\</button>

                    <button className='move-button' onClick={()=>moveDown(index)}>V</button>
                        </li>
                ))}
            </ol>
    </div>
  )
}

export default ToDoList