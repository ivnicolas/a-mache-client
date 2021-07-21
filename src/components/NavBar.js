import React from 'react';

const NavBar = () => {
    return (
        
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#00209F'}}>
        <a className="navbar-brand" href="/" style={{color: 'white'}}>Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                             <li className="nav-item">
                                <a className="nav-link" href="/new-post" style={{color: 'white'}}>Create Post</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about" style={{color: 'white'}} >About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/safety" style={{color: 'white'}}>Safety and Scams</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{color: 'white'}}>Search</button>
                        </form>
                    </div>

    </nav>
    )
}

export default NavBar;

