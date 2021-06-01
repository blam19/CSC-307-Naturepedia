import React from "react";

import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                
                <h1>Naturepedia</h1>
                <div>
                    {/* <button>Data</button> */}
                    {/* <button>Contact Us</button> */}
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/data">Data</Link>&nbsp;
                    <Link to="/contact">Contact Us</Link>&nbsp;
                    <Link to="/faq">FAQ</Link>&nbsp;
                    {/* <button>Home</button>
                    <button>FAQ</button> */}
                </div>
                <p></p>

            </header>
        </div>
    );
}

export default MainPage;