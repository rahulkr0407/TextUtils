//12:05
import './App2.css';
//import About from './components/about';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if(mode ==='light'){
      setMode('dark')
    }
     else{
      setMode('light')
    }
     
   }
  return (
<>
{/*<Navbar title="TextUtils" aboutText="About us" />*/} 
{/*<Navbar/> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<div className="container my-3">
<TextForm heading=" "/>

</div>
</>
   
  );
}

export default App;
