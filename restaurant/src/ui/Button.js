import { useState } from 'react'

const Button = ({ text,color,backgroundColor }) => {

    let [asc, setAsc] = useState(true)    

    return (
        <button 

            style={{
                color,
                backgroundColor
            }}

            onClick={ () => { 
                setAsc(!asc) 
                console.log(asc)
            } }
        
        
        >
            {text} { asc ? '^' : 'v'}
        </button>
    )
}

export {Button}