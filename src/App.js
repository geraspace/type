import './App.css';
import { useState } from "react";
import Navbar from './components/navbar';
import Canvas from './components/canvas';


function App() {

  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode(){
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className="App">
      <Navbar
      darkmode={darkMode}
      />
      <Canvas
      toggleDarkMode={toggleDarkMode}
      darkmode={darkMode}
      />
    </div>
  );
}

export default App;