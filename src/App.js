import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {history} from '../src/redux/helpers/history';

//Pages
import HomePage from './components/pages/Home';
import CardPageTesting from './components/pages/CardPage';
import RegistrationPage from './components/pages/Registration';
import LoginPage from './components/pages/Login';
import Logout from './components/pages/Logout';
import PostPage from './components/pages/Posts';


function App() {
  return (
    <>
    <Router>
      <Switch  history={history}>
        <Route path='/' exact component={CardPageTesting}/>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
    </>
  );
}

export default App;
