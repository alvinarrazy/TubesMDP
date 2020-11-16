import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {history} from '../src/redux/helpers/history';

//Pages
import HomePage from './components/pages/Home';
import RegistrationPage from './components/pages/Registration';
import LoginPage from './components/pages/Login';
import Logout from './components/pages/Logout';
import PostPage from './components/pages/Posts';


function App() {
  console.log(localStorage.getItem("loggedIn"));
  console.log(localStorage.getItem("user"));
  return (
    <>
    <Router>
      <Switch  history={history}>
        <Route path='/' exact component={HomePage}/>
        <Route path='/sign-up' exact component={RegistrationPage}/>
        <Route path='/login' exact component={LoginPage}/>
        <Route path='/logout' exact component={Logout}/>
        <Route path='/timeline' exact component={PostPage}/>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
    </>
  );
}

export default App;
