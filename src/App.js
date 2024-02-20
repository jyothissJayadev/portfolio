import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  './App.css';
import Pre from './components/preloader';
import ScrollToTop from './components/scrollTop';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import ProjectDetails from './components/ProjectDetails';
import Resume from './pages/Resume';
function App() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
       <Pre load={load} />
       <ScrollToTop/>
       <NavBar/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:ProjectName" element={<ProjectDetails/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/resume" element={<Resume />} />
        
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
