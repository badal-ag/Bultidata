import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Works from '../components/Works';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
        <NavBar/>
        <Header/>
        <Works/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
    </>
  );
}
