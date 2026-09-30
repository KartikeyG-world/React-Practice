import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    setCount(count + 1)
    if(count >= 20){
      setCount(20)
    }
  }
  const subtractValue = () => {
    setCount(count - 1)
    if(count < 1){
      setCount(0)
    }
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Counter value: {count} </h2>

      <button onClick={addValue} className='add'>Add value</button>
      <button onClick={subtractValue} className='subtract'>Subtract value</button>
      <button onClick={() => setCount(0)} className='reset'>Reset</button>


    </div>
  )
}


export default App