// code - core
import React from 'react';
import ReactDOM from 'react-dom/client';

import Food from './Food';


// dev
import reportWebVitals from './reportWebVitals';

import { Button } from './ui/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Button 
      text="sort" 
      backgroundColor="#333"
      color="#fff"
    />

    <Food
      name="Pizza"
      image="https://rabotaryadom.info/wp-content/cache/thumb/43/5c3293a19b8ac43_350x0.jpg"
      width={200}      
      price="30 USD"
      ingredients="flour, yeast, mozzarella cheese, onion, tomatoes, oregano."
    />
    <Food
      name="Risotto"
      image="https://img.over-blog-kiwi.com/0/65/19/23/20191209/ob_02d697_risotto-parmesan-chorizo.jpg"
      width={200}      
      price="25 USD"
      ingredients="butter, onion, white wine, Parmesan cheese."
    />
    <Food
      name="Lasagna"
      image="https://i.pinimg.com/originals/e6/83/4e/e6834ea984f5f066cddc7730137c2eab.jpg"
      width={200}      
      price="35 USD"
      ingredients="lasagna noodles, marinara sauce, ricotta cheese, mozzarella cheese, Parmesan cheese, ground meat, onions, oregano."
    />

  </React.StrictMode>
);

// dev
reportWebVitals();
