import React from 'react';
import Navbar from './component/navbar/navbar.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home/home.pages';
import DetailGames from './pages/detail-game/detail-games.pages';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/games" component={DetailGames}/>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
