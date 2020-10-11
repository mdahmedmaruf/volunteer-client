import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import NavBar from '../Header/NavBar';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://vast-river-71348.herokuapp.com/userTask?email='+loggedInUser.email, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setTasks(data));
    }, [])
    const handleDeleteTask = (id) => {
        const deleteTask = document.getElementById(id);
        fetch(`https://vast-river-71348.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result) {
                deleteTask.style.display = 'none';
            }
        })
    }
    return (
        <>
            <NavBar/>
            <div className="container mt-5">
                <div className="row mt-5">
                    {
                        tasks.length > 0 ?
                        <h3 className="text-center">You have Registered in {tasks.length} Volunteer Program! </h3>
                        :
                        <h3 className="text-center">You haven't Registered any Volunteer Program Yet!</h3>
                    }
                    {
                        tasks.map(task => (
                            
                            <div id={task._id} key={task._id} className="col-md-6 my-5">
                               { console.log(task)}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div style={{display: 'flex', alignItems: 'center'}} className="single-events border border-info rounded-sm p-3">
                                            <div className="col-md-6">
                                                <img style={{width: '100%'}} className="img-fluid rounded-sm" src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                                            </div>
                                            <div className="col-md-6 event-content">
                                                <h3> {task.volunteerName} </h3>
                                                <p> {new Date(task.date).toDateString().split(' ').slice(1).join(' ')} </p>
                                                <button onClick={() => handleDeleteTask(task._id)} style={{display: 'flex', alignItems: 'flex-end'}} className="btn btn-primary text-light">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Profile;