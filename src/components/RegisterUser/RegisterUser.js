import React from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const RegisterUser = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-3">
                <Link className="navbar-brand" to="/">
                    <img style={{width: '90%'}} src={logo} alt=""/>
                </Link>
                </div>
                <div className="col-md-9">
                    <h4 className="mt-3">Register User Lists</h4>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-3">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/users">Volunteer Register Users</Link>
                            </li>
                            <li>
                                <Link to="/events">Add Event</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <form>
                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="title">Event Title</label>
                            <input type="text" className="form-control" id="title" name="name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="date">Event Date</label>
                            <input type="date" className="form-control" id="date"/>
                        </div>
                        </div>
                        
                        
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterUser;