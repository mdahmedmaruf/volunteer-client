import React from 'react';
import NavBar from '../Header/NavBar';
import VolunteerList from '../Volunteer/VolunteerList';

const Home = () => {
    return (
        <>
        <NavBar/>
        <div className="container mt-5 text-center">
            <h2 className="mb-5">I Grow By Helping People in Need</h2>
            <div className="row mb-5">
                <div className="col-md-6 offset-md-3"></div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search..."/>
                        <div className="input-group-append">
                        <span className="input-group-text">Search</span>
                    </div>
                </div>
            </div>
            <VolunteerList />
        </div>
        </>
    );
};

export default Home;