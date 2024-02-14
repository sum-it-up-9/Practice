import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import data from './data/folderData.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
)
