import React,{ useState, useEffect } from 'react'

export const HookCounterOne = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <button onClick={() => setCount(prevState => prevState + 1)}>
                Click {count} times
            </button>
        </div>
    )
}
