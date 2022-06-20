import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import LoginForm from "./screens/loginForm";
import Signup from "./screens/signupForm";
import Wallet from "./screens/wallet";
import TransacionForm from "./screens/transactionForm";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ paddingTop: 40 }}>
        <Switch>
          <Route path="/transactions/:id" component={TransacionForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Wallet} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
