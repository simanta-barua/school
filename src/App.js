import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
const App = () => {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
  </div>
  );
};

export default App;