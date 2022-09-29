import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [chngmode, setchngmode] = useState('light');

  const togglemode = () => {

    if (chngmode === 'dark') {
      setchngmode('light')

    }
    else {
      setchngmode('dark');
    }
  }

  return (
    <>
        <Navbar title="Navbar" mode={chngmode} togglemode={togglemode} />


        <div>
          <About />
          <TextForm heading="Enter the Text" />
        </div>
    </>
  );
}

export default App;