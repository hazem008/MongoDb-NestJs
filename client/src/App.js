import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact"; 
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Users from "./components/Users"; 
import NotFound from "./components/NotFound";
function App() {

  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/users" element={<Users />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound/>} />
     

    </Routes>

  );
}


export default App;
