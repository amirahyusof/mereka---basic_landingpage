import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Features from "./Components/Features";
import Services from "./Components/Services";
import Plans from "./Components/Plans";
import SellingPoint from "./Components/USP";
import Action from "./Components/CTA";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Plans />
      <SellingPoint/>
      <Action />
      <Contact />
    </div>
  );
}

export default App;
