import { useState } from 'react'

import { SortButton } from './SortButton';
import { Menu } from './Menu';


const items = [
    {
        name: "pizza",
        image: "https://rabotaryadom.info/wp-content/cache/thumb/43/5c3293a19b8ac43_350x0.jpg",
        price: 50,
        ingredients: "Ingredients: flour, yeast, mozzarella cheese, onion, tomatoes, oregano.",
    },
    {
        name: "risotto",
        image: "https://img.over-blog-kiwi.com/0/65/19/23/20191209/ob_02d697_risotto-parmesan-chorizo.jpg",
        price: 25,
        ingredients: "Ingredients: butter, onion, white wine, Parmesan cheese.",
    },
    {
        name: "lasagna",
        image: "https://i.pinimg.com/originals/e6/83/4e/e6834ea984f5f066cddc7730137c2eab.jpg",
        price: 100,
        ingredients: "Ingredients: lasagna noodles, marinara sauce, ricotta cheese, mozzarella cheese, Parmesan cheese, ground meat, onions, oregano.",
    },
]

const App = () => {

    let [sortAsc, setSortAsc] = useState(true)

    return (
        <>
            <SortButton sortAsc={sortAsc} setSortAsc={setSortAsc} />
            <Menu items={items} sortAsc={sortAsc} /> 
        </>
    )
}

export {App}