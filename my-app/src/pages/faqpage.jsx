import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function donateClick(){
    alert("Thank you for donating!");
}

const FAQPage = () => {
    return (
        <div>
            <div>
                    {/* <button>Data</button> */}
                    {/* <button>Contact Us</button> */}
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/data">Data</Link>&nbsp;
                    <Link to="/contact">Contact Us</Link>&nbsp;
                    <Link to="/faq">Donate</Link>
                    {/* <button>Home</button>
                    <button>FAQ</button> */}
            </div>
            <h1>DONATE PAGE</h1>
            <div>
                    {/* <button>Data</button> */}
                    {/* <button>Contact Us</button> */}
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/data">Data</Link>&nbsp;
                    <Link to="/contact">Contact Us</Link>&nbsp;
                    <Link to="/faq">Donate</Link>
                    {/* <button>Home</button>
                    <button>FAQ</button> */}
            </div>
            <p/>
            <div class= "heading">
                Please consider donating to help fund our site.
            </div>
            <form>
                <p>Enter your last name:</p>
                <input
                    type='text'
                    name='lastname'
                />
                <p>Enter your first name:</p>
                <input
                    type='text'
                    name='firstname'
                />
                <p>Enter your email address:</p>
                <input
                    type='text'
                    name='email'
                />
                <h3>Billing Information</h3>
                <p>Enter name on card</p>
                <input
                    type='text'
                    name='firstname'
                />&nbsp;
                <input
                    type='text'
                    name='lastname'
                />
                <p>Enter your card number:</p>
                <input
                    type='text'
                    name='cnumber'
                />
                <p>Enter your card's CVV:</p>
                <input
                    type='text'
                    name='ccvv'
                />
                <p>Enter your card's Expiration Date:</p>
                <input
                    type='text'
                    name='cexpdate'
                />
            </form>
            <p></p>
            <Button as="input" type="submit" value="Donate $1" onClick={donateClick}/>
            <Button as="input" type="submit" value="Donate $5" onClick={donateClick}/>
            <Button as="input" type="submit" value="Donate $10" onClick={donateClick}/>
            <br/>
            <p>
                <Button as="input" type="submit" value="Donate Custom Amount" onClick={donateClick}/>
                <input
                    type='text'
                    name='donationamount'
                />
            </p>
        </div>
    );
}

export default FAQPage;