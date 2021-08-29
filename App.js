// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Infopage from "./components/Infopage";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
// import InfoData1 from "./data/InfoData.js";
import InfoData1 from "./data/InfoData";
// You can also use <link> for styles
// ..

function App() {
  // AOS.init();
  console.log(InfoData1[0].heading);
  return (
    <Router>
      <Navbar />
      <Slider />
      {InfoData1.map((val) => (
        <Infopage props={val} />
      ))}
    </Router>
  );
}

export default App;
