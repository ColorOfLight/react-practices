import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import PageExample from 'pages/PageExample';
import PageTypesafe from 'pages/PageTypesafe';

import './App.css';

const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={PageExample} />
    <Route path="/typesafe" exact component={PageTypesafe} />
  </Router>
);

export default App;
