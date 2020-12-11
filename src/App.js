import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import Projects from './pages/Projects/Projects'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tannerportfolio/projects" component={Projects} />
      </Switch>
    </HashRouter>
  );
}
export default App;
