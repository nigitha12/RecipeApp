import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import Vegetarian from './pages/Vegetarian';
import NonVegetarian from './pages/NonVegetarian';

function App() { 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />}/>
            <Route path="/vegetarian" element={<Vegetarian />} />
            <Route path="/nonvegetarian" element={<NonVegetarian />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div> 
      <Footer />
    </Router>
  );
}

export default App;