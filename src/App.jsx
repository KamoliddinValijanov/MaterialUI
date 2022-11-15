import React from "react";
import "./components/style.css";
import Navbar from "./components/Navbar";
import Alerts from "./components/Alerts";
import Cards from "./components/loader.jsx";
import Accord from "./components/Accord";
import About from "./components/About";
import SliderList from "./components/SliderList";
import Footer from "./components/Footer";
// import DarkMode from "./components/DarkMode";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      {/* <DarkMode/> */}
      <div className="component ">
        <SliderList />
      </div>
      <div className="component">
        <About />
      </div>

      <div className="component">
        <Accord />
      </div>

      <div className="component">
        <Alerts />
      </div>

      <div className="component">
        <Footer />
      </div>
    </div>
  );
}

export default App;
