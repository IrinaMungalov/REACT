import { useState } from "react"

import "./Flake.css"


const Flake = ({left}) => {

    let [top, setTop] = useState(0)

    const style = {
        top: `${top}%`,
        left: `${left}%`
    }

    return (
        <>
            <div 
                className="flake"
                style={style}            
            ></div>
            <button onClick={() => {
                setTop(top+5)
            }}>DOWN</button>
        </>
    )
}

export{Flake}