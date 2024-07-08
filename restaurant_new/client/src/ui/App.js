import { useState, useEffect } from 'react'

import { SortButton } from './SortButton';
import { Menu } from './Menu';
import { Order } from './Order';

import { getProductItems, getOrderCount } from '../services/DataService';

// HW1: using new function from data services and use effect hook 
//      load order item count and render it

const App = () => {

    let [sortAsc, setSortAsc] = useState(true)
    let [items,setItems]      = useState([])
    let [count,setCount]      = useState(0)

    useEffect(() => {        
        (async () => {
           let itemsData = await getProductItems()
           setItems(itemsData)
        })()    
    },[]) // single call

    useEffect(() => {
        (async () => {
            let orderCount = await getOrderCount()
            setCount(orderCount)
        })()
    }, [])
    
    
    return (
        <>
            <SortButton sortAsc={sortAsc} setSortAsc={setSortAsc} />
            <Order count={count}/>
            <Menu items={items} sortAsc={sortAsc} setCount={setCount} /> 
        </>
    )
}

export {App}