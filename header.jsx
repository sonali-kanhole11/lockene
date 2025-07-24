import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='main-nav'>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Products
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item text-color blue" href="#">Services</a></li>
                                <li><a className="dropdown-item" href="#">Sales</a></li>
                                <li><a className="dropdown-item" href="#">Service</a></li>
                                <li><a className="dropdown-item" href="#">FSM</a></li>
                                <li><a className="dropdown-item" href="#">eCommers</a></li>
                                <li><a className="dropdown-item" href="#">Acounting</a></li>
                            </ul>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Why Lockene</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Request A Demo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <button className='btn_t'>Get Free Trial</button>

                        </ul>
                    </div>
                </div>
                </nav>
                </div>
            
    )
}

export default Header