import { useState, useRef, useEffect } from 'react'

const App = () => {

    const [name, setName] = useState("");

    const count = useRef(0)

    useEffect(() => {
        return () => {
            count.current = count.current + 1
        }
    }, [name])

    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <h1>My name is : {name}</h1>
            <h1>count : {count.current}</h1>
        </div>
    )
}

export default App