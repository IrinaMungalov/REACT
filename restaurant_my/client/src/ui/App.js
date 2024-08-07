import { useState, useEffect } from 'react'

import { SortButton } from './SortButton';
import { Menu } from './Menu';
import { Order } from './Order';

import { getProductItems /*, getOrderCount*/ } from '../services/DataService';

// HW1: using new function from data services and use effect hook 
//      load order item count and render it

const App = () => {

    let [sortAsc, setSortAsc] = useState(true)
    let [items,setItems]      = useState([])
    let [count,setCount]      = useState(0)
    let [total, setTotal]     = useState({})

    useEffect(() => {
        (async () => {
            let itemsData = await getProductItems()
            setItems(itemsData)
        })()
    }, []) // single call

    // useEffect(() => {
    //     const getData = async () => {
    //         let itemsData = await getProductItems();
    //         setItems(itemsData);

    //         let orderCount = await getOrderCount();
    //         setCount(orderCount);
    //     };

    //     getData();
    // }, []);
    
    
    return (
        <>
            <SortButton sortAsc={sortAsc} setSortAsc={setSortAsc} />
            <Order count={count} total={total}/>
            <Menu items={items} sortAsc={sortAsc} setCount={setCount} setTotal={setTotal} /> 
        </>
    )
}

export {App}