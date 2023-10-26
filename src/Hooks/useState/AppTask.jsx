import { useState } from 'react'

function App() {

    const[count , setCount] = useState(0);
    const[price , setPrice] = useState(0);
    const[text , setText] = useState('Buy');
    
  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}>+</button>
      <span>{count}</span>
      <button onClick={()=>setCount(count-1)}>-</button>
      <h2></h2>
      <button onClick={()=>setPrice(count*50)}>total</button>
      <span>{price}</span>
      <h2></h2>
      <button onClick={()=>setText('Thanks For Visiting')}>{text}</button>

    </div>
  )
}

export default App