
import { useState, useCallback } from 'react'

const App = () => {

    const [count, setCount] = useState(0);

    const min = useCallback(    // returns the memorized function
        () => {
            setCount(count - 1)
        },
        [count]
    )

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}> + </button>
            <button onClick={min}> - </button>
        </div>
    )
}

export default App