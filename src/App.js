import './App.css';
import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Fragment} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

//Pages
import ContactPage from "./pages"
import MainPage from './pages/mainpage';
import DataPage from './pages/datapage';
import FAQPage from './pages/faqpage';



export default class App extends React.Component {
  render() {
    return (
          <Router>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/data" component={DataPage} />
                <Route exact path="/faq" component={FAQPage} />
                
              </Switch>
          </Router>
    
    );
  }
}
