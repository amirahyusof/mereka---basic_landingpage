import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Features from "./Components/Features";
import Services from "./Components/Services";
import Plans from "./Components/Plans";
import Testimony from "./Components/Testimony";
import Action from "./Components/CTA";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { register } from "swiper/element/bundle";

function App() {
  register();
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Plans />
      <Testimony />
      <Action />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
