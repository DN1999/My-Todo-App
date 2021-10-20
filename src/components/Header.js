import React from 'react'
// import Edit from './Edit'

import { Link } from 'react-router-dom';

const Header = () => {
    let headerStyle={
        border:"3px solid violet"
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark "style={headerStyle}>
                <div className="container-fluid">
                    <Link className="text-white h4" to="/">MyTodo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active and text-white h4" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link and text-white h4" to="./Edit">Edit</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link and text-white h4" to="/Todos">Todos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
