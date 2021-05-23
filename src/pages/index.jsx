import React from "react";
import "./index.css";

import { Link } from "react-router-dom";

import person from '../person.jpg';

function Bailey(){
    return(
        <div className="Bailey">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
            <div> I am Bailey</div> 
            <div> I am Brandon</div> 
            <div> I am Dim</div>
            <div> I am Ken</div>

            <div> Email: bailbail@Naturepedia.com</div>
            <div> Email: branbran@Naturepedia.com</div>
            <div> Email: dimdim@Naturepedia.com</div>
            <div> Email: kenken@Naturepedia.com</div>   
        </div>
      </div>
    )
}

function Images(){
    return(
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
            <img src={person} className="Bails"/>
            <img src={person} className="Brandon"/>
            <img src={person} className="Dim" />
            <img src={person} className="Kenneth" />
        </div>
    )
}

const ContactPage = () => {
    return (
        <div>
            <h3>CONTACT PAGE</h3>
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
            <div>
                <Images></Images>
            </div>
            <div>
                <Bailey></Bailey>
            </div>
        </div>
    );
}

export default ContactPage;