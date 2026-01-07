import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
    {/* navigation bar  */}
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/about' element>About</Link>
      <Link to='/contact' element>contact</Link>
    </nav>
    {/* main router  */}
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
