import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper />
          <Routes>
            <Route path = "/" element={<Homepage/>} />
          </Routes>
        <Wrapper />
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
