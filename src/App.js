import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper />
          <Routes>
            <Route path = "/" element={<Homepage/>} />
            <Route path = "/projects" element={<Projects-page/>} />
            <Route path = "/contact" element={<Contact/>} />
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
