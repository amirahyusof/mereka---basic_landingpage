import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Features from "./Components/Features";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
