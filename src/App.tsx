import React from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import WelcomePage from "./pages/welcome/WelcomePage";
import GamePage from "./pages/game/GamePage";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/game" element={<GamePage/>}/>
          <Route path="*" element={<WelcomePage/>}/>
        </Routes>
      </div>
  );
}

export default App;
