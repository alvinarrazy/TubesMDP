import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Pages
import HomePage from './components/pages/Home';
import RegistrationPage from './components/pages/Registration';
import LoginPage from './components/pages/Login';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/sign-up' exact component={RegistrationPage}/>
        <Route path='/login' exact component={LoginPage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
