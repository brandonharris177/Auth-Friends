import React from 'react';
import { Route, Link } from 'react-router-dom';

import Login from './Login'
import mainPage from './MainPage'
import PrivateRoute from './PrivateRoute';

const NavBar = () => {
    
  return (
      <div>
      <nav>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/mainPage">Friends</Link>
          </div>
        </nav>
      <Route path="/login" component = {Login} />
      <PrivateRoute path = "/mainPage" component = {mainPage} />
      </div>
    );
  }
  
  export default NavBar;