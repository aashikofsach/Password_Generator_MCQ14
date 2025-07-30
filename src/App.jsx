import './App.css'

function App() {

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
        <div className='charLength'>
          <span>
            <label >Charcter Length</label>
            <label >4</label>
          </span>
          <input type="range" min={4} max={20} value={13} />

        </div>
        <div className='checkboxes'>
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
