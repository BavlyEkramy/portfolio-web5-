import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from 'react';
import Header from "./components/header/header";
import Home from "./components/home/Home";
import Contact from "./components/contact/contact";
import ProjItem from "./components/ProjItem/ProjItem";
import Flow from "./components/flow/Flow";
import AboutMe from "./components/aboutMe/aboutMe";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route path="*" element={<></>} />
        <Route path="/proj" element={<ProjItem/>} />
        <Route path="/contact" element={<></>} />
        <Route path="/about" element={<AboutMe/>} />
      </Routes>
      <Contact />
      <Flow/>
    </Router>
  );
}

export default App;
