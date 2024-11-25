import { useState } from 'react'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import Header from './components/Header';
import About_us from './pages/About_us';

function App() {
  
  return(
    
    <div>
      <Header/>
      <Home/>
      
    </div>
  
  )

}
export default App;
