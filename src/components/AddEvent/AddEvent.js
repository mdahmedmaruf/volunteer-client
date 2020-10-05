import React, { useContext, useState } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import { VolunteerItemContext } from '../Volunteer/VolunteerContext';

const AddEvent = () => {
    const [name, setName] = useState('');
    const [addImage, setAddImage] = useState('');
    const [volunteerLists, setVolunteerLists] = useContext(VolunteerItemContext);
    console.log(volunteerLists, setVolunteerLists);

    const updateName = e => {
        setName(e.target.value);
    };
    const handleAddImage = e => {
        setAddImage(URL.createObjectURL(e.target.files[0]));
        setVolunteerLists(volunteerLists => [...volunteerLists, {pic: addImage}]);
    };
    
    const addEvent = e => {
        e.preventDefault();
        setVolunteerLists(prevEvents => [...prevEvents, {name: name, addImage: addImage}]);
    };
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-3">
                    <Link className="navbar-brand" to="/">
                        <img style={{width: '90%'}} src={logo} alt=""/>
                    </Link>
                </div>
                <div className="col-md-9">
                    <h4 className="mt-3">Add Event</h4>
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
                
                    <form style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}} onSubmit={addEvent}>
                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="title">Event Title</label>
                            <input type="text" className="form-control" id="title" name="name" value={name} onChange={updateName}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="date">Event Date</label>
                            <input type="date" className="form-control" id="date"/>
                        </div>
                        </div>
                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="description">Description</label>
                            <textarea name="" className="form-control" id="description" cols="30" rows="4"></textarea>
                            
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="image">Upload Image</label>
                            <input style={{border: 'none', backgroundColor: 'transparent'}} onChange={handleAddImage} type="file" className="form-control" id="image"/>
                            <img src={addImage} alt=""/>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;