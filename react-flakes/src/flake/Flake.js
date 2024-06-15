import { useState, useEffect } from "react"

import "./Flake.css"


const Flake = ({left}) => {
    
    let [top, setTop] = useState(0)  
        console.time("component")  

    useEffect(()=>{
        setTimeout(() => {
            console.log("MOVE IT!")
            setTop(top + 5)
        }, 1000)
    })

    // jsx
    const style = {
        top: `${top}%`,
        left: `${left}%`
    }

    const jsx = (
        <>
            <div
                className="flake"
                style={style}
            ></div>
        </>
    )

    console.timeEnd("component")

    return jsx
}

export {Flake}