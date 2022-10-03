// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';


function App() {

  const[mode,setmode] = useState('light');//whether dark mode is enable or not

  const toggelmode =()=>{
    if (mode === 'light'){
        setmode("dark");
        document.body.style.backgroundColor = '#042743 ';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
   <>
   {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
   {/* <Navbar /> */}
   <Navbar title="TextUtils"mode={mode} toggelmode={toggelmode}/>

   <div className="container">

    <TextForm headline="Enter The Text To Analayze" mode={mode}/>
   {/* <About/> */}
   </div>
   
  </>
  );
}

export default App;

