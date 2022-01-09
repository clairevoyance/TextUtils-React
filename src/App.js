import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    document.body.style.backgroundColor = mode === 'dark' ? 'white' : '#042743';
    setmode(mode === 'dark' ? 'light' : 'dark');
    showAlert("success", `Mode changed to ${mode==='dark'? 'light' : 'dark'}`);
    document.title = `TextUtils-${mode==='dark'? 'Light' : 'Dark'} Mode`;
  }

  const [alert, setalert] = useState(null);

  const showAlert = (msgType, msg) => {
    setalert({msgType, msg});
    setTimeout(() => setalert(null), 1500);
  }

  return (
    <>
    <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          {/* Please Note!!

            We are not using the "exact" keyword to specify the path. (E.g -> <Route exact path="/home" element={<Home />} />)
            We should have used it in router version 5.x.x
            Why? - Because in version 5.x.x, if we dont specify the exact keyword, it would consider "/home" same as "/" in terms of first cum first serve matching. But, in version 6.x.x, it would consider "/home" as a child of "/" and "/home" would not be matched. In other words, "/home" would be exactly matched even if we dont specify the "exact" keyword in version 6.x.x of react-router-dom.

          */}
        <Route path="/home" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
