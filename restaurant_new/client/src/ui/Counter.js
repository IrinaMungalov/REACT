import { useState } from 'react'

const Counter = () => {
    
    let [count, setCount] = useState(1)

    let inc = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    let dec = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div
            style = {{ 
                display: 'flex', 
                alignItems: 'center'                
            }}>
            
            <button 
                onClick = { dec } 
                style = {{ 
                    margin: '10px' 
                }}> - </button>

            <div> { count } </div>

            <button 
                onClick = { inc } 
                style = {{ 
                    margin: '10px' 
                }}> + </button>

        </div>
    )
}

export { Counter }