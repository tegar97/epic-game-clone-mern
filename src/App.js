import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './pages/home/home.pages';
import DetailGames from './pages/detail-game/detail-games.pages';
import Login from './pages/login/login.component'
import Register from './pages/Register/register.component'

import Navbar from './component/navbar/navbar.component';
function App() {
  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  )
  
  const WithNavbar = props => (
    <div>
      <Navbar/>
      {props.children}
    </div>
  )
  const NoNavbar = props => (
    <div>
      {props.children}
    </div>
  )

  
  return (
  
    <div className="App">
    <Switch>
      <AppRoute exact path="/" layout={WithNavbar} component={Home} />
      <AppRoute   path="/games/:slug" layout={WithNavbar} component={DetailGames} />
      <AppRoute exact path="/login" layout={NoNavbar} component={Login} />
      <AppRoute exact path="/register" layout={NoNavbar} component={Register} />
    </Switch>

  
    </div>
  
  );
}

export default App;
