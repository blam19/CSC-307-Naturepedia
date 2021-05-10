import logo from './logo.svg';
import graph from './test.png'
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom"

//Pages
import ContactPage from "./pages"
import MainPage from './pages/mainpage';
import DataPage from './pages/datapage';
import FAQPage from './pages/faqpage';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/data" component={DataPage} />
          <Route exact path="/faq" component={FAQPage} />
          
        </Switch>
      </Router>
    // <div className="App">
      
    //   <header className="App-header">
    //     <h1>Naturepedia</h1>
    //     <div>
    //       <button>Data</button>
    //       <button>Contact Us</button>
          
    //       <button>Home</button>
    //       <button>FAQ</button>
    //     </div>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <img src={graph} className="Test image"/>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
