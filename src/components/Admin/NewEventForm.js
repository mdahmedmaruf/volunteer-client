import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NewEventForm = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    const [eventData, setEventData] = useState({name: '', pic: '', date: '', description: ''});
    const {name, pic, date, description} = eventData;
    
    const handleInputs = e => {
        setEventData({...eventData, [e.target.name]: e.target.value});
    }
    
    const handleEventSubmit = (e) => {
        e.preventDefault();
        
        fetch('https://vast-river-71348.herokuapp.com/addVolunteerList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(result => {
            if(result) {
                //console.log(result)
            }
        });
        setIsSubmit(true);
    };
    return (
        <form style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}} onSubmit={handleEventSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="title">Event Title *</label>
                    <input type="text" className="form-control" id="title" name="name" value={name} onChange={e => handleInputs(e)} required/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="date">Event Date</label>
                    <input type="date" className="form-control" id="date" name="date" value={date} onChange={e => handleInputs(e)} />
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" className="form-control" id="description" cols="30" rows="4" value={description} onChange={e => handleInputs(e)} ></textarea>
                    
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="image">Add Image URL Below *</label>
                    <input  type="text" name="pic" className="form-control" id="image" value={pic} onChange={e => handleInputs(e)} required/>
                    <img src={pic} alt=""/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {
                isSubmit &&
                <>
                <p className="mt-3"> <span className="text-success">Event Added Successfully!!</span> You Can Visit the <Link className="text-primary" to="/">Home Page</Link> for Review the Event!!</p>
                <p>(Note: If you do not see the new event try an reload the browser)</p>
                </>
            }
        </form>
    );
};

export default NewEventForm;