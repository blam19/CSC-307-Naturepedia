import React from "react";
import "./index.css";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import person from '../person.jpg';
import kenprofile from '../kennethprofile.jpg';
import brandonprofile from '../brandonprofile.jpg';
import baileyprofile from '../baileyprofile.jpg';
import dimprofile from '../dimprofile.jpg';
import { CenterFocusStrong } from "@material-ui/icons";
import Card from "react-bootstrap/Card";

function Bailey(){
    return(
        <div className="Bailey">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
            {/* <h1>
                Bailey Wilson
            </h1>
            <h1>
                Brandon Lam
            </h1>
            <h1>
                Dimitrije Kostic
            </h1>
            <h1>
                Kenneth Liu
            </h1>
            <div> I am Bailey, a 4th year Business student at Cal Poly. I enjoy sleeping. </div> 
            <div> I am Brandon, a 4th year Computer Engineering student at Cal Poly. I enjoy eating. </div> 
            <div> I am Dimitrije, a 4th year Computer Engineering student at Cal Poly. I enjoy playing basketball.</div>
            <div> I am Kenneth, a 4th year Computer Engineering student at Cal Poly. I enjoy walking.</div>

            <div> Email: bailbail@Naturepedia.com</div>
            <div> Email: branbran@Naturepedia.com</div>
            <div> Email: dimdim@Naturepedia.com</div>
            <div> Email: kenken@Naturepedia.com</div> */}
            <div className="profile">
                <Card border='dark' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={baileyprofile} />
                    <Card.Body>
                        <Card.Title>Bailey Wilson</Card.Title>
                        <Card.Text>
                        I am Bailey, a 4th year Business student at Cal Poly. I enjoy sleeping.
                        </Card.Text>
                        <Button variant="primary">bailbail@Naturepedia.com</Button>
                    </Card.Body>
                </Card>
            </div>
            
            <div className="profile"> 
                <Card border='dark' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={brandonprofile} />
                    <Card.Body>
                        <Card.Title>Brandon Lam</Card.Title>
                        <Card.Text>
                        I am Brandon, a 4th year Computer Engineering student at Cal Poly. I enjoy eating.
                        </Card.Text>
                        <Button variant="primary">branbran@Naturepedia.com</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="profile"> 
                <Card border='dark' style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={dimprofile} />
                    <Card.Body>
                        <Card.Title>Dimitrije Kostic</Card.Title>
                        <Card.Text>
                        I am Dimitrije, a 4th year Computer Engineering student at Cal Poly. I enjoy playing basketball.
                        </Card.Text>
                        <Button variant="primary">dimdim@Naturepedia.com</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="profile"> 
                <Card border='dark' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={kenprofile} />
                    <Card.Body>
                        <Card.Title>Kenneth Liu</Card.Title>
                        <Card.Text>
                        I am Kenneth, a 4th year Computer Engineering student at Cal Poly. I enjoy walking.
                        </Card.Text>
                        <Button variant="primary">kenken@Naturepedia.com</Button>
                    </Card.Body>
                </Card>
            </div>
               
        </div>
      </div>
    )
}

function Images(){
    return(
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
            <img src={baileyprofile} className="Bails" width="200" height="200"/>
            <img src={brandonprofile} className="Brandon" width="200" height="200"/>
            <img src={dimprofile} className="Dim" width="200" height="200"/>
            <img src={kenprofile} className="Kenneth" width="200" height="200"/>
        </div>
    )
}

const ContactPage = () => {
    return (
        <div>
            <h3 style={{ fontSize: 50 }}>CONTACT PAGE</h3>
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
            <div>
                <p></p>
                {/* <Images></Images> */}
            </div>
            <div>
                <Bailey></Bailey>
            </div>
        </div>
    );
}

export default ContactPage;