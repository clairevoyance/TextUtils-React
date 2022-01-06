import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    document.body.style.backgroundColor = mode === 'dark' ? 'white' : '#042743';
    setmode(mode === 'dark' ? 'light' : 'dark');
    showAlert("success", `Mode changed to ${mode==='dark'? 'light' : 'dark'}`);
  }

  const [alert, setalert] = useState(null);

  const showAlert = (msgType, msg) => {
    setalert({msgType, msg});
    setTimeout(() => setalert(null), 1500);
  }

  return (
    <>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
