import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter,
//   Switch,
//   Route,
// } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './pages/Container/Container';

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/projects" component={Projects} />
    //     <Route exact path="/" component={HomePage} />
    //   </Switch>
    // </BrowserRouter>
    <Container />
  );
}
export default App;
