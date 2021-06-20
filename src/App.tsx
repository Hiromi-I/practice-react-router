import React from 'react';
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { News } from "./pages/News";
import { Setting } from "./pages/Setting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/setting">Setting</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
