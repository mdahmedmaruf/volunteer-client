import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logo.png';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
    <header>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <Link className="navbar-brand" to="/">
                    <img className="img-fluid" src={logo} alt="site-logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/donation">Donation</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link signin-button" to="/register">Register</Link>
                        </li>
                        {
                        loggedInUser.email ? (
                            <>
                            <li className="nav-item mx-2">
                                <Link className="nav-link admin-button btn-primary text-light rounded-sm px-3" to="/events">Admin</Link>
                            </li>
                            <li className="nav-item dropdown ml-2  user-name">
                                <p className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="profile-pic"><img src={loggedInUser.photo} alt=""/></span> {loggedInUser.name}
                                </p>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to="/profile" className="dropdown-item">Profile</Link>
                                    <p onClick={() => setLoggedInUser({})} className="dropdown-item" role="button">Sign Out</p>
                                </div>
                            </li>
                            </>
                            ) : (
                            <li>
                                <Link className="nav-link signin-button btn-primary text-light rounded-sm px-3 mx-2" to="/login">Sign in</Link>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    );
};

export default NavBar;