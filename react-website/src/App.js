import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Leaderboard from './components/pages/Leaderboard';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path ='/leaderboard' component={Leaderboard} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
