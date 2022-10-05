import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import About from './components/About'
//import About from './components/About';

import 
{ BrowserRouter as Router, 
   Routes,
   Route 
  } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
     setAlert(null) 
    },2000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor=  'black';
      showAlert("Dark mode has been enabled","Success")
    }
    else{
    setMode('light');
    document.body.style.backgroundColor=  'white';
    showAlert("Light mode has been enabled","Success")
    }
  }
  return (
<>
<Router>
{/*<Navbar   title=" TextUtils"    abouttext="About TextUtils"/>*/}
{/* <Navbar   title=" TextUtils"    /> */} {/* when we does't pass abouttext than it get the  default vaue of abouttext that is already defined in navbaar.default */}

      <Navbar title ="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
     <Routes>
        <Route exact path="/about" element={<About  mode={mode}/>}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUtils - Word counter, character counter, Remove extra spaces" mode={mode}/>}/>
      </Routes>
  
  {/*} <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>*/}
      </div>
      {/*<About/>*/}
</Router>
  </>
  );
}

export default App;
