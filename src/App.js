import React from "react";
import { Route, Routes } from 'react-router-dom'
import LandingPage from "./landingPage";
import Beautify from "./beautify";

function App() { 

  return (
    <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path = "/create" element= {<Beautify />} />
    </Routes>
  );
}

export default App;
