// import First from './components/first';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';



function App() {
  const [mode, SetMode] = useState("light")
  const [alert, setalert] = useState(null)

  // to show the alert
  const showAlert=(message,type)=>{
    setalert({
      msg :message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);


  }
  //to change the background color
  
  const toggle=()=>{
    if(mode==='light')
    {
      SetMode('dark')
      document.body.style.backgroundColor="grey"
      showAlert("dark mode enable","success")
      //document.title="TextUtils-Dark Mode"
      
    }
    else
    {
      SetMode('light')
     document.body.style.backgroundColor="white"
     showAlert("light mode enable","success")
     //document.title="TextUtils-Light Mode"
     
    }
  }
  return (
    <>
 <Router>
<Navbar title="Rohan" about="about me" mode={mode} toggle={toggle}/>
<Alert alert={alert}/>
{/* <Navbar title={44} about={45}/> */}
{/* <Navbar/> */}
<Routes>
  <Route path="/"element={<TextForm title="enter your text" showAlert={showAlert}/>}/>
 

  <Route path="/about" element={<About mode={mode}/>}/>

 
</Routes>
</Router>

   </>
   
  );
}

export default App;
