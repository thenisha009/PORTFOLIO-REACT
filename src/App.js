import React from "react";
import "./App.css";
import "./index.css";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Education from "./pages/Education";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";


const App =() =>{
  return(
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/projects/:id" element={<ProjectDisplay/>}/>
          <Route path="/education" element={<Education/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;