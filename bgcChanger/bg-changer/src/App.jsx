// import React from 'react'
import { useState } from 'react'
function App() {
  const [color, setColor] = useState('#212121');

  return (
    <div style={{ backgroundColor: color }}
      id="container">
      <h1>Background Color changer</h1>
      <p>Click the buttons to change the background color!</p>
      <button onClick={() => setColor('red')}
        style={{
          backgroundColor: 'red',
          borderRadius: '10px',
          fontWeight: 'bolder',
          color: 'white',
          border: 'none',
        }}
      >Red</button>
      <button onClick={() => setColor('blue')}
        style={{
          backgroundColor: 'blue',
          borderRadius: '10px',
          fontWeight: 'bolder',
          color: 'white',
          border: 'none',
        }}
      >Blue</button>
      <button onClick={() => setColor('green')}
        style={{
          backgroundColor: 'green',
          borderRadius: '10px',
          fontWeight: 'bolder',
          color: 'white',
          border: 'none',
        }}
      >Green</button>
      <button onClick={() => setColor('brown')}
        style={{
          backgroundColor: 'brown',
          borderRadius: '10px',
          fontWeight: 'bolder',
          color: 'white',
          border: 'none',
        }}
      >Brown</button>
      <button onClick={() => setColor('grey')}
        style={{
          backgroundColor: 'grey',
          borderRadius: '10px',
          fontWeight: 'bolder',
          color: 'white',
          border: 'none',
        }}
      >Grey</button>

    </div>
  )
}

export default App
