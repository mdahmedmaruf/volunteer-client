import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import { UserContext } from '../../App';

const AdminNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-light bg-light px-5 py-4">
            <Link to="/" className="navbar-brand">
                <img style={{width: '92%'}} src={logo} alt=""/>
            </Link>
            <li style={{listStyle: 'none', textAlign: 'right', marginRight: '50px'}} className="nav-item dropdown user-name">
                <p style={{display: 'inline'}} className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="profile-pic"><img src={loggedInUser.photo} alt=""/></span> {loggedInUser.name}
                </p>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/profile" className="dropdown-item">Profile</Link>
                    <p onClick={() => setLoggedInUser({})} className="dropdown-item" role="button">Sign Out</p>
                </div>
            </li>
        </nav>
    );
};

export default AdminNav;