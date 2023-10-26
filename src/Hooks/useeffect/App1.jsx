

import {useEffect , useState} from "react"

const App = () => {

  const[count , setcount] = useState(0);

  useEffect(()=>{
    document.title = `${count}`
  } , [count])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}> + </button>
      <button onClick={()=>setcount(count-1)}> - </button>
    </div>
  )
}


export default App


