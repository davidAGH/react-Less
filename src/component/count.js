import { useState } from "react";

export function Count() {
    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = (e) => {
        setCount(count - 1)
    }
    
    return (
        <div>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            {count}
        </div>
    )
}