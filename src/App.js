import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginForm";
import Wallet from "./components/wallet";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ paddingTop: 40 }}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Wallet />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
