import { useState } from 'react'
import './App.css'

function App() {
  const [length , setLenght] = useState();

  const checkboxData = [
    {title : "Include Uppercase Letters", state: false},
    {title : "Include Lowercase Letters", state : false},
    {title : "Include Numbers", state : false},
    {title : "Include Symbols", state : false}
  ]

  return (
    <div >
      <h1>Password Generator</h1>
      <div className='container'>
        <div className='header'>
          <div className="title">dafbakjfj</div>
          <button className='copyBtn' onClick={() => { }}>Copy</button>
        </div>
        <div className='charlength'>
          <span>
            <label >Charcter Length</label>
            <label >{length}</label>
          </span>
          <input type="range" min={4} max={20} value={length} onChange={(e)=> setLenght(e.target.value)} />

        </div>
        <div className='check boxes'>
          {
            checkboxData.map((checkbox , index)=>{
              return <div key={index}>
                <input type="checkbox" checked={checkbox.state} />
                <label >{checkbox.title}</label>
                 </div>
            })
          }
        </div>

        <button className='generateBtn'>Generate Button</button>

      </div>
    </div>
  )
}

export default App
