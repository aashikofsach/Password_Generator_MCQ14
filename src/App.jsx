import { useEffect, useState } from 'react'
import './App.css'
import usePasswordGenerator from './hooks/usePasswordGenerator';
import StrengthChecker from './components/StrengthChecker';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

function App() {
  const [length, setLenght] = useState();
  const [copy , setCopy] = useState(false);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ])

  const { password, error, generatePassword } = usePasswordGenerator();

  function copyCat()
  {
    navigator.clipboard.writeText(password);
    setCopy(true);
  }

  useEffect(() => {
    setTimeout(()=> setCopy(false),1000)
  
    
  }, [copy])
  

  function handleCheckboxData(id) {
    let updatedCheckboxdata = [...checkboxData];
    updatedCheckboxdata[id].state = !updatedCheckboxdata[id].state;
    setCheckboxData(updatedCheckboxdata);

  }

  return (
    <div >
      <h1>Password Generator</h1>
      <div className='container'>
        {
          password && <div className='header'>
            <div className="title">{password}</div>
            {/* <button className='copyBtn' onClick={() => copyCat()}>{copy ? "Copied !" : "Copy"}</button> */}
            <Button text={copy ? "Copied !" : "Copy"} onClick={() => copyCat()} customclass="copyBtn"/>
          </div>
        }

        <div className='charlength'>
          <span>
            <label >Charcter Length</label>
            <label >{length}</label>
          </span>
          <input type="range" min={4} max={20} value={length} onChange={(e) => setLenght(e.target.value)} />

        </div>
        <div className='checkboxes'>
          {
            checkboxData.map((checkbox, index) => {
              // return <div key={index}>
              //   <input type="checkbox" checked={checkbox.state} onChange={() => handleCheckboxData(index)} />
              //   <label >{checkbox.title}</label>
              // </div>
              return <Checkbox key={index} checkbox={checkbox}  onChange={() => handleCheckboxData(index)}/>
            })
          }
        </div>

        <StrengthChecker password={password}/>
        {
          error && <div className='error'>{error}</div>
        }

        {/* <button className='generateBtn' onClick={()=> generatePassword(checkboxData, length)}>Generate Button</button> */}
        <Button onClick={()=> generatePassword(checkboxData, length)} text="Generate Button" customclass="generateBtn" />

      </div>
    </div>
  )
}

export default App
