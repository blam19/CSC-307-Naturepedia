import React from "react";

import { Link } from "react-router-dom";
import tree from '../tree.png';

const MainPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                
                <h1 class="title" style = {{fontSize : 100 }}>Naturepedia</h1>
                <div>
                    {/* <button>Data</button> */}
                    {/* <button>Contact Us</button> */}
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/data">Data</Link>&nbsp;
                    <Link to="/contact">Contact Us</Link>&nbsp;
                    <Link to="/faq">Donate</Link>&nbsp;
                    {/* <button>Home</button>
                    <button>FAQ</button> */}
                </div>
                <p></p>
                <div>
                    <img src={tree}/>
                    <div>
                        <h1 class="mission" style = {{fontSize : 50 }}>
                            Mission: 
                        </h1>
                        <div class="missionDesc" style = {{ marginLeft : 370, marginRight : 370, fontSize : 30 }}>
                            Nature underpins our very existence. Nature is what we eat, what we drink, what we breathe and more. 
                            Because of how nature is so free, people often take it for granted and don't appreciate it.
                            Our group believes that everyone should have some knowledge about nature and how limited it can be. 
                            We aim to provide information of some of the most well-known items of nature to the public.
                        </div>
                        
                    </div>
                </div>

            </header>
        </div>
    );
}

export default MainPage;