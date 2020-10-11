import React, { useEffect } from 'react';
import { useState } from 'react';
import AdminNav from './AdminNav';
import AdminSidebar from './AdminSidebar';

const RegisterUser = () => {
    const [regLists, setRegLists] = useState([]);
    
    useEffect(() => {
        fetch('https://vast-river-71348.herokuapp.com/AllRegisterUsers')
        .then(res => res.json())
        .then(data => setRegLists(data));
    }, []);

    const handleDeleteUser = (id) => {
        const deleteUser = document.getElementById(id);
        fetch(`https://vast-river-71348.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result) {
                deleteUser.style.display = 'none';
            }
        })
    }
    return (
        <>
        <AdminNav/>
        <div className="row px-5 py-4">
            <div className="col-md-3">
                <AdminSidebar/>
            </div>
            <div className="col-md-9">
                <h4 className="my-4">Register User Lists</h4>
                <table className="register-user-list">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Registration Date</th>
                            <th scope="col">Volunteer List</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          regLists.map(regList => (
                            <tr id={regList._id} key={regList._id}>
                                <td> {regList.fullName} </td>
                                <td> {regList.email} </td>
                                <td> {regList.date} </td>
                                <td> {regList.volunteerName} </td>
                                <td>
                                    <svg onClick={() => handleDeleteUser(regList._id)} width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="button">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </td>
                            </tr>
                          )) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default RegisterUser;