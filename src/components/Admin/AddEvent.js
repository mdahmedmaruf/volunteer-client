import React from 'react';
import NewEventForm from './NewEventForm';
import AdminSidebar from './AdminSidebar';
import AdminNav from './AdminNav';

const AddEvent = () => {
    return (
        <>
        <AdminNav/>
            <div className="row px-5 py-4">
                <div className="col-md-3">
                    <AdminSidebar/>
                </div>
                <div className="col-md-9">
                    <h4 className="my-4">Add New Event</h4>
                    <NewEventForm/>
                </div>
            </div>
        </>
    );
};

export default AddEvent;