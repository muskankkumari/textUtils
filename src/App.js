import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode,setmode]= useState('light');//dark mode in enabled or not.
  return (
    <div>
<Navbar aboutus="aboutMuskan"/>
<div className="container my-3">
<Hero heading="Enter your text..."/>
</div>
<About/>
    </div>
  );
}

export default App;
