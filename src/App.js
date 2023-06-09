// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container>
          <Routes>
            <Route path = "/" element={<Homepage/>} />
            <Route path = "projects/" element={<Projects/>} />
            <Route path = "contact/" element={<Contact/>} />
            <Route path = "about/" element={<About/>} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
