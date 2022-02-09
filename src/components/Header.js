import React from "react"
import {Link} from 'react-router-dom'
import logo from '../CircleDollar.png'

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="App-logo"><img src={logo} className="nav-logo"/></div>
                <h3 className="nav--logo_text">Stock Basics</h3>
                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>  
                    <li><Link to="/stocks">Stocks</Link></li> 
                    <li><Link to="/research">Research</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

