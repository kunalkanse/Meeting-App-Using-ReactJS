import { useState, useMemo } from 'react'

const App = () => {

    const [count, setCount] = useState(0);

    const power = () => {
        return count ** 2;
    }

    const memo = useMemo(() => power(count))
    return (
        <div>
            <h1>{count}</h1>
            <h1>power : {memo}</h1>
            <button onClick={() => setCount(count + 1)}> + </button>
        </div>
    )
}

export default App