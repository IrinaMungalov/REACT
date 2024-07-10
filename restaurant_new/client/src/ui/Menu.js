import { useState } from "react"
import Item from "./Item"
import {orderItem} from "../services/DataService"


const Menu = ({ items, sortAsc, setOrderInfo }) => {
    let [message, setMessage] = useState(undefined)
    console.log(items)
       
    return (
        <>
            <h1>Menu</h1>
            {message ?<p style={{border: '1px solid green'}}>{message}</p>:<></>}
            <ul>
                {items
                    .sort(
                        (item1, item2) => (sortAsc ? 1: -1) * (item1.price.amount - item2.price.amount)
                     )
                    .map((item, idx) => <Item {...{ idx, item, setMessage, orderItem, setOrderInfo }} />)}
            </ul> 
        </>
    )
}
export {Menu}