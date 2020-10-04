import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Button } from './components/Button';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
