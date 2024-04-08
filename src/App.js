import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useState } from 'react';

function App() {
  const [mode,setmode]= useState('light');//dark mode in enabled or not.
  return (
    <div>
<Navbar aboutus="About"/>
<div className="container my-3">
<Hero heading="Enter your text..."/>
</div>
    </div>
  );
}

export default App;
