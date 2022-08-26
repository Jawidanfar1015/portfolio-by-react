import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio-by-react" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
