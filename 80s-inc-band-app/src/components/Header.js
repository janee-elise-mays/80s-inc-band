import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import bgimage from '../images/neon.jpg'

function Header() {
    return (
            <Jumbotron style={{backgroundImage: `url(${bgimage})`, backgroundSize: 'contain'}}>
                <header style={{backgroundColor: "transparent"}}>
                    <h1 style={{backgroundColor: "transparent"}}>80's Inc.</h1>
                </header>
            </Jumbotron>
    );
}

export default Header;
