import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import PageExample from 'pages/PageExample';

import './App.css';

const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={PageExample} />
  </Router>
);

export default App;
