import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Portofolio from './components/Portofolio/Portofolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './styles/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Nav />
    <About />
    <Experiences />
    <Portofolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);

