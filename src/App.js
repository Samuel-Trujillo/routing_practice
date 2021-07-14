import React from 'react';
import {Router} from '@reach/router';
import WordRoute from './components/WordRoute';
import NumberRoute from './components/NumberRoute';
import ColorRoute from './components/ColorRoute';
import HomeRoute from './components/HomeRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeRoute path = "/home"/>
        <WordRoute path="/word/:word"/>
        <NumberRoute path="/number/:number"/>
        <ColorRoute path = "/:word/:color/:background"/>
      </Router>
    </div>
  );
}

export default App;
