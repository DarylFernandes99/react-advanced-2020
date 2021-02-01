import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      {/* Only the first page mathching the path will be displayed in switch */}
      <Switch>
        {/* exact keyword is added so that the home page is not displayed evrytime */}
        <Route exact path="/">  
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person/>} />
        {/* This page will always run except when inside switch */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
