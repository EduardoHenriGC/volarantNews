import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbarmenu from "./components/header/index";
import Hero from "./components/home/index";
import Patch from "./pages/patch/index";
import Agentes from "./pages/agentes/index";

import Dicas from "./pages/dicas/index";
import ProSettings from "./pages/prosettings/index";
import Champion from "./pages/Champion";

const App = () => {
  return (
    <div>
      <Router>
        <Navbarmenu />

        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="home" element={<Hero />}></Route>
          <Route path="patch" element={<Patch />}></Route>
          <Route path="agentes" element={<Agentes />}></Route>
          <Route path="dicas" element={<Dicas />}></Route>
          <Route path="pro" element={<ProSettings />}></Route>
          <Route path="champion" element={<Champion />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
