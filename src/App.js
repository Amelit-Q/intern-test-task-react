import React from 'react';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
