import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Login from './components/login'
import mainPage from './components/mainPage'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <nav>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/mainPage">Friends</Link>
          </div>
        </nav>
      <Route path="/login" component = {Login} />
      {/* Its Working */}
      {/* <Login /> */}
      <PrivateRoute path = "/mainPage" component = {mainPage} />
    </div>
  );
}

export default App;
