import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <nav id="navbar" className="">
                <div>
                    <div>
                        <a href="#home"><Link to='/'><h1 className="denzin">Denzin Store</h1></Link></a>
                    </div>
                    <ul id="menu">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li className="about"><Link to='/about'>About</Link></li>
                    </ul>
                </div>
            </nav>
            {/* </header > */}
        </div >
    )
}

export default Navbar