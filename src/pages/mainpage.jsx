import React from "react";
import logo from '../logo.svg';
import graph from '../test.png'

import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                
                <h1>Naturepedia</h1>
                <div>
                    {/* <button>Data</button> */}
                    {/* <button>Contact Us</button> */}
                    <Link to="/data">Data</Link>&nbsp;
                    <Link to="/contact">Contact Us</Link>&nbsp;
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/faq">FAQ</Link>
                    {/* <button>Home</button>
                    <button>FAQ</button> */}
                </div>

                <img src={logo} className="App-logo" alt="logo" />
                <img src={graph} className="Test image" />

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default MainPage;