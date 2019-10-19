import React from 'react';
import './App.css';
import OnLogin from './components/OnLogin.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Login}/>
        <PrivateRoute exact path='/onlogin' component={OnLogin}/>
      </div>

    </Router>

  );
}

export default App;
