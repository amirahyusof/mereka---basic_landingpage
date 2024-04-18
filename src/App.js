import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Features from "./Components/Features";
import Services from "./Components/Services";
import Plans from "./Components/Plans";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Plans />
    </div>
  );
}

export default App;
