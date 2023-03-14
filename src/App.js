// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper />
          <Routes>
            <Route path = "/" element={<Homepage/>} />
            <Route path = "/contact" element={<Contact/>} />
            <Route path = "/projects" element={<Projects/>} />
          </Routes>
        <Wrapper />
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <h1>FDUNNINTGON PORTFOLIO</h1>
    //   </header>
    // </div>
  );
}

export default App;
