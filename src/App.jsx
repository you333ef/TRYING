import React from 'react';
import './App.css'
import Nav from './assets/componants/Nav';
import Header from './assets/componants/Header';
import Skills from './assets/componants/Skills';
import About from './assets/componants/About';
import Projects from './assets/componants/Projects';
import Templets from './assets/componants/Templets';
import ENDING from './assets/componants/ENDING';

const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Skills/>
      <About/>
      <Projects/>
      <Templets/>
      <ENDING/>
     
    </div>
  );
}

export default App;
