import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {history} from '../src/redux/helpers/history';

//Pages
import CardPage from './components/pages/CardPage';
import AddCard from './components/pages/AddCard';
import DetailPage from './components/pages/DetailPage';



function App() {
  return (
    <>
    <Router>
      <Switch  history={history}>
        <Route path='/' exact component={CardPage}/>
        <Route path='/addcard' exact component={AddCard}/>
        <Route path='/getonecard:id' exact component={DetailPage}/>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
    </>
  );
}

export default App;
