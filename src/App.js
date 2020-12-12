import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import Projects from './pages/Projects/Projects'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
