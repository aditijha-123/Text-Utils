import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import React , {useState} from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route, 
  Link,
  BrowserRouter

} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]= useState(null);
  function showAlert(message,type){
   setAlert({
    msg: message,
    type: type
   })

  }
  function toggleMode(){
   if(mode  === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    document.title = 'TextUtils-DarkMode';
    showAlert("DarkMode has been enabled", "success");
    // setInterval(()=>{
    // document.title = 'TextUtils is Amazing'
    // },2000);
    // setInterval(()=>{
    //   document.title = ' Install TextUtils is now'
    //  },1500);
  }
   else{
    setMode('light');
    document.body.style.backgroundColor='white';
    document.title = 'TextUtils-LightMode';
    showAlert("LightMode has been removed", "success");
   }
  }
  function ChangeRedMode(){
    document.body.style.backgroundColor='red';
     
  }
  
  return (
  <>
  <BrowserRouter>
  <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode} ChangeRedmode={ChangeRedMode}/>
  <Alert alert={alert} />
  <div className="container my-3">
  <Routes>
  <Route exact path="/" element={<Textarea showAlert ={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
  </Routes>
  <Routes>
  <Route exact path="/about" element={<About />} />
  </Routes>
</div>
</BrowserRouter>

</>

 
);
}

export default App;
