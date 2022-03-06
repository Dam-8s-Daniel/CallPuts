import React from "react"
import {Link} from 'react-router-dom'
import logo from '../CallPutLogo3.png'
import robot from '../CircleDollar2.png'

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="App-logo"><img src={robot} className="nav-logo"/><img src={logo} className="nav-logoCallPuts"/></div>
                <h3 className="nav--logo_text"></h3>
                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/stocks">Charts</Link></li> 
                    <li><Link to="/research">Research</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

