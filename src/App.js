// App.js
import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rentals from './pages/Equipment';
import About from './pages/About';
import Contact from './pages/Contact';
import Dj from './pages/Dj';
import Policy from './pages/Policy';
import PrivateEvents from './pages/PrivateEvents';
import Quote from './pages/Quote';
import Equipment from './pages/Equipment';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route exact path="/"  element={<Home/>} />
            <Route exact path="/equipment" element={<Equipment/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/dj" element={<Dj/>} />
            <Route exact path="/policy" element={<Policy/>} />
            <Route exact path="/events" element={<PrivateEvents/>} />
            <Route exact path="/Quote" element={<Quote/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
