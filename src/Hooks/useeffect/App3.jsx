import {useState , useEffect} from 'react'

const App = () => {

  const[name , setName] = useState("");

  useEffect(()=>{
    document.title = `${name}`
  })

  return(
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)}></input>
      <h1>{`My Name is ${name}`}</h1>
    </div>
  )

}

export default App