import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Login from './components/login'
import mainPage from './components/mainPage'
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Route path="/login" component = {Login} />
      {/* Its Working */}
      {/* <Login /> */}
      <Route path = "/mainPage" component = {mainPage} />
    </div>
  );
}

export default App;
