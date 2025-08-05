
import React, { useState } from 'react'
 const Form = () => {
      const signUp = (formData) => {
   
    // const email = formData.get("email")
    // const pass = formData.get("password")  
    // const desc = formData.get("description") 
    // const rad = formData.get('rad1') 
    // const check = formData.getAll('salary') 
    // const color = formData.get('favColor') 
    // console.log(email + " " + pass + " " + desc + " " + rad + " " + check +" "+ color
    // )
    // instead of this we can just 
    const data = Object.fromEntries(formData)
    const salary = formData.getAll('salary')
    const allData = {...data, salary}
    console.log(allData)
  } 

  const [isShown, setIsShown] = useState(false)

  const showMe = () => 
  {
    
    setIsShown(prevShown=> !isShown)
  }
  const [messages, setMessages] = useState(["ah","aa"])
  const funct =() => {
     return messages.length == 0? <h1> You have zero messages</h1>: <h1>you have {messages.length} messages</h1>
  }
  // const [pads, setPads]= useState(arr)
  // const dataGet = ()=> {
  //   return pads.map(pads=>(
  //     <button 
  //     style={{backgroundColor:'pink', padding:'18px', margin:'20px', borderRadius:'10px'}} key={pads.id}>Hello</button>
  //   ))
  // }
  return (
    <div>
      <div style={{
        margin: '10%', padding: '40px', border: '2px solid white',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', width: 'fit-content', backgroundColor: 'rgb(10,20,40)',
        borderRadius: '20px'
      }}>

        <form action={signUp} style={{ margin: '2%' }}>
          <label htmlFor="email">Email</label><br />
          <input type="text" id="email" placeholder="Enter email" name="email" required /><br />

          <label htmlFor="password">Password</label><br />
          <input type="password" id="password" placeholder="Enter Password" name="password" required /><br />

          <label htmlFor="description">Description</label><br />
          <textarea id="description" name="description" /><br />

          <fieldset style={{ display: 'flex', flexDirection: 'column' }}>
            <legend>Employee</legend>

            <label>
              <input type="radio" name="rad1" value="remote" />
              Remote
            </label>

            <label>
              <input type="radio" name="rad1" value="full-time" />
              Full-time
            </label>

            <label>
              <input type="radio" name="rad1" value="internee" />
              Internee
            </label>
          </fieldset><br />

          <fieldset style={{ display: 'flex', flexDirection: 'column' }}>
            <legend>Salary</legend>

            <label>
              <input type="checkbox" name="salary" value="10k" />
              10k
            </label>

            <label>
              <input type="checkbox" name="salary" value="15k" />
              15k
            </label>

            <label>
              <input type="checkbox" name="salary" value="30k" defaultChecked={true} />
              30k
            </label>
          </fieldset><br />

          <label htmlFor="favColor">What is your favorite color?</label><br />
          <select id="favColor" name="favColor" required>
            <option value="" disabled>Select Color</option>
            <option value="Pink">Pink</option>
            <option value="Yellow">Yellow</option>
            <option value="Blue">Blue</option>
            <option value="White">White</option>
          </select><br /><br />

          <button type="submit">Enter</button>
        </form>
      </div>

      <h2>Hello my name is</h2>
      <button onClick={showMe}>{isShown ? "Don't Show" : "Show Name"}</button>
      <p style={{ color: 'blue', display: isShown ? 'block' : 'none' }}>Arslan</p>
      {isShown && <p>Khan</p>}

      {funct()}

      <ul>
        {messages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
export default Form