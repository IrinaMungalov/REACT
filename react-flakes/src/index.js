import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Scene from './scene/Scene';
import ReactionCounter from './sample/ReactionCounter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Scene /> */}
    <ReactionCounter />
  </React.StrictMode>
);

reportWebVitals();
