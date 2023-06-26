import "./App.css";
import NavBar from "./Components/NavBar";
import IamSection from "./Home/IamSection";
import AboutMe from "./Home/AboutMe";
import Portfolio from "./Home/Portfolio";
import Contact from "./Home/Contact";
import Footer from "./Home/Footer";
// import {BrowserRouter as Switch, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <IamSection></IamSection>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
