import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/index";

function App() {
  return (
    <div className="container-fluid bg-dark App" style={{height:'45rem'}}>
      
    <div className="d-flex justify-content-center align-items-center" style={{height:'100%'}}>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
    </div>
    </div>
  );
}

export default App;
