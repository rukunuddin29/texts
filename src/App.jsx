import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#262626';
      document.body.style.color = 'white';
      document.title = 'Text-Util Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#f4f4f4';
      document.body.style.color = 'black';
      document.title = 'Text-Util Light Mode';
    }
  };

  return (
    <Router>
      <Navbar title="Text Operation" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Text mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
