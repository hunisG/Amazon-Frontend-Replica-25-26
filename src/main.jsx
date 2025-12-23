import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import { DataProvider } from './Components/DataProvider/DataProvider.jsx';
import { Reducer, initialState } from './Utility/Reducer.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <DataProvider Reducer ={Reducer} initialState={initialState}> */}
    <BrowserRouter basename='/Amazon-Frontend-Replica-25-26'>
<DataProvider>
       <App />
   
    </DataProvider>
</BrowserRouter>
  </React.StrictMode>
); 
