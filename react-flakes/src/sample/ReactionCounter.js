import './reactions.css'

import { useState } from "react"

const ReactionCounter = () => {

    // haha   sad   like
    //   v     v     v
    // [ 100,  10,   0 ]


    let [reactions, setReactions] = useState([100, 10, 0])

    return(
        <div>
            <span onClick={() => {
                // HW1:
                reactions[0]++
                setReactions([...reactions])
            }}>
                <img src="https://icons.iconarchive.com/icons/rokey/popo-emotions/128/haha-icon.png"/>
                {reactions[0]}
            </span>
            <span onClick={() => {
                // HW1:
                reactions[1]++
                setReactions([...reactions])
            }}>
                <img src="https://icons.iconarchive.com/icons/rokey/popo-emotions/128/sad-icon.png"/>
                {reactions[1]}
            </span>
            <span onClick={()=>{
                reactions[2]++
                setReactions([...reactions])   // <-> setReactions([reactions[0],[reactions[1],[reactions[2]])

                console.log(reactions)
            }}>
                <img src="https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/128/Hand-thumbs-up-like-2-icon.png"/>
                {reactions[2]}
            </span>
        </div>
    )
}

export default ReactionCounter