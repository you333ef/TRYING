import React from 'react';
import './App.css'
import Nav from './assets/componants/Nav';
import Header from './assets/componants/Header';
import Skills from './assets/componants/Skills';
import About from './assets/componants/About';
import Projects from './assets/componants/Projects';
import Templets from './assets/componants/Templets';
import ENDING from './assets/componants/ENDING';
import Commernts from './assets/componants/Commernts';
import INTYRO from './assets/componants/INTYRO';
import CONTACT from './assets/componants/CONTACT';
import Vooter from './assets/componants/Vooter';

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
     <Commernts/>
     <INTYRO/>
     <CONTACT/>
     <Vooter/>
     
    </div>
  );
}

export default App;
