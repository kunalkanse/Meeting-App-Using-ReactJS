import { useState, useRef, useEffect } from 'react'

const App = () => {

  const inputElement = useRef();

  function foc() {
    inputElement.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={foc}>Focus Input</button>
    </div>
  )
}

export default App