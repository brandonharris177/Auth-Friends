import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Login from './components/login'
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      Its Working
      <Login />
    </div>
  );
}

export default App;
