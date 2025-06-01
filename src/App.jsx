import React from 'react';
import Navbar from './components/Navbar';
import './App.css'; // For page background and layout
import './assets/styles/colors.css';
import About from './components/about';
import RecentWork from './components/WorkSlider';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <About/>
      <RecentWork />
      <Contact />
     
    </div>
  );
}

export default App;
