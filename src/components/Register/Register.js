import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logo.png';
import { VolunteerItemContext } from '../Volunteer/VolunteerContext';
import './Register.css';

const Register = () => {
    const [loggedInUser] = useContext(UserContext);
    const [volunteerLists] = useContext(VolunteerItemContext);
    const [isSubmit, setIsSubmit] = useState(false);
    const {_id} = useParams();
    const [regForm, setRegForm] = useState({fullName: loggedInUser.name, email: loggedInUser.email, date: '', description: ''});
    const {date, description} = regForm;

    console.log(volunteerLists)

    const handleRegInputs = e => {
        setRegForm({...regForm, [e.target.name]: e.target.value});
    }

    const hanndleRegForm = e => {
        e.preventDefault();
        
        fetch('https://vast-river-71348.herokuapp.com/addRegistration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(regForm)
        })
        .then(res => res.json())
        .then(result => {
            if(result) {
                //console.log(result)
            }
        });
        setIsSubmit(true);
        
    }

    const [singleEvent, setSingleEvent] = useState({})

    useEffect(() => {
        fetch(`https://vast-river-71348.herokuapp.com/singleVolunteerEvent/${_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setSingleEvent(data));
    }, [])

    console.log(singleEvent)

    
    
    return (
        <div className="registration-container">
            <div className="register-login-logo">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <div className="welcome-message mt-5 text-center">
                <h3>Hello {loggedInUser.name}! Welcome to Our {} Volunteer Program</h3>
                <p>Want to Register a <Link to="/">different Volunteer Program?</Link> </p>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="registration-form border border-info rounded-sm my-5 mx-3 p-5">
                        <h4>Register as a Volunteer</h4>
                        <form onSubmit={hanndleRegForm}>
                            <input type="text" name="fullName" placeholder="Full Name" defaultValue={loggedInUser.name} onChange={handleRegInputs} />
                            <input type="email" name="email" id="email" placeholder="Email" defaultValue={loggedInUser.email} onChange={handleRegInputs} />
                            <input type="date" name="date" id="date" value={date} onChange={handleRegInputs} />
                            <input type="text" name="description" placeholder="Description" value={description} onChange={e => handleRegInputs(e)}/>
                            <input type="text" name="volunteerName" placeholder="Volunteer Name"  value={singleEvent.name} onChange={e => handleRegInputs(e)} />
                            <input type="submit" value="Register"/>
                            {
                                isSubmit &&
                                <>
                                <p className="mt-3"> <span className="text-success">Registration Successfull!!</span> You Can Visit <Link className="text-primary" to="/profile">Profile Page</Link> for Review Your Registration!!</p>
                                </>
                            }
                        </form>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Register;