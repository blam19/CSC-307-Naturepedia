import React from "react";
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";


function donateClick(){
    alert("Thank you for donating!");
}

const FAQPage = () => {
    return (
        <div>
            <h1>DONATE PAGE</h1>
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
                <h2>Billing Information</h2>
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
            <Button as="input" type="submit" value="DONATE" onClick={donateClick}/>
        </div>
    );
}

export default FAQPage;