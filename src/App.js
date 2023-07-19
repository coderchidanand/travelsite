import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Contact from "./components/Contact";
import Grid from "./components/Grid";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Contact />
      <Grid />
      <Slider />
    </div>
  );
}

export default App;
