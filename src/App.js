import React from "react";
import Sidebar from "./components/sideBar/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home";
import Profile from "../src/pages/Profile";
import ContactMe from "../src/pages/ContactMe";
import About from "../src/pages/About";
import Money from "./pages/Money";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/kontaktiraj_me" element={<ContactMe/>} />
              <Route path="/o_nama" element={<About/>} />
              <Route path="/money" element={<Money/>} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
