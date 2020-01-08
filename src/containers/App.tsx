import React from 'react';
import logo from '../images/logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// const Basic = React.lazy(() => import('./Basic'))
import Basic from './Basic'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        {/* 导航 */}
        <nav>
          <Link to="/basic">Basic</Link>&nbsp;
        </nav>
        <hr />
        {/* 路由 */}
        <Switch>
          <Route path="/basic">
            <Basic />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
