import React from 'react';
import './App.css';
import OnLogin from './components/OnLogin.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import AddUser from './components/AddUser';
import Navigation from './components/Navigation';
import HousingCard from './components/HousingCard';



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        {/* <HousingCard /> */}
        <Route exact path='/' component={Login}/>
        <Route exact path='/adduser' component={AddUser} />
        <PrivateRoute exact path='/onlogin' component={OnLogin}/>
      </div>

    </Router>

  );
}

export default App;
