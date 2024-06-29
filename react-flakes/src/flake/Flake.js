import { useState, useEffect } from "react"

import "./Flake.css"


const Flake = ({top, left, size}) => {   

    // jsx
    const style = {
        top: `${top}%`,
        left: `${left}%`,
        transform: `scale(${size})`
    }

    const jsx = (
        <>
            <div
                className="flake"
                style={style}
            ></div>
        </>
    )

    

    return jsx
}

export {Flake}