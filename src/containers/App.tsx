import React from 'react';
import logo from '../images/logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Basic from './Basic';
import SocialPage from './SocialCardPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 导航 */}
        <nav>
          <Link to="/basic">Basic</Link>&nbsp;
          <Link to="/social-card">Social Card</Link>&nbsp;
        </nav>
      </header>
        {/* 路由 */}
        <Switch>
          <Route path="/basic">
            <Basic />
          </Route>
          <Route path="/social-card">
            <SocialPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
