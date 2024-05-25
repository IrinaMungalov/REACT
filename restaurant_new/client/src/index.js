// code - core
import React from 'react';
import ReactDOM from 'react-dom/client';

// dev
import reportWebVitals from './reportWebVitals';

import { Counter } from './ui/Counter';
import { App } from './ui/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>   

    <App />
    
    <Counter />  

  </React.StrictMode>
);

// dev
reportWebVitals();
