import React from 'react';
import Navbar from './component/navbar/navbar.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home.pages.js';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
